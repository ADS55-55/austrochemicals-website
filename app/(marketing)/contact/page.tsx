"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { VideoPageHero } from "@/components/marketing/VideoPageHero";
import { firestoreDb } from "@/lib/firebase/firestore";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await addDoc(collection(firestoreDb, "contactSubmissions"), {
        fullName: formData.get("fullName")?.toString().trim() ?? "",
        workEmail: formData.get("workEmail")?.toString().trim() ?? "",
        company: formData.get("company")?.toString().trim() ?? "",
        phoneNumber: formData.get("phoneNumber")?.toString().trim() ?? "",
        requirement: formData.get("requirement")?.toString().trim() ?? "",
        dailyFlow: formData.get("dailyFlow")?.toString().trim() ?? "",
        message: formData.get("message")?.toString().trim() ?? "",
        status: "open",
        createdAt: serverTimestamp(),
      });
      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <VideoPageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s shape your <em>next</em> water project
          </>
        }
        description="Share your flow, quality, and discharge targets. Our engineering team responds with a structured plan and practical next actions."
      />
      <div className="dotted-page-shell">
      <section className="content-block contact-page">
        <div className="contact-layout">
          <article className="contact-card contact-card--main">
            <h2>Project discussion form</h2>
            <p>
              Fill in your core project details and our team will connect with a
              practical next-step recommendation.
            </p>
            <form className="contact-form-grid" onSubmit={handleSubmit}>
              <input type="text" name="fullName" placeholder="Full name" required />
              <input type="email" name="workEmail" placeholder="Work email" required />
              <input type="text" name="company" placeholder="Company" required />
              <input type="text" name="phoneNumber" placeholder="Phone number" required />
              <select defaultValue="" name="requirement" required>
                <option value="" disabled>
                  Select requirement
                </option>
                <option>Zero Liquid Discharge (ZLD)</option>
                <option>Effluent Treatment Plant (ETP)</option>
                <option>Sewage Treatment Plant (STP)</option>
                <option>Service / O&amp;M support</option>
              </select>
              <input type="text" name="dailyFlow" placeholder="Daily flow (MLD/KLD)" required />
              <textarea
                rows={5}
                name="message"
                placeholder="Share influent profile, consent norms, and timeline"
                required
              />
              <button type="submit" className="btn-primary contact-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Enquiry"} <span className="arrow">→</span>
              </button>
              {submitState === "success" ? (
                <p className="contact-form-feedback success">
                  Thank you. Our team has received your enquiry and will reach out soon.
                </p>
              ) : null}
              {submitState === "error" ? (
                <p className="contact-form-feedback error">
                  Submission failed. Please try again or email{" "}
                  <a href="mailto:sales@austrowatertech.com">sales@austrowatertech.com</a>.
                </p>
              ) : null}
            </form>
          </article>

          <aside className="contact-card contact-info-panel" aria-labelledby="contact-info-heading">
            <h2 className="contact-info-panel__title" id="contact-info-heading">
              Contact Information
            </h2>

            <div className="contact-info-list">
              <article className="contact-info-item">
                <div className="contact-info-item__icon" aria-hidden>
                  <MapPin size={22} strokeWidth={2} />
                </div>
                <div className="contact-info-item__body">
                  <h3>Office Location</h3>
                  <p>
                    Austro Chemicals &amp; Bio Technologies PVT LTD,
                    <br />
                    S.F.No : 158/1B,
                    <br />
                    SSM Dyeings Compound, Murugampalayam,
                    <br />
                    Iduvampalayam (PO),
                    <br />
                    Tirupur - 641 687.
                  </p>
                </div>
              </article>

              <article className="contact-info-item">
                <div className="contact-info-item__icon" aria-hidden>
                  <Mail size={22} strokeWidth={2} />
                </div>
                <div className="contact-info-item__body">
                  <h3>Email Drop Us</h3>
                  <p>
                    <a href="mailto:sales@austrowatertech.com">sales@austrowatertech.com</a>
                  </p>
                </div>
              </article>

              <article className="contact-info-item">
                <div className="contact-info-item__icon" aria-hidden>
                  <Phone size={22} strokeWidth={2} />
                </div>
                <div className="contact-info-item__body">
                  <h3>Call for Help</h3>
                  <p>
                    <a href="tel:+919843033140">+(91) 98430 33140</a>
                  </p>
                </div>
              </article>
            </div>
          </aside>
        </div>

        <section className="contact-process-grid" aria-label="How we engage">
          <article className="contact-process-card">
            <span>01</span>
            <h3>Technical review</h3>
            <p>
              We review influent chemistry, hydraulic profile, and discharge
              goals to define a realistic treatment path.
            </p>
          </article>
          <article className="contact-process-card">
            <span>02</span>
            <h3>Design recommendation</h3>
            <p>
              You receive a clear recommendation with process architecture,
              footprint assumptions, and implementation priorities.
            </p>
          </article>
          <article className="contact-process-card">
            <span>03</span>
            <h3>Execution roadmap</h3>
            <p>
              We align engineering, timelines, and commissioning milestones so
              your project moves from concept to performance with confidence.
            </p>
          </article>
        </section>
      </section>
      </div>
    </>
  );
}
