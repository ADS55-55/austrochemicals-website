import Link from "next/link";
import { Reveal } from "./Reveal";
import { ClientMarquee } from "./ClientMarquee";

export function HomePageSections() {
  return (
    <>
      <section className="canvas" id="products" aria-labelledby="products-heading">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="section-tag">02 — Our Products</span>
              <h2 className="section-title" id="products-heading">
                Equipment, chemistry &amp; controls —{" "}
                <em>built for the plant floor.</em>
              </h2>
            </div>
            <p className="section-sub">
              A full stack of treatment products engineered in-house — from
              membrane skids to specialty polymers — and validated across
              hundreds of installations.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="product-grid">
            <article className="pcard wide">
              <div>
                <span className="num">P / 01</span>
                <h3>
                  Reverse Osmosis &amp; <em>Membrane</em> Skids
                </h3>
                <p>
                  High-recovery RO trains, NF and UF systems engineered for
                  chlorides, hardness and TDS-heavy streams. Skid-mounted,
                  factory-tested, plug-and-run.
                </p>
              </div>
              <Link className="more" href="/products">
                Specifications <span className="arrow">→</span>
              </Link>
            </article>

            <article className="pcard">
              <div>
                <span className="num">P / 02</span>
                <h3>
                  Evaporators &amp; <em>Crystallizers</em>
                </h3>
                <p>MEE, MVR and forced-circulation crystallizers for ZLD outlet salts.</p>
              </div>
              <Link className="more" href="/products">
                Specifications <span className="arrow">→</span>
              </Link>
            </article>

            <article className="pcard">
              <div>
                <span className="num">P / 03</span>
                <h3>
                  Specialty <em>Chemistry</em>
                </h3>
                <p>Coagulants, antiscalants, biocides and dosing trains formulated in-house.</p>
              </div>
              <Link className="more" href="/products">
                Specifications <span className="arrow">→</span>
              </Link>
            </article>

            <article className="pcard">
              <div>
                <span className="num">P / 04</span>
                <h3>
                  SCADA &amp; <em>Controls</em>
                </h3>
                <p>Telemetry, dashboards and remote operations across every Austro plant.</p>
              </div>
              <Link className="more" href="/products">
                Specifications <span className="arrow">→</span>
              </Link>
            </article>

            <article className="pcard wide alt-light">
              <div>
                <span className="num">P / 05</span>
                <h3>
                  Sludge Handling &amp; <em>Dewatering</em>
                </h3>
                <p>
                  Filter presses, decanters and drying systems sized to your
                  cake-solids target — fully integrated with the upstream
                  biological and chemical stages.
                </p>
              </div>
              <Link className="more" href="/products">
                Specifications <span className="arrow">→</span>
              </Link>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="canvas alt" id="zld" aria-labelledby="zld-heading">
        <div className="zld">
          <Reveal>
            <div className="zld-visual">
              <div className="zld-rings">
                <div className="r r4" />
                <div className="r r3" />
                <div className="r r2" />
                <div className="r r1" />
                <div className="zld-core" />
              </div>
              <span className="zld-tag t1">Influent · 1,840 m³/h</span>
              <span className="zld-tag t2">Recovery · 99.4%</span>
              <span className="zld-tag t3">Salt · Crystalline</span>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <span className="section-tag">03 — Why Zero Liquid Discharge</span>
              <h2 className="section-title" id="zld-heading">
                Closing the loop on <em>every drop</em> that leaves your plant.
              </h2>
              <p className="section-sub" style={{ marginTop: 24 }}>
                ZLD isn&apos;t a regulatory checkbox — it&apos;s the most decisive way to
                de-risk your operation against water scarcity, tightening discharge
                norms and reputational exposure.
              </p>

              <div className="zld-points">
                <div className="zld-point">
                  <span className="k">A.01</span>
                  <div className="t">
                    Water-positive operations
                    <span>Recover 95–99% of process water back into your loop.</span>
                  </div>
                  <span className="arrow">→</span>
                </div>
                <div className="zld-point">
                  <span className="k">A.02</span>
                  <div className="t">
                    Compliance &amp; consent-to-operate
                    <span>Stay ahead of CPCB, SPCB and global discharge standards.</span>
                  </div>
                  <span className="arrow">→</span>
                </div>
                <div className="zld-point">
                  <span className="k">A.03</span>
                  <div className="t">
                    Salt &amp; resource recovery
                    <span>Recover sodium sulphate, sodium chloride and reusable solids.</span>
                  </div>
                  <span className="arrow">→</span>
                </div>
                <div className="zld-point">
                  <span className="k">A.04</span>
                  <div className="t">
                    Lower lifetime cost
                    <span>Engineered for sub-10-year payback at scale.</span>
                  </div>
                  <span className="arrow">→</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

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

      <section className="canvas alt" id="videos" aria-labelledby="videos-heading">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="section-tag">05 — Product Films</span>
              <h2 className="section-title" id="videos-heading">
                Plant walkthroughs, <em>up close.</em>
              </h2>
            </div>
            <p className="section-sub">
              Step inside the installations — from a 40 MLD CETP in Surat to a pharma
              ZLD train in Hyderabad.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="videos">
            <div className="vcard tall">
              <div className="placeholder" />
              <div className="meta">
                <span>FILM · 01</span>
                <span>06:12</span>
              </div>
              <div className="play" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="title">Inside a 40 MLD textile CETP — Surat, Gujarat.</div>
            </div>
            <div className="vcard">
              <div className="placeholder" />
              <div className="meta">
                <span>FILM · 02</span>
                <span>03:48</span>
              </div>
              <div className="play" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="title">MEE crystallizer commissioning.</div>
            </div>
            <div className="vcard">
              <div className="placeholder" />
              <div className="meta">
                <span>FILM · 03</span>
                <span>02:20</span>
              </div>
              <div className="play" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="title">Membrane skid factory test.</div>
            </div>
            <div className="vcard">
              <div className="placeholder" />
              <div className="meta">
                <span>FILM · 04</span>
                <span>04:55</span>
              </div>
              <div className="play" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="title">Pharma ZLD — Hyderabad campus.</div>
            </div>
            <div className="vcard">
              <div className="placeholder" />
              <div className="meta">
                <span>FILM · 05</span>
                <span>01:42</span>
              </div>
              <div className="play" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="title">SCADA control room — live ops.</div>
            </div>
          </div>
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
