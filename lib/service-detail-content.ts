/** Verbatim copy for service detail pages — do not extend beyond source text. */

export type ServiceDetailFigure = {
  src: string;
  alt: string;
};

export type ServiceDetailContent = {
  slug: string;
  /** Shown in breadcrumb: Services › [breadcrumbName] */
  breadcrumbName: string;
  /** Service name — shown in hero with “Services” */
  heading: string;
  intro: string;
  keyPoints: string[];
  /** Two gallery images under bullets — /public/Images/Services/… */
  figures: readonly [ServiceDetailFigure, ServiceDetailFigure];
};

export const SERVICE_DETAIL_CONTENT: Record<string, ServiceDetailContent> = {
  design: {
    slug: "design",
    breadcrumbName: "Design & Development",
    heading: "Design & Development",
    intro:
      "At Austro, our success is built on a foundation of meticulously planned and executed engineering. Every project begins with a deep commitment to design excellence, because we believe that a plant's long term performance is determined long before construction starts. Our approach to design and development is innovative, holistic, and engineered to deliver lasting impact.",
    keyPoints: [
      "We employ 2D and 3D cutting edge civil, mechanical, and electrical designs that are not only innovative but also specifically engineered for maximum efficiency and robust performance.",
      "Our designs are tailored for innovation, combining technical expertise with industry insight to create solutions that go beyond conventional standards.",
      "Maximum efficiency and robust performance sit at the heart of every design decision, ensuring optimal output with minimal resource consumption.",
      "This holistic approach ensures that every component works in perfect synergy to deliver a sustainable and reliable solution.",
    ],
    figures: [
      {
        src: "/Images/Services/Design/COVER (1).jpg",
        alt: "Design & Development, project imagery",
      },
      {
        src: "/Images/Services/Design/fresh lotus (7) (1).png",
        alt: "Design & Development, engineering detail",
      },
    ],
  },
  "civil-design-and-construction": {
    slug: "civil-design-and-construction",
    breadcrumbName: "Civil Planning",
    heading: "Civil Planning",
    intro:
      "A solid foundation is paramount to the long term success of any plant. That's why at Austro, our civil construction is not just built, but custom engineered to be robust and durable. Every plant we deliver is supported by civil work that is purpose designed to handle the operational demands and environmental conditions specific to its site, because we believe true durability begins underground.",
    keyPoints: [
      "Our civil construction is custom engineered to be robust and durable, designed around the unique requirements of each project.",
      "Every aspect is meticulously planned to guarantee reliable operation and unwavering structural integrity.",
      "Built to ensure that your investment stands the test of time against all operational demands and environmental conditions.",
      "A foundation that is engineered to support uninterrupted, dependable performance for years to come.",
    ],
    figures: [
      {
        src: "/Images/Services/Civil desing and planning/Civil design and plan.jpg",
        alt: "Civil planning and design, site overview",
      },
      {
        src: "/Images/Services/Civil desing and planning/Civil desing and plan.jpeg",
        alt: "Civil planning and design, planning documentation",
      },
    ],
  },
  fabrication: {
    slug: "fabrication",
    breadcrumbName: "Fabrication",
    heading: "Fabrication",
    intro:
      "At Austro, we believe that quality is built from the ground up. Fabrication is where engineering precision meets craftsmanship, and we treat every component as a critical part of the whole. Our fabrication process is a testament to our commitment to excellence, combining best in class equipment with meticulous attention to detail to deliver components that perform flawlessly for the lifetime of the plant.",
    keyPoints: [
      "Our fabrication process utilizes best in class equipment, ensuring consistent precision and reliability across every component.",
      "Meticulous attention to detail ensures that every component is manufactured with uncompromising precision.",
      "This commitment to accuracy guarantees a seamless and efficient assembly process on site.",
      "Precision fabrication forms the foundation for flawless operation, exceptional performance, and long term durability of the entire system.",
    ],
    figures: [
      {
        src: "/Images/Services/Fabrication/Fabrication.png",
        alt: "Fabrication, equipment and components",
      },
      {
        src: "/Images/Services/Fabrication/WhatsApp Image 2026-05-05 at 6.00.35 PM.jpg",
        alt: "Fabrication, workshop",
      },
    ],
  },
  erection: {
    slug: "erection",
    breadcrumbName: "Erection",
    heading: "Erection",
    intro:
      "At Austro, our well engineered erection process is a critical phase in turning design into reality. This is where blueprints become operational plants, and where the precision of our planning meets the expertise of our on site teams. Every erection project is executed with discipline, accuracy, and an unwavering focus on delivering plants that perform reliably from day one.",
    keyPoints: [
      "Our expert teams are dedicated to ensuring timely installation, meticulously following precise plans and schedules.",
      "Every project is executed to meet project deadlines, with no compromise on quality or safety.",
      "A rigorous calibration process ensures that every component is fine tuned for optimal performance.",
      "Seamless integration and the highest standards of operational reliability are guaranteed from day one.",
    ],
    figures: [
      {
        src: "/Images/Services/Siteerection/siteerection.jpg",
        alt: "Site erection, installation",
      },
      {
        src: "/Images/Services/Siteerection/WhatsApp Image 2025-02-13 at 10.28.56 (1).jpg",
        alt: "Site erection, on site progress",
      },
    ],
  },
  commissioning: {
    slug: "commissioning",
    breadcrumbName: "Commissioning",
    heading: "Commissioning",
    intro:
      "Commissioning is the final, critical phase where every aspect of the plant is brought to life. Our experienced commissioning team ensures a smooth and efficient startup, meticulously testing and fine tuning every aspect of the plant to guarantee optimal performance from day one. But our work doesn't end with handover, we stay invested in your plant's long term success through training and ongoing support.",
    keyPoints: [
      "A smooth and efficient startup, ensured by our experienced commissioning team.",
      "Meticulous testing and fine tuning of every aspect of the plant to guarantee optimal performance from day one.",
      "Comprehensive training that empowers your operational staff with the knowledge and confidence they need.",
      "Dedicated support to help your team run and maintain the system effectively for years to come.",
    ],
    figures: [
      {
        src: "/Images/Services/Commisioning/image1.jpg",
        alt: "Commissioning, startup and testing",
      },
      {
        src: "/Images/Services/Commisioning/image2.jpg",
        alt: "Commissioning, plant handover",
      },
    ],
  },
};

export function getServiceDetailContent(
  slug: string,
): ServiceDetailContent | undefined {
  return SERVICE_DETAIL_CONTENT[slug];
}
