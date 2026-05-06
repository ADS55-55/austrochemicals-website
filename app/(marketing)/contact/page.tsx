import { PageHero } from "@/components/marketing/PageHero";
import { InfoCard, InfoGrid } from "@/components/marketing/InfoCards";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s scope your <em>next</em> water project.
          </>
        }
        description="Share flow, quality, and discharge targets — our engineering desk typically responds within two business days with a structured next step."
      />
      <InfoGrid>
        <InfoCard title="Sales &amp; new projects">
          <p>
            <a href="mailto:hello@austrochem.com" style={{ color: "var(--blue)" }}>
              hello@austrochem.com
            </a>
            <br />
            +91 79 2583 4000
          </p>
        </InfoCard>
        <InfoCard title="Headquarters">
          <p>
            Austro Chem Technologies Pvt. Ltd.
            <br />
            Plot 14B, Phase II, GIDC Vatva
            <br />
            Ahmedabad — 382 445, Gujarat, India
          </p>
        </InfoCard>
        <InfoCard title="What to send">
          <p>
            Recent lab reports, block flow or PFD if available, consent limits, and
            your target recovery or ZLD boundary conditions.
          </p>
        </InfoCard>
        <InfoCard title="Careers">
          <p>
            For roles in engineering, projects, or field operations, mention your
            discipline and years of experience in the subject line.
          </p>
        </InfoCard>
      </InfoGrid>
    </>
  );
}
