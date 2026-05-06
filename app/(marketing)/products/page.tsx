import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { InfoCard, InfoGrid } from "@/components/marketing/InfoCards";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Equipment &amp; chemistry <em>for the plant floor.</em>
          </>
        }
        description="Skids, chemistry, and controls — specified together so your treatment train performs as one integrated system."
      />
      <InfoGrid>
        <InfoCard title="Reverse osmosis &amp; membranes">
          <p>
            High-recovery RO, NF, and UF trains for TDS-heavy streams — skid-mounted
            and factory-tested before dispatch.
          </p>
        </InfoCard>
        <InfoCard title="Evaporators &amp; crystallizers">
          <p>
            MEE, MVR, and forced-circulation crystallizers sized for ZLD salt
            outlets and condensate polish.
          </p>
        </InfoCard>
        <InfoCard title="Specialty chemistry">
          <p>
            Coagulants, antiscalants, biocides, and custom dosing regimes developed
            with your influent fingerprint in mind.
          </p>
        </InfoCard>
        <InfoCard title="SCADA &amp; controls">
          <p>
            Plant dashboards, historian trends, and secure remote access for
            operations teams and engineering support.
          </p>
        </InfoCard>
        <InfoCard title="Sludge &amp; dewatering">
          <p>
            Filter presses, decanters, and cake handling integrated with upstream
            biological and chemical stages.
          </p>
        </InfoCard>
        <InfoCard title="Need a datasheet?">
          <p>
            <Link href="/contact" style={{ color: "var(--blue)", fontWeight: 600 }}>
              Contact sales →
            </Link>{" "}
            for specifications, GA drawings, and reference lists.
          </p>
        </InfoCard>
      </InfoGrid>
    </>
  );
}
