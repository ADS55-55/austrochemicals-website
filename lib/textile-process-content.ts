export type TextileProcessContent = {
  slug: string;
  label: string;
  title: string;
  description: string;
  paragraphs: string[];
};

const PROCESS_CONTENT: Record<string, TextileProcessContent> = {
  "dyeing-process": {
    slug: "dyeing-process",
    label: "Dyeing Process",
    title: "Effluent Treatment Plants (ETP) for Dyeing Processes",
    description:
      "Advanced ETP and ZLD engineering for high-load dyeing wastewater streams.",
    paragraphs: [
      "Dyeing operations produce wastewater laden with dyes, chemicals, and other pollutants. It drastically depletes freshwater resources, using up to 200 litres of water per kilogram of textile produced, making it a significant driver of water scarcity. Our ETP systems are engineered to effectively treat these effluents, ensuring safe discharge or reuse.",
      "At Austro, we specialize in delivering advanced Effluent Treatment Plant and Zero Liquid Discharge systems tailored for the dyeing sector. Our solutions are designed to address the unique challenges of dyeing wastewater, ensuring compliance with environmental regulations and promoting sustainable operations. Reach out to explore customized system designs, industrial use cases and monitoring integrations.",
    ],
  },
  "printing-process": {
    slug: "printing-process",
    label: "Printing Process",
    title: "Effluent Treatment Plants (ETP) for Printing Processes",
    description:
      "Process-specific treatment systems for high-color, high-salt printing wastewater.",
    paragraphs: [
      "Printing operations produce wastewater containing dyes, solvents, and other pollutants. It increases water turbidity and coloration, reducing sunlight penetration, disrupting aquatic photosynthesis, and harming the ecosystem's primary productivity. The high ion and salt load in printing effluents can disrupt aquatic organisms' osmotic balance and degrade overall water quality. Our ETP systems are engineered to effectively treat these effluents, ensuring safe discharge or reuse.",
      "At Austro, we deliver cutting-edge Effluent Treatment and Zero Liquid Discharge solutions specifically engineered for the printing sector. Our systems tackle the distinctive complexities of printing wastewater, guaranteeing regulatory compliance while advancing environmentally responsible and sustainable practices. Reach out for customized designs, case-specific consultancy and other services.",
    ],
  },
  "sizing-process": {
    slug: "sizing-process",
    label: "Sizing Process",
    title: "Effluent Treatment Plants (ETP) for Sizing Processes",
    description:
      "Targeted treatment for starch/polymer-rich sizing wastewater profiles.",
    paragraphs: [
      "Sizing operations in the textile industry produce wastewater containing starches, synthetic polymers, and other chemicals. Sizing wastewater often exhibits high BOD and COD levels, driven by starches, PVA, and other polymers, which deplete dissolved oxygen and threaten aquatic life. Foaming from PVA-rich effluents can impair gas exchange at the water surface, suffocate aquatic organisms, and disrupt aquatic ecosystems.",
      "Our ETP systems are engineered to effectively treat these effluents, ensuring safe discharge or reuse.",
      "At Austro, we deliver state-of-the-art Effluent Treatment Plant and Zero Liquid Discharge (ZLD) systems, expertly crafted to meet the specific needs of sizing wastewater in the textile industry. Our innovative technologies are engineered to overcome the complex challenges associated with sizing effluent, ensuring regulatory compliance and fostering sustainable, eco-conscious operations. Reach out to explore customized system designs, industrial use cases and monitoring integrations.",
    ],
  },
  "washing-process": {
    slug: "washing-process",
    label: "Washing Process",
    title: "Effluent Treatment Plants (ETP) for Washing Processes",
    description:
      "Reliable treatment pathways for detergent-heavy washing discharge streams.",
    paragraphs: [
      "Washing operations in textile manufacturing produce wastewater containing detergents, dyes, and other pollutants. Elevated wastewater pH, often from alkaline detergents and bleaching agents, can disrupt the natural pH balance of receiving water bodies, impairing aquatic life that typically thrives only between pH 6 and 9. Increased electrical conductivity and total dissolved solids (TDS) due to salts and ionic detergents in wash effluents can harm aquatic organisms by altering osmotic balance and degrading overall water quality.",
      "Our ETP systems are engineered to effectively treat these effluents, ensuring safe discharge or reuse.",
      "At Austro, we're committed to providing cutting-edge Effluent Treatment Plant and Zero-Liquid-Discharge systems specifically engineered for the textile industry's washing processes. Our solutions are crafted to tackle the distinct challenges posed by washing effluent, ensuring environmental compliance and advancing your sustainability goals. Reach out to explore customized system designs, industrial use cases and monitoring integrations.",
    ],
  },
};

export function textileProcessSlugs() {
  return Object.keys(PROCESS_CONTENT);
}

export function getTextileProcessContent(slug: string) {
  return PROCESS_CONTENT[slug];
}
