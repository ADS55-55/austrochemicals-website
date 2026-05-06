import { PageHero } from "@/components/marketing/PageHero";
import { InfoCard, InfoGrid } from "@/components/marketing/InfoCards";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            From study to <em>decades</em> of operation.
          </>
        }
        description="One partner across feasibility, detailed engineering, EPC, commissioning, and long-term O&amp;M — with KPIs you can audit."
      />
      <InfoGrid>
        <InfoCard title="Feasibility &amp; piloting">
          <p>
            Treatability studies, pilot skids, and Capex–Opex models so decisions
            are grounded in your real wastewater matrix.
          </p>
        </InfoCard>
        <InfoCard title="Design &amp; engineering">
          <p>
            Process guarantees, P&amp;IDs, 3D layouts, and hazard studies delivered by
            multidisciplinary in-house teams.
          </p>
        </InfoCard>
        <InfoCard title="EPC &amp; commissioning">
          <p>
            Fabrication oversight, FAT/SAT, cold and hot commissioning, and
            structured handover to your operators.
          </p>
        </InfoCard>
        <InfoCard title="Operate &amp; maintain">
          <p>
            Staffing, consumables, SCADA monitoring, and preventive maintenance with
            SLAs tied to discharge and recovery metrics.
          </p>
        </InfoCard>
        <InfoCard title="Revamps &amp; debottlenecking">
          <p>
            Capacity uplifts, membrane replacements, and chemical programme tuning
            on live plants without unplanned downtime.
          </p>
        </InfoCard>
        <InfoCard title="Training &amp; documentation">
          <p>
            O&amp;M manuals, SOP libraries, and on-site training so your team owns the
            process day one.
          </p>
        </InfoCard>
      </InfoGrid>
    </>
  );
}
