/** Operating regions — coordinates used for globe arcs (approx. country centers). */

export const OPERATING_COUNTRIES = [
  { name: "Benin", lat: 9.3077, lng: 2.3158 },
  { name: "Kenya", lat: -0.0236, lng: 37.9062 },
  { name: "India", lat: 22.9734, lng: 78.6569 },
  { name: "Vietnam", lat: 14.0583, lng: 108.2772 },
  { name: "China", lat: 35.8617, lng: 104.1954 },
  { name: "Zimbabwe", lat: -19.0154, lng: 29.1549 },
  { name: "Sri Lanka", lat: 7.8731, lng: 80.7718 },
  { name: "Bangladesh", lat: 23.685, lng: 90.3563 },
] as const;

const HUB = OPERATING_COUNTRIES[2]; // India — engineering hub

const COLORS = ["#38bdf8", "#3b82f6", "#6366f1", "#22d3ee", "#60a5fa"] as const;

export type GlobeArcRow = {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  dashInitialGap: number;
  color: string;
};

/** Arcs from India to each other market, plus selective cross-links for motion on the globe. */
export function buildHomeGlobeArcs(): GlobeArcRow[] {
  const others = OPERATING_COUNTRIES.filter((c) => c.name !== "India");
  const hubLat = HUB.lat;
  const hubLng = HUB.lng;

  const hubArcs: GlobeArcRow[] = others.map((c, i) => ({
    startLat: hubLat,
    startLng: hubLng,
    endLat: c.lat,
    endLng: c.lng,
    arcAlt: 0.12 + (i % 4) * 0.04,
    dashInitialGap: i * 0.14,
    color: COLORS[i % COLORS.length],
  }));

  const cross: GlobeArcRow[] = [
    {
      startLat: OPERATING_COUNTRIES[3].lat,
      startLng: OPERATING_COUNTRIES[3].lng,
      endLat: OPERATING_COUNTRIES[4].lat,
      endLng: OPERATING_COUNTRIES[4].lng,
      arcAlt: 0.18,
      dashInitialGap: 0.2,
      color: COLORS[1],
    },
    {
      startLat: OPERATING_COUNTRIES[1].lat,
      startLng: OPERATING_COUNTRIES[1].lng,
      endLat: OPERATING_COUNTRIES[7].lat,
      endLng: OPERATING_COUNTRIES[7].lng,
      arcAlt: 0.22,
      dashInitialGap: 0.34,
      color: COLORS[2],
    },
    {
      startLat: OPERATING_COUNTRIES[6].lat,
      startLng: OPERATING_COUNTRIES[6].lng,
      endLat: OPERATING_COUNTRIES[3].lat,
      endLng: OPERATING_COUNTRIES[3].lng,
      arcAlt: 0.15,
      dashInitialGap: 0.48,
      color: COLORS[3],
    },
    {
      startLat: OPERATING_COUNTRIES[0].lat,
      startLng: OPERATING_COUNTRIES[0].lng,
      endLat: OPERATING_COUNTRIES[5].lat,
      endLng: OPERATING_COUNTRIES[5].lng,
      arcAlt: 0.25,
      dashInitialGap: 0.62,
      color: COLORS[4],
    },
  ];

  return [...hubArcs, ...cross];
}

export const HOME_GLOBE_ARCS = buildHomeGlobeArcs();

export const HOME_GLOBE_CONFIG = {
  showAtmosphere: true,
  atmosphereColor: "#ffffff",
  atmosphereAltitude: 0.12,
  autoRotate: true,
  autoRotateSpeed: 1.35,
  arcTime: 2400,
} as const;

/** Point markers for the globe (same coordinates as operating regions). */
export const HOME_GLOBE_PINS = OPERATING_COUNTRIES.map((c) => ({
  name: c.name,
  lat: c.lat,
  lng: c.lng,
}));
