"use client";

const clientList: [string, string][] = [
  ["Aarti", "Pharma"],
  ["Reliance", "Polymers"],
  ["Arvind", "Textiles"],
  ["Asian Paints", "Coatings"],
  ["Cipla", "Pharma"],
  ["Welspun", "Home"],
  ["Tata Chemicals", "Specialty"],
  ["Lupin", "Pharma"],
  ["Raymond", "Textiles"],
  ["UPL", "Agrochem"],
  ["Pidilite", "Adhesives"],
  ["Sun Pharma", "Pharma"],
];

function LogoTiles({ prefix }: { prefix: string }) {
  return (
    <>
      {clientList.map(([name, sector], i) => (
        <div key={`${prefix}-${i}`} className="client">
          <div style={{ textAlign: "center" }}>
            <div>{name}</div>
            <small>{sector}</small>
          </div>
        </div>
      ))}
    </>
  );
}

/**
 * Two duplicate sequences side-by-side; CSS translates -50% for a seamless loop.
 * --to-right: logos drift left → right on screen.
 * --to-left: logos drift right → left on screen.
 */
function Strip({
  variant,
  durationSec,
}: {
  variant: "to-right" | "to-left";
  durationSec: number;
}) {
  return (
    <div className="clients-marquee-row">
      <div
        className={`clients-marquee-inner clients-marquee-inner--${variant}`}
        style={{
          animationDuration: `${durationSec}s`,
        }}
      >
        <div className="clients-marquee-seq">
          <LogoTiles prefix={`${variant}-a`} />
        </div>
        <div className="clients-marquee-seq" aria-hidden>
          <LogoTiles prefix={`${variant}-b`} />
        </div>
      </div>
    </div>
  );
}

export function ClientMarquee() {
  return (
    <div className="clients-marquee-stack">
      <Strip variant="to-right" durationSec={48} />
      <Strip variant="to-left" durationSec={42} />
    </div>
  );
}
