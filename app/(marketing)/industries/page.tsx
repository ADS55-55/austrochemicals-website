import { PageHero } from "@/components/marketing/PageHero";
import { InfoCard, InfoGrid } from "@/components/marketing/InfoCards";

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Built for sectors where <em>water risk</em> is core business risk.
          </>
        }
        description="We translate sector-specific contaminants, uptime needs, and consent limits into treatment architectures that last."
      />
      <InfoGrid>
        <InfoCard title="Textiles &amp; apparel">
          <p>
            Colour, salt, and surfactant loads — CETPs and captive ETPs engineered
            for recovery-first outcomes.
          </p>
        </InfoCard>
        <InfoCard title="Pharma &amp; life sciences">
          <p>
            High organics, solvents, and validation-grade documentation for
            regulated manufacturing environments.
          </p>
        </InfoCard>
        <InfoCard title="Chemicals &amp; polymers">
          <p>
            Variable batch discharges, shock loads, and integrated ZLD for complex
            inorganic salt balances.
          </p>
        </InfoCard>
        <InfoCard title="Refining &amp; petrochemicals">
          <p>
            Oil-in-water separation, phenolics, and large-volume balancing with
            robust safety and turnaround planning.
          </p>
        </InfoCard>
        <InfoCard title="Food &amp; beverage">
          <p>
            COD-heavy streams, grease handling, and odour control with reuse-quality
            polishing where required.
          </p>
        </InfoCard>
        <InfoCard title="Power &amp; utilities">
          <p>
            Cooling tower blowdown, FGD wastewaters, and high-TDS side streams
            managed within plant water balances.
          </p>
        </InfoCard>
      </InfoGrid>
    </>
  );
}
