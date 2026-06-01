import Link from "next/link";
import Image from "next/image";
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
                Engineering cleaner water for industries that cannot afford to
                <em> pause.</em>
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

      <section className="canvas about-leadership" aria-labelledby="about-leadership-heading">
        <Reveal>
          <div className="about-md-panel">
            <div className="about-md-portrait" aria-label="A. Jeyakumar, Managing Director">
              <Image
                src="/Images/MD/MD sir Profile (1).png"
                alt="A. Jeyakumar, Managing Director of Austro"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
                className="about-md-portrait__img"
                priority={false}
              />
              <div className="about-md-portrait__label">
                <strong>A. Jeyakumar</strong>
                <span>Managing Director</span>
              </div>
            </div>

            <div className="about-md-copy">
              <span className="section-tag">Leadership</span>
              <h2 className="section-title" id="about-leadership-heading">
                Built with engineering discipline and <em>water stewardship.</em>
              </h2>
              <p className="about-md-kicker">
                Austro&apos;s work is shaped by a simple belief: water treatment
                systems must be practical, measurable, and dependable long after
                commissioning day.
              </p>
              <p>
                Since 1996, A. Jeyakumar has led Austro with a clear focus:
                build dependable water and wastewater systems that help
                industries grow without compromising the environment.
              </p>
              <p>
                That mindset shapes every project we take on — from ZLD plants
                and treatment upgrades to long-term consulting for customers who
                need performance they can measure.
              </p>
              <div className="about-md-quote">
                “Clean water is not only a compliance goal. It is the foundation
                for responsible industry.”
              </div>
              <div className="about-md-metrics" aria-label="Leadership highlights">
                <div>
                  <strong>1996</strong>
                  <span>Founded in Tirupur</span>
                </div>
                <div>
                  <strong>29+</strong>
                  <span>Years of execution</span>
                </div>
                <div>
                  <strong>ZLD</strong>
                  <span>Core engineering focus</span>
                </div>
              </div>
            </div>
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

      <section className="canvas about-story-section" aria-labelledby="who-we-are-heading">
        <Reveal>
          <div className="section-head section-head--center">
            <div>
              <span className="section-tag">Who we are</span>
              <h2 className="section-title" id="who-we-are-heading">
                Process-led water engineering for <em>responsible</em> industry.
              </h2>
            </div>
            <p className="section-sub about-story-lede">
              We combine chemistry, process design, fabrication, and field
              execution into treatment systems built for real operating
              conditions.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="about-story-grid">
            <article className="about-story-card about-story-card--wide">
              <span>01 — Engineering</span>
              <h3>Designed for operating reality</h3>
              <p>
                Austro Chemicals and Biotechnologies specialises in advanced
                water and wastewater treatment for industries where compliance,
                uptime, and reuse matter every day.
              </p>
            </article>
            <article className="about-story-card">
              <span>02 — Execution</span>
              <h3>From concept to commissioning</h3>
              <p>
                Process engineering, fabrication, civil coordination, automation,
                and site execution are handled with one accountable delivery
                rhythm.
              </p>
            </article>
            <article className="about-story-card">
              <span>03 — Support</span>
              <h3>Performance after handover</h3>
              <p>
                Our teams stay close to plant performance so customers can keep
                meeting discharge, reuse, and production targets with confidence.
              </p>
            </article>
          </div>
        </Reveal>
      </section>
    </>
  );
}
