/** Verbatim industry copy from provided source — no external additions. */

export const INDUSTRY_SHARED_HERO = {
  heading: "Industries",
  subtext:
    "Tailored Effluent Treatment Plant and Zero Liquid Discharge solutions — engineered for the unique wastewater challenges of every industry we serve.",
} as const;

export type IndustryDetailFigure = { src: string; alt: string };
export type IndustrySubProcess = {
  title: string;
  paragraphs: string[];
};

export type IndustryDetailContent = {
  slug: string;
  breadcrumbName: string;
  sectionTag: string;
  sectionTitle: string;
  /** Optional line under section title */
  sectionSub: string | null;
  intro: string;
  keyPoints: string[];
  subProcesses?: IndustrySubProcess[];
  figures: readonly [IndustryDetailFigure, IndustryDetailFigure];
};

export const INDUSTRY_DETAIL_CONTENT: Record<string, IndustryDetailContent> = {
  "textile-industries": {
    slug: "textile-industries",
    breadcrumbName: "Textile Industries",
    sectionTag: "Industry overview",
    sectionTitle: "Effluent Treatment for the Textile Industry",
    sectionSub: null,
    intro:
      "The textile industry is one of the largest consumers of water and producers of wastewater, especially during processes like dyeing, printing, and finishing. This wastewater often contains dyes, chemicals, heavy metals, and other pollutants that can harm the environment if not treated properly. Zero Liquid Discharge (ZLD) is an advanced wastewater treatment process designed to eliminate liquid waste from industrial facilities completely. By treating, recycling, and reusing wastewater, ZLD systems ensure that no liquid waste is discharged into the environment, aligning with sustainable and environmentally friendly practices. Reach out for customized designs, case-specific consultancy, and other services.",
    keyPoints: [
      "We specialize in delivering advanced Effluent Treatment Plant and Zero Liquid Discharge systems tailored for the dyeing sector.",
      "Our solutions are designed to address the unique challenges of dyeing wastewater.",
      "Every system ensures full compliance with environmental regulations while promoting sustainable operations.",
      "Reach out to explore customized system designs, industrial use cases, and monitoring integrations.",
    ],
    subProcesses: [
      {
        title: "Effluent Treatment Plants (ETP) for Dyeing Processes",
        paragraphs: [
          "Dyeing operations produce wastewater laden with dyes, chemicals, and other pollutants. It drastically depletes freshwater resources, using up to 200 litres of water per kilogram of textile produced, making it a significant driver of water scarcity. Our ETP systems are engineered to effectively treat these effluents, ensuring safe discharge or reuse.",
          "At Austro, we specialize in delivering advanced Effluent Treatment Plant and Zero Liquid Discharge systems tailored for the dyeing sector. Our solutions are designed to address the unique challenges of dyeing wastewater, ensuring compliance with environmental regulations and promoting sustainable operations. Reach out to explore customized system designs, industrial use cases and monitoring integrations.",
        ],
      },
      {
        title: "Effluent Treatment Plants (ETP) for Printing Processes",
        paragraphs: [
          "Printing operations produce wastewater containing dyes, solvents, and other pollutants. It increases water turbidity and coloration, reducing sunlight penetration, disrupting aquatic photosynthesis, and harming the ecosystem's primary productivity. The high ion and salt load in printing effluents can disrupt aquatic organisms' osmotic balance and degrade overall water quality. Our ETP systems are engineered to effectively treat these effluents, ensuring safe discharge or reuse.",
          "At Austro, we deliver cutting-edge Effluent Treatment and Zero Liquid Discharge solutions specifically engineered for the printing sector. Our systems tackle the distinctive complexities of printing wastewater, guaranteeing regulatory compliance while advancing environmentally responsible and sustainable practices. Reach out for customized designs, case-specific consultancy and other services.",
        ],
      },
      {
        title: "Effluent Treatment Plants (ETP) for Sizing Processes",
        paragraphs: [
          "Sizing operations in the textile industry produce wastewater containing starches, synthetic polymers, and other chemicals. Sizing wastewater often exhibits high BOD and COD levels, driven by starches, PVA, and other polymers, which deplete dissolved oxygen and threaten aquatic life. Foaming from PVA-rich effluents can impair gas exchange at the water surface, suffocate aquatic organisms, and disrupt aquatic ecosystems.",
          "Our ETP systems are engineered to effectively treat these effluents, ensuring safe discharge or reuse.",
          "At Austro, we deliver state-of-the-art Effluent Treatment Plant and Zero Liquid Discharge (ZLD) systems, expertly crafted to meet the specific needs of sizing wastewater in the textile industry. Our innovative technologies are engineered to overcome the complex challenges associated with sizing effluent, ensuring regulatory compliance and fostering sustainable, eco-conscious operations. Reach out to explore customized system designs, industrial use cases and monitoring integrations.",
        ],
      },
      {
        title: "Effluent Treatment Plants (ETP) for Washing Processes",
        paragraphs: [
          "Washing operations in textile manufacturing produce wastewater containing detergents, dyes, and other pollutants. Elevated wastewater pH, often from alkaline detergents and bleaching agents, can disrupt the natural pH balance of receiving water bodies, impairing aquatic life that typically thrives only between pH 6 and 9. Increased electrical conductivity and total dissolved solids (TDS) due to salts and ionic detergents in wash effluents can harm aquatic organisms by altering osmotic balance and degrading overall water quality.",
          "Our ETP systems are engineered to effectively treat these effluents, ensuring safe discharge or reuse.",
          "At Austro, we're committed to providing cutting-edge Effluent Treatment Plant and Zero-Liquid-Discharge systems specifically engineered for the textile industry's washing processes. Our solutions are crafted to tackle the distinct challenges posed by washing effluent, ensuring environmental compliance and advancing your sustainability goals. Reach out to explore customized system designs, industrial use cases and monitoring integrations.",
        ],
      },
    ],
    figures: [
      {
        src: "/Images/Industries/Texttiles/Dyeing Image May 5, 2026, 03_22_37 PM.png",
        alt: "Textile industry, dyeing process treatment",
      },
      {
        src: "/Images/Industries/Texttiles/Printing.png",
        alt: "Textile industry, printing process",
      },
    ],
  },
  "food-industry": {
    slug: "food-industry",
    breadcrumbName: "Food Industry",
    sectionTag: "Industry overview",
    sectionTitle: "ETP & ZLD Solutions for the Food Industry",
    sectionSub: null,
    intro:
      "Our ETPs are engineered to treat wastewater generated from food processing activities, which often contain organic matter, oils, and cleaning agents. Elevated nutrient levels (nitrogen and phosphorus) from detergents and fabric residues can trigger eutrophication in receiving water bodies, causing algal blooms and oxygen depletion. High concentrations of fats, oils, greases (FOG), and suspended solids raise turbidity and reduce oxygen transfer, suffocating aquatic ecosystems.",
    keyPoints: [
      "By employing a combination of physical, chemical, and biological treatments, we ensure the effluent meets discharge standards or is suitable for reuse.",
      "We specialize in delivering comprehensive Effluent Treatment Plant and Zero Liquid Discharge solutions tailored for the food processing sector.",
      "Our systems are designed to ensure regulatory compliance, promote sustainability, and optimize water usage.",
      "Reach out for customized designs, case-specific consultancy, and other services.",
    ],
    figures: [
      {
        src: "/Images/Industries/Food Industry/Food.jpeg",
        alt: "Food industry wastewater treatment",
      },
      {
        src: "/Images/Industries/Food Industry/Podaran SS RO.jpeg",
        alt: "Food industry, treatment installation",
      },
    ],
  },
  "dairy-processing": {
    slug: "dairy-processing",
    breadcrumbName: "Dairy Processing",
    sectionTag: "Industry overview",
    sectionTitle: "ETP for Dairy Processing",
    sectionSub: null,
    intro:
      "Dairy processing generates wastewater rich in organic matter, fats, oils, and nutrients. The high BOD and COD levels rapidly deplete dissolved oxygen, causing hypoxic conditions that can suffocate fish and aquatic organisms.",
    keyPoints: [
      "We specialize in providing advanced Effluent Treatment Plant solutions tailored for the dairy industry.",
      "Our systems are designed to address the unique challenges of dairy effluents.",
      "Every plant ensures compliance with environmental regulations and promotes sustainable operations.",
      "Reach out to explore customized system designs, industrial use cases, and monitoring integrations.",
    ],
    figures: [
      {
        src: "/Images/Industries/Dairy Prcessing /Dairy.jpeg",
        alt: "Dairy processing effluent treatment",
      },
      {
        src: "/Images/Industries/Dairy Prcessing /WhatsApp Image 2024-10-03 at 11.02.31.jpeg",
        alt: "Dairy processing, treatment plant",
      },
    ],
  },
  "effluent-treatment-in-coir-processing": {
    slug: "effluent-treatment-in-coir-processing",
    breadcrumbName: "Effluent Treatment In Coir Processing",
    sectionTag: "Industry overview",
    sectionTitle: "ETP for Coir Processing",
    sectionSub: null,
    intro:
      "Coir processing generates wastewater rich in organic matter, suspended solids, and other pollutants. Our ETP systems are engineered to effectively treat these effluents, ensuring safe discharge or reuse.",
    keyPoints: [
      "We specialize in designing and implementing Effluent Treatment Plants tailored to the unique needs of the coir industry.",
      "Our solutions ensure full compliance with environmental regulations.",
      "Every system promotes sustainable, responsible operations.",
      "Reach out to explore customized system designs, industrial use cases, and monitoring integrations.",
    ],
    figures: [
      {
        src: "/Images/Industries/Choir Industry/Coir.jpeg",
        alt: "Coir processing effluent treatment",
      },
      {
        src: "/Images/Industries/Choir Industry/ETP 9.jpeg",
        alt: "Coir industry treatment plant",
      },
    ],
  },
  "latex-processing": {
    slug: "latex-processing",
    breadcrumbName: "Latex Processing",
    sectionTag: "Industry overview",
    sectionTitle: "ETP for Latex Processing",
    sectionSub: null,
    intro:
      "Latex processing generates wastewater rich in organic matter, proteins, fatty acids, and other pollutants. Our ETP systems are engineered to effectively treat these effluents, ensuring safe discharge or reuse.",
    keyPoints: [
      "We specialize in providing advanced Effluent Treatment Plant and Zero Liquid Discharge solutions tailored for the latex industry.",
      "Our systems are designed to address the unique challenges of latex processing effluents.",
      "Every plant ensures compliance with environmental regulations and promotes sustainable operations.",
      "Reach out for customized designs, case-specific consultancy, and other services.",
    ],
    figures: [
      {
        src: "/Images/Industries/Latex Industry/Latex.jpeg",
        alt: "Latex processing effluent treatment",
      },
      {
        src: "/Images/Industries/Latex Industry/KLA.jpeg",
        alt: "Latex industry treatment system",
      },
    ],
  },
  "latex-tanneries": {
    slug: "latex-tanneries",
    breadcrumbName: "Latex Tanneries",
    sectionTag: "Industry overview",
    sectionTitle: "ETP for Tanneries",
    sectionSub: null,
    intro:
      "Tannery operations produce wastewater laden with organic matter, suspended solids, and other pollutants. Our ETP systems are engineered to effectively treat these effluents, ensuring safe discharge or reuse.",
    keyPoints: [
      "We specialize in delivering advanced Effluent Treatment Plant and Zero Liquid Discharge systems tailored for the tannery sector.",
      "Our solutions are designed to address the unique challenges of tannery wastewater.",
      "Every system ensures compliance with environmental regulations and promotes sustainable operations.",
      "Reach out to explore customized system designs, industrial use cases, and monitoring integrations.",
    ],
    figures: [
      {
        src: "/Images/Industries/Tennery/Tannery.jpeg",
        alt: "Tannery effluent treatment",
      },
      {
        src: "/Images/Industries/Tennery/ETP 7.jpeg",
        alt: "Tannery treatment plant",
      },
    ],
  },
  "chemical-processing": {
    slug: "chemical-processing",
    breadcrumbName: "Chemical Processing",
    sectionTag: "Industry overview",
    sectionTitle: "ETP for Chemical Processing",
    sectionSub: null,
    intro:
      "Chemical manufacturing processes generate wastewater containing a variety of contaminants, including organic compounds, acids, heavy metals, and other hazardous substances. Our ETP systems are engineered to effectively treat these effluents, ensuring safe discharge or reuse.",
    keyPoints: [
      "We specialize in delivering advanced Effluent Treatment Plant and Zero Liquid Discharge systems tailored for the chemical sector.",
      "Our solutions are designed to address the unique challenges of chemical industry effluents.",
      "Every system ensures compliance with environmental regulations and promotes sustainable operations.",
      "Reach out for customized designs, case-specific consultancy, and other services.",
    ],
    figures: [
      {
        src: "/Images/Industries/Chemical Industry/Chemical.jpeg",
        alt: "Chemical industry effluent treatment",
      },
      {
        src: "/Images/Industries/Chemical Industry/WhatsApp Image 2025-12-01 at 1.46.57 PM.jpeg",
        alt: "Chemical processing treatment plant",
      },
    ],
  },
  "sugar-industry": {
    slug: "sugar-industry",
    breadcrumbName: "Sugar Industry",
    sectionTag: "Industry overview",
    sectionTitle: "ETP for the Sugar Industry",
    sectionSub: null,
    intro:
      "Sugar manufacturing — especially in milling and processing — produces wastewater rich in organic load, total suspended solids, melanoidins, colour, turbidity, oils, grease, and nutrients.",
    keyPoints: [
      "We specialize in delivering advanced ETP and Zero Liquid Discharge solutions customized for the sugar sector.",
      "Our solutions align with regulatory compliance and environmental sustainability.",
      "Let Austro lead your sugar mill's journey toward cleaner operations and water stewardship.",
      "Reach out for tailored designs, regional case studies, and other services.",
    ],
    figures: [
      {
        src: "/Images/Industries/Suagr Industries/Sugarcane  (1).png",
        alt: "Sugar industry operations",
      },
      {
        src: "/Images/Industries/Suagr Industries/WhatsApp Image 2024-10-07 at 15.32.22.jpeg",
        alt: "Sugar industry effluent treatment",
      },
    ],
  },
  "raw-water-treatment": {
    slug: "raw-water-treatment",
    breadcrumbName: "Raw Water Treatment",
    sectionTag: "Industry overview",
    sectionTitle: "Raw Water Treatment",
    sectionSub: null,
    intro:
      "Raw water — sourced from rivers, lakes, groundwater, borewells, or rainfall — often contains suspended sediments, colloids, hardness, dissolved minerals, iron, bacteria, and organic matter.",
    keyPoints: [
      "We specialize in designing and delivering advanced Raw Water Treatment solutions tailored to purify source water reliably.",
      "Our systems ensure regulatory compliance, protect industrial operations, and support sustainable water management.",
      "Austro empowers your raw water needs with tailored solutions that ensure reliability, efficiency, and sustainability.",
      "Reach out to explore customized system designs, industrial use cases, and monitoring integrations.",
    ],
    figures: [
      {
        src: "/Images/Industries/Raw Water Treatment/Raw water.jpeg",
        alt: "Raw water treatment",
      },
      {
        src: "/Images/Industries/Raw Water Treatment/Raw RO.jpg",
        alt: "Raw water reverse osmosis system",
      },
    ],
  },
  "domestic-sewage-treatment": {
    slug: "domestic-sewage-treatment",
    breadcrumbName: "Domestic Sewage Treatment",
    sectionTag: "Industry overview",
    sectionTitle: "Domestic Sewage Treatment",
    sectionSub: null,
    intro:
      "Domestic wastewater — originating from households, residential complexes, and community areas — contains organic waste, suspended solids, nutrients, pathogens, and occasional household chemicals.",
    keyPoints: [
      "We excel in designing and delivering cutting-edge Sewage Treatment Plants and Portable Sewerage systems, specifically engineered for domestic sewage applications.",
      "Our systems ensure regulatory compliance, safeguard public health, and support a sustainable and circular water economy.",
      "Let Austro lead your domestic wastewater solutions toward cleaner, smarter, and more sustainable systems.",
      "Reach out for customized designs, case-specific consultancy, and other services.",
    ],
    figures: [
      {
        src: "/Images/Industries/Domestic Sewage Treatment /Sewage.jpeg",
        alt: "Domestic sewage treatment",
      },
      {
        src: "/Images/Industries/Domestic Sewage Treatment /WhatsApp Image 2026-01-10 at 5.56.37 PM (3).jpeg",
        alt: "Domestic sewage treatment plant",
      },
    ],
  },
};

export function getIndustryDetailContent(
  slug: string,
): IndustryDetailContent | undefined {
  return INDUSTRY_DETAIL_CONTENT[slug];
}
