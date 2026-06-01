"use client";

import { useEffect, useMemo, useState } from "react";
import {
  collection,
  onSnapshot,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { firestoreDb } from "@/lib/firebase/firestore";
import type { ContactSubmission } from "@/lib/firebase/types";

type ContactTab = "open" | "dealt";
type PipelineOption = "lead" | "convert_to_lead" | "inquiry" | "dealt_with";

function toDateLabel(dateValue?: ContactSubmission["createdAt"]) {
  if (!dateValue) return "Just now";
  return dateValue.toDate().toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function sortByCreatedDesc(list: ContactSubmission[]) {
  return [...list].sort((a, b) => (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0));
}

function normalizePipelineStatus(contact: ContactSubmission): PipelineOption {
  const raw = (contact as ContactSubmission & { pipelineStatus?: string }).pipelineStatus;
  if (raw === "lead" || raw === "convert_to_lead" || raw === "inquiry" || raw === "dealt_with") {
    return raw;
  }
  return contact.status === "dealt" ? "dealt_with" : "inquiry";
}

function statusLabel(value: PipelineOption) {
  if (value === "lead") return "Lead";
  if (value === "convert_to_lead") return "Convert to lead";
  if (value === "dealt_with") return "Dealt with";
  return "Inquiry";
}

export default function AdminContactOpenPage() {
  const [contacts, setContacts] = useState<Array<ContactSubmission & { pipelineStatus?: PipelineOption }>>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<ContactTab>("open");
  const [busyId, setBusyId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestoreDb, "contactSubmissions"), (snapshot) => {
      const records: Array<ContactSubmission & { pipelineStatus?: PipelineOption }> = snapshot.docs.map(
        (entry) => ({
        id: entry.id,
        ...(entry.data() as Omit<ContactSubmission, "id" | "pipelineStatus"> & {
          pipelineStatus?: PipelineOption;
        }),
      }),
      );
      setContacts(sortByCreatedDesc(records));
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const openContacts = useMemo(() => contacts.filter((contact) => contact.status !== "dealt"), [contacts]);
  const dealtContacts = useMemo(() => contacts.filter((contact) => contact.status === "dealt"), [contacts]);
  const totalOpen = useMemo(() => openContacts.length, [openContacts.length]);
  const dealtCount = useMemo(() => dealtContacts.length, [dealtContacts.length]);
  const totalLeads = useMemo(() => contacts.length, [contacts.length]);
  const todayOpenCount = useMemo(() => {
    const today = new Date();
    return openContacts.filter((contact) => {
      if (!contact.createdAt) return false;
      const created = contact.createdAt.toDate();
      return (
        created.getDate() === today.getDate() &&
        created.getMonth() === today.getMonth() &&
        created.getFullYear() === today.getFullYear()
      );
    }).length;
  }, [openContacts]);

  const visibleRows = activeTab === "open" ? openContacts : dealtContacts;

  async function handlePipelineChange(contactId: string, option: PipelineOption) {
    setBusyId(contactId);
    const nextStatus = option === "dealt_with" ? "dealt" : "open";
    await updateDoc(doc(firestoreDb, "contactSubmissions", contactId), {
      pipelineStatus: option,
      status: nextStatus,
      dealtAt: option === "dealt_with" ? serverTimestamp() : null,
    });
    setBusyId(null);
  }

  return (
    <section className="admin-panel">
      <header className="admin-panel-header">
        <div>
          <p className="admin-panel-kicker">Contacts</p>
          <h2>Contact Dashboard</h2>
        </div>
      </header>

      <section className="admin-overview-grid">
        <div className="admin-kpi-grid">
          <article className="admin-kpi-card">
            <p>Open enquiries</p>
            <strong>{totalOpen}</strong>
          </article>
          <article className="admin-kpi-card">
            <p>Dealt enquiries</p>
            <strong>{dealtCount}</strong>
          </article>
          <article className="admin-kpi-card">
            <p>Total leads</p>
            <strong>{totalLeads}</strong>
          </article>
          <article className="admin-kpi-card">
            <p>New today</p>
            <strong>{todayOpenCount}</strong>
          </article>
        </div>

        <aside className="admin-action-card">
          <p className="admin-panel-kicker">Status Flow</p>
          <h3>Process incoming enquiries</h3>
          <p>Use row-level status options to move items between open and dealt quickly.</p>
        </aside>
      </section>

      <section className="admin-toggle-strip">
        <button
          type="button"
          className={activeTab === "open" ? "admin-toggle-btn active" : "admin-toggle-btn"}
          onClick={() => setActiveTab("open")}
        >
          Open ({openContacts.length})
        </button>
        <button
          type="button"
          className={activeTab === "dealt" ? "admin-toggle-btn active" : "admin-toggle-btn"}
          onClick={() => setActiveTab("dealt")}
        >
          Dealt ({dealtContacts.length})
        </button>
      </section>

      {loading ? (
        <p className="admin-muted-text">Loading enquiries...</p>
      ) : null}

      {!loading && !visibleRows.length ? (
        <div className="admin-empty-state">
          <h3>No enquiries in this view</h3>
          <p>Switch tabs or wait for new submissions to appear.</p>
        </div>
      ) : null}

      <section className="admin-row-table-wrap">
        <div className="admin-row-table">
          <div className="admin-row-table-head">
            <span>Name</span>
            <span>Email</span>
            <span>Company</span>
            <span>Created</span>
            <span>Status</span>
          </div>
          {visibleRows.map((contact) => (
            <div className="admin-row-item" key={contact.id}>
              <div>
                <strong>{contact.fullName || "Unnamed lead"}</strong>
                <p className="admin-row-subtext">{contact.phoneNumber || "-"}</p>
              </div>
              <span>{contact.workEmail || "-"}</span>
              <span>{contact.company || "-"}</span>
              <span>{toDateLabel(contact.createdAt)}</span>
              <label className="admin-row-status-select">
                <select
                  value={normalizePipelineStatus(contact)}
                  onChange={(event) => handlePipelineChange(contact.id, event.target.value as PipelineOption)}
                  disabled={busyId === contact.id}
                >
                  <option value="lead">Lead</option>
                  <option value="convert_to_lead">Convert to lead</option>
                  <option value="inquiry">Inquiry</option>
                  <option value="dealt_with">Dealt with</option>
                </select>
                <span className="admin-row-subtext">{statusLabel(normalizePipelineStatus(contact))}</span>
              </label>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
