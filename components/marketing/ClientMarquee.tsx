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

function Track({ id }: { id: string }) {
  return (
    <div className="marquee-track" id={id}>
      {clientList.map(([name, sector], i) => (
        <div key={`${id}-${i}`} className="client">
          <div style={{ textAlign: "center" }}>
            <div>{name}</div>
            <small>{sector}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ClientMarquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee" role="presentation">
        <Track id="marquee-a" />
        <Track id="marquee-b" />
      </div>
    </div>
  );
}
