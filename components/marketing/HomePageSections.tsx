import { Reveal } from "./Reveal";
import { ClientMarquee } from "./ClientMarquee";
import { HomeGlobeSection } from "./HomeGlobeSection";
import { HomeProductPreview } from "./HomeProductPreview";
import { HomeServicesCards } from "./HomeServicesCards";

export function HomePageSections() {
  return (
    <>
      <HomeProductPreview />

      <HomeGlobeSection />

      <section className="canvas" id="services" aria-labelledby="services-heading">
        <Reveal>
          <div className="section-head section-head--center services-section-head">
            <div>
              <span className="section-tag">05 — Our Services</span>
              <h2 className="section-title" id="services-heading">
                From feasibility to <em>three-decade</em> operations.
              </h2>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <HomeServicesCards />
        </Reveal>
      </section>

      <section className="clients" id="industries" aria-labelledby="clients-heading">
        <div className="clients-head">
          <Reveal>
            <span className="section-tag">06 — Our Clientele</span>
            <h2 className="section-title" id="clients-heading">
              Trusted by the manufacturers who set the <em>standard.</em>
            </h2>
          </Reveal>
        </div>
        <ClientMarquee />
      </section>
    </>
  );
}
