import Link from "next/link";
import { Reveal } from "./Reveal";
import { ClientMarquee } from "./ClientMarquee";
import { HomeProductPreview } from "./HomeProductPreview";

export function HomePageSections() {
  return (
    <>
      <HomeProductPreview />

      <section className="canvas" id="services" aria-labelledby="services-heading">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="section-tag">04 — Our Services</span>
              <h2 className="section-title" id="services-heading">
                From feasibility to <em>three-decade</em> operations.
              </h2>
            </div>
            <p className="section-sub">
              A full lifecycle partner — design, build, commission, operate. Most of
              our clients have been with us for over fifteen years.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="services-grid">
            <div className="service">
              <span className="num">S / 01</span>
              <div className="icon" aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 12h18M3 6h18M3 18h12" />
                </svg>
              </div>
              <div>
                <h4>Design &amp; Engineering</h4>
                <p>
                  Process design, P&amp;ID, civil and structural — delivered by an
                  in-house team of 60+ engineers.
                </p>
              </div>
            </div>
            <div className="service">
              <span className="num">S / 02</span>
              <div className="icon" aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </div>
              <div>
                <h4>Build &amp; Commission</h4>
                <p>EPC delivery, factory-acceptance testing, on-site commissioning and operator training.</p>
              </div>
            </div>
            <div className="service">
              <span className="num">S / 03</span>
              <div className="icon" aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3v18M3 12h18" />
                </svg>
              </div>
              <div>
                <h4>Operate &amp; Maintain</h4>
                <p>O&amp;M contracts with KPI-driven SLAs, remote SCADA monitoring and predictive maintenance.</p>
              </div>
            </div>
            <div className="service">
              <span className="num">S / 04</span>
              <div className="icon" aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 20l6-6 4 4 6-10" />
                </svg>
              </div>
              <div>
                <h4>Audit &amp; Optimize</h4>
                <p>Independent water audits, debottlenecking studies and ZLD readiness assessments.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="clients" id="industries" aria-labelledby="clients-heading">
        <div className="clients-head">
          <Reveal>
            <span className="section-tag">05 — Our Clientele</span>
            <h2 className="section-title" id="clients-heading">
              Trusted by the manufacturers who set the <em>standard.</em>
            </h2>
          </Reveal>
        </div>
        <ClientMarquee />

        <Reveal>
          <div className="cta-strip" id="contact">
            <h3>
              Ready to engineer <em>your</em> water loop?
            </h3>
            <Link className="btn-primary" href="/contact">
              Start a project <span className="arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
