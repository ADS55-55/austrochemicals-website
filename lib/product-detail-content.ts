/** Product copy from provided source text only. */

export const PRODUCT_SHARED_HERO = {
  heading: "Products",
  subtext:
    "Advanced water and wastewater treatment systems — engineered for performance, sustainability, and Zero Liquid Discharge.",
} as const;

export type ProductSection = { title: string; items: string[] };

export type ProductDetailContent = {
  slug: string;
  breadcrumbName: string;
  /** Displayed as section <h2> (typically uppercase in source) */
  pageTitle: string;
  /** Intro paragraph; omit or leave empty when only image + CTA apply */
  intro?: string;
  keyPoints?: string[];
  sections?: ProductSection[];
  imageSrc: string;
  imageAlt: string;
  /** Optional second image for the split-band gallery (right column) */
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
};

export type ProductRow =
  | { type: "sub"; title: string }
  | { type: "point"; text: string };

export function buildProductRows(data: ProductDetailContent): ProductRow[] {
  if (data.sections?.length) {
    const out: ProductRow[] = [];
    for (const s of data.sections) {
      out.push({ type: "sub", title: s.title });
      for (const t of s.items) out.push({ type: "point", text: t });
    }
    return out;
  }
  return (data.keyPoints ?? []).map((text) => ({ type: "point", text }));
}

