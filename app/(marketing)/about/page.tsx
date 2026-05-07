import Link from "next/link";
import { HeroBackgroundVideo } from "@/components/marketing/HeroBackgroundVideo";
import { InfoCard, InfoGrid } from "@/components/marketing/InfoCards";
import { Reveal } from "@/components/marketing/Reveal";

export default function AboutPage() {
  return (
    <>
      <section
        className="hero hero--full-video hero--about-video"
        aria-labelledby="about-hero-heading"
      >
        <HeroBackgroundVideo detectedSrc={null} forcedSrc="/video/ZLD.mp4" />
        <div className="grid-bg" aria-hidden />
        <div className="hero-bg-text" aria-hidden>
          About
        </div>
        <div className="hero-grid">
          <Reveal>
            <div className="hero-main hero-main--center">
              <h1 className="display" id="about-hero-heading">
                About Austro, solving the world&apos;s most vital crisis{" "}
                <em>one drop</em> at a time.
              </h1>
              <p className="about-company">
                Austro Chemicals and Biotechnologies Pvt. Ltd.
              </p>
              <p className="about-meta">
                Tirupur, Tamil Nadu, India · Est. 1996
              </p>
              <div className="hero-actions">
                <Link className="btn-primary" href="/contact">
                  Start a project <span className="arrow">→</span>
                </Link>
                <Link className="btn-ghost" href="/products">
                  Our solutions
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="stats" aria-label="Key company figures">
        <Reveal>
          <div className="stats-cards-wrap" style={{ paddingTop: 48 }}>
            <div className="stats-cards-grid">
              <article className="stat-card">
                <div className="stat-card-idx">01 — Delivery</div>
                <div className="stat-card-num">
                  1,200<sup>+</sup>
                </div>
                <p className="stat-card-label">Treatment plants delivered</p>
              </article>
              <article className="stat-card">
                <div className="stat-card-idx">02 — Reach</div>
                <div className="stat-card-num">
                  1,550<sup>+</sup>
                </div>
                <p className="stat-card-label">Projects consulted worldwide</p>
              </article>
              <article className="stat-card">
                <div className="stat-card-idx">03 — Expertise</div>
                <div className="stat-card-num">
                  29<sup>+</sup>
                </div>
                <p className="stat-card-label">Years of expertise</p>
              </article>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="canvas" aria-labelledby="md-desk-heading">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="section-tag">Leadership</span>
              <h2 className="section-title" id="md-desk-heading">
                MD&apos;s <em>Desk</em>
              </h2>
            </div>
            <p className="section-sub">
              A perspective from the desk of our Managing Director on mission,
              impact, and the road ahead.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="product-grid">
            <article className="pcard wide alt-light about-full">
              <div>
                <span className="num">MD / 01</span>
                <h3>
                  A. Jeyakumar — <em>Managing Director</em>
                </h3>
                <p>
                  Since 1996, I have dedicated my career to one mission:
                  delivering sustainable water and wastewater solutions that
                  create lasting environmental impact. At Austro, we integrate
                  chemical and environmental engineering to solve the water
                  challenges facing industries across the globe.
                </p>
                <p>
                  The world&apos;s water crisis is real — 2.8 billion people face
                  scarcity every year, and 1.2 billion lack access to clean
                  drinking water. We believe engineering excellence is the
                  answer. Every plant we build, every project we consult on, is
                  our commitment to a water-secure future.
                </p>
              </div>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="canvas alt" aria-labelledby="mission-vision-heading">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="section-tag">Purpose</span>
              <h2 className="section-title" id="mission-vision-heading">
                Mission &amp; <em>vision</em>
              </h2>
            </div>
            <p className="section-sub">
              What drives our work today — and the future we are engineering
              toward.
            </p>
          </div>
        </Reveal>
        <InfoGrid>
          <InfoCard title="Mission">
            <p>
              To pioneer Zero Liquid Discharge technology through sustainable,
              cutting-edge water management solutions — empowering industries to
              achieve long-term environmental responsibility.
            </p>
          </InfoCard>
          <InfoCard title="Vision">
            <p>
              To lead the global shift toward sustainable water management,
              ensuring clean water is not a privilege, but a guarantee for every
              community on earth.
            </p>
          </InfoCard>
        </InfoGrid>
      </section>

      <section className="canvas" aria-labelledby="who-we-are-heading">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="section-tag">Who we are</span>
              <h2 className="section-title" id="who-we-are-heading">
                Indian engineering, <em>global</em> standards.
              </h2>
            </div>
            <p className="section-sub">
              Headquartered in Tirupur — with a legacy measured in plants,
              projects, and partnerships.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="content-block" style={{ paddingTop: 0 }}>
            <p
              style={{
                fontSize: "clamp(16px, 1.5vw, 18px)",
                lineHeight: 1.65,
                color: "var(--text-2)",
                maxWidth: "72ch",
              }}
            >
              Austro Chemicals and Biotechnologies is an Indian-owned
              engineering company specialising in advanced water and wastewater
              treatment. Headquartered in Tirupur, Tamil Nadu, we have delivered
              1,200+ treatment plants and consulted on 1,550+ projects worldwide
              — with a strong focus on Zero Liquid Discharge systems built to the
              highest environmental standards.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
