import { PageHero } from "@/components/marketing/PageHero";
import { InfoCard, InfoGrid } from "@/components/marketing/InfoCards";

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Notes from the <em>field.</em>
          </>
        }
        description="Regulatory updates, process tips, and build stories from plants we commission and operate — publishing soon on this domain."
      />
      <InfoGrid>
        <InfoCard title="CPCB &amp; SPCB watch">
          <p>
            What changing discharge parameters mean for brownfield ETPs and new ZLD
            investments.
          </p>
        </InfoCard>
        <InfoCard title="Membrane recovery levers">
          <p>
            Antiscalant selection, flux policy, and CIP discipline — three knobs that
            move recovery by whole percentage points.
          </p>
        </InfoCard>
        <InfoCard title="Crystallizer operations">
          <p>
            Seeding, supersaturation control, and solids handling lessons from live
            MEE/MVR trains.
          </p>
        </InfoCard>
        <InfoCard title="Subscribe">
          <p>
            Full articles and case studies will appear here. Until then, reach us at{" "}
            <a href="mailto:hello@austrochem.com" style={{ color: "var(--blue)" }}>
              hello@austrochem.com
            </a>
            .
          </p>
        </InfoCard>
      </InfoGrid>
    </>
  );
}