export const PRODUCT_DETAIL_CONTENT: Record<string, ProductDetailContent> = {
  "zero-liquid-discharge": {
    slug: "zero-liquid-discharge",
    breadcrumbName: "Zero Liquid Discharge",
    pageTitle: "ZERO LIQUID DISCHARGE",
    intro:
      "Zero Liquid Discharge is an advanced engineering approach to water management where all wastewater is purified and recycled, leaving zero liquid effluent at the end of the treatment cycle.",
    keyPoints: [
      "Our ZLD system integrates an Effluent Treatment Plant (ETP) with Micro Filtration and Reverse Osmosis technology to achieve more than 95% water recovery.",
      "Austro Chemicals offers high-performance chemical solutions and technical expertise designed to optimize ZLD systems, ensuring maximum water recovery and seamless operation of ETP, MF, and RO stages.",
    ],
    imageSrc: "/products/zld.jpg",
    imageAlt: "Zero Liquid Discharge system",
  },
  "effluent-treatment-plant": {
    slug: "effluent-treatment-plant",
    breadcrumbName: "Effluent Treatment Plant",
    pageTitle: "EFFLUENT TREATMENT PLANT",
    intro:
      "An Effluent Treatment Plant is a specialized facility designed to treat industrial wastewater so it can be safely discharged into the environment or reused inside the premises.",
    keyPoints: [
      "Our ETP is engineered to handle high Chemical Oxygen Demand (COD), heavy metals, oils, and complex industrial dyes or solvents produced by industries like textiles, pharmaceuticals, and chemicals.",
    ],
    imageSrc: "/products/etp.jpg",
    imageAlt: "Effluent Treatment Plant",
  },
  "sewage-treatment-plant": {
    slug: "sewage-treatment-plant",
    breadcrumbName: "Sewage Treatment Plant",
    pageTitle: "SEWAGE TREATMENT PLANT",
    intro:
      "Austro provides solutions to effectively remove contaminants from domestic and industrial wastewater before it is released or reused.",
    keyPoints: [
      "We provide MBBR technology, Package Type STP, and Conventional STP to adhere to discharge norms.",
      "Our Sewage Treatment Plants ensure the safe disposal or reuse of wastewater from homes, businesses, and industries, protecting the environment and supporting water reclamation.",
    ],
    imageSrc: "/products/stp.jpg",
    imageAlt: "Sewage Treatment Plant",
  },
  "portable-stp-and-etp": {
    slug: "portable-stp-and-etp",
    breadcrumbName: "Portable STP And ETP",
    pageTitle: "PACKAGE STP & ETP",
    intro:
      "Austro Chemicals offers containerised and skid-mounted treatment units, precisely fabricated using modern engineering.",
    sections: [
      {
        title: "Package STP",
        items: [
          "Provides a low-maintenance, biological solution for schools, hotels, and hostels.",
          "Efficiently removes organic waste and pathogens to meet environmental discharge norms.",
          "Enables treated water reuse for flushing or gardening.",
        ],
      },
      {
        title: "Package ETP",
        items: [
          "Designed for industries with temporary or varying waste needs.",
          "Delivers odour-free, low-energy operation with a minimal environmental footprint.",
          "Ensures treated water meets strict PCB standards for safe discharge or high-quality reuse.",
        ],
      },
    ],
    imageSrc: "/products/package-stp-etp.jpg",
    imageAlt: "Package STP and ETP units",
  },
  "reverse-osmosis": {
    slug: "reverse-osmosis",
    breadcrumbName: "Reverse Osmosis",
    pageTitle: "REVERSE OSMOSIS",
    intro:
      "Reverse Osmosis is a water treatment technology where membranes separate purified water from contaminated water using high pressure. By applying external pressure that exceeds natural osmotic pressure, water is forced backwards from the concentrated side to the pure side.",
    keyPoints: [
      "Our RO systems utilize advanced semi-permeable membrane technology to apply precise pressure and filter out reject water, delivering ultra-pure water for diverse industrial and commercial needs.",
      "Austro Chemicals offers both industrial and domestic RO systems, effectively removing dissolved salts, chemicals, and impurities from water.",
    ],
    imageSrc: "/products/ro.jpg",
    imageAlt: "Reverse Osmosis system",
  },
  "water-softening": {
    slug: "water-softening",
    breadcrumbName: "Water Softening",
    pageTitle: "WATER SOFTENING",
    intro:
      "Water softening is the process of removing high concentrations of dissolved minerals — specifically calcium and magnesium — from water. Our portfolio features three versatile softening technologies engineered to meet the demands of modern industrial processes.",
    sections: [
      {
        title: "Caustic Softening",
        items: [
          "Utilizes high-purity caustic soda to precipitate hardness minerals directly without requiring lime.",
          "Offers nearly 100% reagent utilization, lower sludge production, and effective removal of both temporary and permanent hardness.",
        ],
      },
      {
        title: "Resin Softening",
        items: [
          "Uses cation-exchange resins to swap calcium and magnesium ions for sodium ions.",
          "Highly efficient, cost-effective, long-lasting, and low-maintenance — prevents scale buildup and improves appliance lifespan.",
        ],
      },
      {
        title: "CO₂ Softening",
        items: [
          "Injects CO₂ into water to lower pH by forming bicarbonate, reducing alkalinity and minimizing corrosion and scaling.",
          "Environmentally friendly, leaves no harmful residues, improves odour, and uses mild, easy-to-control chemistry.",
        ],
      },
    ],
    imageSrc: "/products/water-softening.jpg",
    imageAlt: "Water softening treatment",
  },
  "multi-media-filters": {
    slug: "multi-media-filters",
    breadcrumbName: "Multi-Media Filters",
    pageTitle: "MULTI-MEDIA FILTERS",
    intro:
      "Austro provides highly efficient Multi-Media Filters for industrial water treatment, available in FRP and in-house fabricated MS filter variants of different sizes.",
    keyPoints: [
      "Pressure Sand Filters use layered media of varying sizes to remove Total Suspended Solids and turbidity.",
      "Activated Carbon Filters adsorb chlorine and organic contaminants, and improve the colour and odour of water.",
      "Dual Media Filters combine sand and activated carbon media — sand traps suspended solids, silt, and turbidity, while carbon adsorbs chlorine, organic contaminants, and improves colour and odour.",
    ],
    imageSrc: "/products/multimedia-filters.jpg",
    imageAlt: "Multi-media filters",
  },
  "ultra-filtration": {
    slug: "ultra-filtration",
    breadcrumbName: "Ultra Filtration",
    pageTitle: "ULTRA FILTRATION",
    intro:
      "Our Ultrafiltration solutions utilize pressure-driven membrane filtration with precise pore sizes ranging from 0.01 to 0.1 µm to reliably remove suspended solids, colloids, and bacteria from industrial water streams.",
    keyPoints: [
      "We integrate Ultrafiltration technology in ZLD systems for the removal of suspended solids, bacteria, viruses, and macromolecules.",
    ],
    imageSrc: "/products/ultrafiltration.jpg",
    imageAlt: "Ultra filtration system",
  },
  "micro-filtration": {
    slug: "micro-filtration",
    breadcrumbName: "Micro Filtration",
    pageTitle: "MICRO FILTRATION",
    intro:
      "Microfiltration is a water treatment process that uses microporous membranes of 0.1 µm to remove suspended and colloidal particles from water.",
    keyPoints: [
      "We offer fully-automated Microfiltration systems for various industrial wastewater treatment applications.",
      "Our customized MF systems enhance pre-treatment for RO, polish water for reuse, and offer compact, automated, and chemical-efficient operation across industries.",
    ],
    imageSrc: "/products/microfiltration.jpg",
    imageAlt: "Micro filtration system",
  },
  "membrane-bio-reactor": {
    slug: "membrane-bio-reactor",
    breadcrumbName: "Membrane Bio Reactor",
    pageTitle: "MEMBRANE BIO REACTOR",
    intro:
      "Membrane Bioreactor is an advanced wastewater treatment technology that combines the biological process of activated sludge with membrane filtration.",
    keyPoints: [
      "MBR significantly reduces the physical footprint and energy consumption of the ETP compared to conventional methods.",
      "Uses high-quality membranes of pore size 0.1 µm to physically strain out pollutants and provide quality water for reuse.",
    ],
    imageSrc: "/products/mbr.jpg",
    imageAlt: "Membrane bioreactor system",
  },
  "nano-filtration": {
    slug: "nano-filtration",
    breadcrumbName: "Nano Filtration",
    pageTitle: "NANO FILTRATION",
    imageSrc: "/products/nanofiltration.jpg",
    imageAlt: "Nano filtration",
  },
  "sand-carbon-filtration": {
    slug: "sand-carbon-filtration",
    breadcrumbName: "Sand & Carbon Filtration",
    pageTitle: "SAND & CARBON FILTRATION",
    intro:
      "Austro provides highly efficient Multi-Media Filters for industrial water treatment, available in FRP and in-house fabricated MS filter variants of different sizes.",
    keyPoints: [
      "Pressure Sand Filters use layered media of varying sizes to remove Total Suspended Solids and turbidity.",
      "Activated Carbon Filters adsorb chlorine and organic contaminants, and improve the colour and odour of water.",
      "Dual Media Filters combine sand and activated carbon media — sand traps suspended solids, silt, and turbidity, while carbon adsorbs chlorine, organic contaminants, and improves colour and odour.",
    ],
    imageSrc: "/products/multimedia-filters.jpg",
    imageAlt: "Sand and carbon filtration",
  },
  "sludge-de-watering": {
    slug: "sludge-de-watering",
    breadcrumbName: "Sludge De-Watering",
    pageTitle: "SLUDGE DE-WATERING",
    intro:
      "Austro offers tailored solutions for sludge dewatering, selecting the optimal equipment based on sludge characteristics and volume — ensuring efficient dewatering and easier handling for industries.",
    keyPoints: [
      "Screw Press uses a helical screw to continuously compress sludge, separating water for a drier cake and reduced volume.",
      "Filter Press batch-processes sludge by forcing water through filter cloths under pressure, yielding a very high solids content cake.",
      "Sludge Dryer targets maximum moisture reduction, shrinks sludge volume, and enables easier disposal or reuse — offering high thermal efficiency and automated operation to reduce energy costs.",
    ],
    imageSrc: "/products/sludge-dewatering.jpg",
    imageAlt: "Sludge dewatering equipment",
  },
  "gas-chlorination": {
    slug: "gas-chlorination",
    breadcrumbName: "Gas Chlorination",
    pageTitle: "GAS CHLORINATION",
    intro:
      "Austro offers reliable Gas Chlorination systems for effective and cost-efficient disinfection of industrial textile wastewater.",
    keyPoints: [
      "Chlorine is a strong oxidant that chemically attacks and breaks down large, complex, colour-producing dye molecules into smaller, simpler, and colourless compounds — achieving high decolourization efficiency and a desired reduction of COD and BOD levels.",
      "The oxidation process destroys other organic pollutants, bacteria, and viruses, ensuring the treated effluent meets discharge or reuse standards.",
      "Our tailored solutions ensure potent elimination of microorganisms, meeting discharge standards and enabling safe water reuse.",
    ],
    imageSrc: "/products/gas-chlorination.jpg",
    imageAlt: "Gas chlorination system",
  },
  "ceramic-filtration": {
    slug: "ceramic-filtration",
    breadcrumbName: "Ceramic Filtration",
    pageTitle: "CERAMIC FILTRATION",
    intro:
      "Austro utilizes Ceramic Filtration as an effective pretreatment step in ETP-RO systems.",
    keyPoints: [
      "Ceramic filters offer high durability and resistance to harsh conditions, are back-washable and reusable for a longer service life, and provide stable performance with effective removal of fine particulates — even when treating challenging wastewater of fluctuating parameters.",
      "Durable and chemically resistant ceramic membranes remove fine particles, microorganisms, and turbidity, protecting RO membranes and improving overall system efficiency.",
    ],
    imageSrc: "/products/ceramic-filtration.jpg",
    imageAlt: "Ceramic filtration",
  },
  "raw-water-treatment": {
    slug: "raw-water-treatment",
    breadcrumbName: "Raw Water Treatment Plant",
    pageTitle: "RAW WATER TREATMENT PLANT",
    intro:
      "A Raw Water Treatment Plant treats natural source water — from rivers, lakes, reservoirs, rainwater, or canals — to make it safe for drinking or industrial use. Since raw water quality changes with seasons, these plants are designed to handle variable turbidity, organics, and microbes.",
    keyPoints: [
      "Austro Chemicals designs and builds Raw Water Treatment Plants that process and purify raw water to make it safe for drinking and other purposes.",
      "Our RWTPs utilize various proven treatment methods to ensure a high-quality water supply.",
    ],
    imageSrc: "/products/raw-water-treatment.jpg",
    imageAlt: "Raw water treatment plant",
  },
  "moving-bed-bio-reactor": {
    slug: "moving-bed-bio-reactor",
    breadcrumbName: "Moving Bed Bio Reactor",
    pageTitle: "MOVING BED BIO REACTOR",
    imageSrc: "/products/moving-bed-bio-reactor.jpg",
    imageAlt: "Moving bed bio reactor",
  },
};

export function getProductDetailContent(
  slug: string,
): ProductDetailContent | undefined {
  return PRODUCT_DETAIL_CONTENT[slug];
}
