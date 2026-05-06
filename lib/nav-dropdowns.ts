/** Exact labels from site reference — Products, Services, Industries nav dropdowns */

export type NavDropdownItem = {
  label: string;
  slug: string;
  /** Reference UI shows a submenu chevron on some rows — no second-level copy was provided */
  hasNestedChevron?: boolean;
};

export const PRODUCT_DROPDOWN: NavDropdownItem[] = [
  { label: "Zero Liquid Discharge", slug: "zero-liquid-discharge" },
  { label: "Effluent Treatment Plant", slug: "effluent-treatment-plant" },
  { label: "Sewage Treatment Plant", slug: "sewage-treatment-plant" },
  { label: "Reverse Osmosis", slug: "reverse-osmosis" },
  { label: "Sand & Carbon Filtration", slug: "sand-carbon-filtration" },
  { label: "Membrane Bio Reactor", slug: "membrane-bio-reactor" },
  { label: "Nano Filtration", slug: "nano-filtration" },
  { label: "Sludge De-Watering", slug: "sludge-de-watering" },
  { label: "Water Softening", slug: "water-softening" },
  { label: "Moving Bed Bio Reactor", slug: "moving-bed-bio-reactor" },
  { label: "Portable STP And ETP", slug: "portable-stp-and-etp" },
  { label: "Multi-Media Filters", slug: "multi-media-filters" },
  { label: "Ultra Filtration", slug: "ultra-filtration" },
  { label: "Micro Filtration", slug: "micro-filtration" },
  { label: "Gas Chlorination", slug: "gas-chlorination" },
  { label: "Ceramic Filtration", slug: "ceramic-filtration" },
];

export const SERVICE_DROPDOWN: NavDropdownItem[] = [
  { label: "Design", slug: "design" },
  { label: "Civil Design And Construction", slug: "civil-design-and-construction" },
  { label: "Fabrication", slug: "fabrication" },
  { label: "Erection", slug: "erection" },
  { label: "Commissioning", slug: "commissioning" },
];

export const INDUSTRY_DROPDOWN: NavDropdownItem[] = [
  { label: "Textile Industries", slug: "textile-industries", hasNestedChevron: true },
  { label: "Food Industry", slug: "food-industry" },
  { label: "Dairy Processing", slug: "dairy-processing" },
  {
    label: "Effluent Treatment In Coir Processing",
    slug: "effluent-treatment-in-coir-processing",
  },
  { label: "Latex Processing", slug: "latex-processing" },
  { label: "Latex Tanneries", slug: "latex-tanneries" },
  { label: "Chemical Processing", slug: "chemical-processing", hasNestedChevron: true },
  { label: "Sugar Industry", slug: "sugar-industry" },
  { label: "Raw Water Treatment", slug: "raw-water-treatment" },
  { label: "Domestic Sewage Treatment", slug: "domestic-sewage-treatment" },
];

export function productSlugs() {
  return PRODUCT_DROPDOWN.map((i) => i.slug);
}

export function serviceSlugs() {
  return SERVICE_DROPDOWN.map((i) => i.slug);
}

export function industrySlugs() {
  return INDUSTRY_DROPDOWN.map((i) => i.slug);
}
