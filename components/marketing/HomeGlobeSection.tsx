"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import {
  HOME_GLOBE_ARCS,
  HOME_GLOBE_CONFIG,
  HOME_GLOBE_PINS,
  OPERATING_COUNTRIES,
} from "@/lib/home-globe-arcs";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
  loading: () => <div className="globe-loading" aria-hidden />,
});

export function HomeGlobeSection() {
  return (
    <section
      className="canvas globe-section"
      id="global-footprint"
      aria-labelledby="globe-heading"
    >
      <div className="globe-section-inner">
        <Reveal>
          <div className="section-head section-head--center globe-section-head">
            <div>
              <span className="section-tag">04 — Global footprint</span>
              <h2 className="section-title" id="globe-heading">
                Active projects spanning <em>eight countries</em>
              </h2>
              <p className="section-sub globe-section-lede">
                From concept through commissioning, Austro supports water and effluent
                programs for manufacturers and utilities across these regions — with
                engineering discipline held constant everywhere we operate.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <motion.div
            className="globe-country-list"
            aria-label="Operating regions"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {OPERATING_COUNTRIES.map((c) => (
              <span key={c.name} className="globe-country-pill">
                {c.name}
              </span>
            ))}
          </motion.div>
        </Reveal>
      </div>

      <div className="globe-viewport">
        <World
          data={HOME_GLOBE_ARCS}
          pins={HOME_GLOBE_PINS}
          globeConfig={{ ...HOME_GLOBE_CONFIG }}
        />
      </div>
    </section>
  );
}
