export const overviewSection = {
  name: "overviewSection",
  title: "Overview & Processing",
  type: "object",
  fields: [
    { name: "badge", title: "Badge", type: "string", initialValue: "Overview" },
    { name: "title", title: "Heading", type: "string", initialValue: "Botanical Heritage & Processing" },
    { name: "overview", title: "Overview Text", type: "text", rows: 4 },
    { name: "processingMethod", title: "Processing Method Text", type: "text", rows: 3 },
  ],
};

export const nutrientsSection = {
  name: "nutrientsSection",
  title: "Nutrients & Composition",
  type: "object",
  fields: [
    { name: "badge", title: "Badge", type: "string", initialValue: "Nutritional Profile" },
    { name: "title", title: "Heading", type: "string", initialValue: "Nutrient-Dense Natural Composition" },
    { name: "description", title: "Section Description", type: "text", rows: 2 },
    {
      name: "nutrientsList",
      title: "Nutrients List",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "applicationsText", title: "Applications / Global Uses Text", type: "text", rows: 3 },
  ],
};

export const originSection = {
  name: "originSection",
  title: "Origin Advantage",
  type: "object",
  fields: [
    { name: "badge", title: "Badge", type: "string", initialValue: "Origin Sourcing" },
    { name: "title", title: "Heading", type: "string", initialValue: "Why Choose Indian Origin?" },
    { name: "intro", title: "Introductory Text", type: "string" },
    {
      name: "points",
      title: "Origin Advantage Points",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export const comparisonSection = {
  name: "comparisonSection",
  title: "Comparison Table",
  type: "object",
  fields: [
    { name: "badge", title: "Badge", type: "string", initialValue: "Product Comparison" },
    { name: "title", title: "Heading", type: "string", initialValue: "Organic vs Conventional" },
    { name: "intro", title: "Introductory Text", type: "text", rows: 3 },
    { name: "col1Header", title: "Column 1 Header", type: "string", initialValue: "Organic" },
    { name: "col2Header", title: "Column 2 Header", type: "string", initialValue: "Conventional" },
    {
      name: "rows",
      title: "Comparison Rows",
      type: "array",
      of: [
        {
          type: "object",
          name: "comparisonRow",
          fields: [
            { name: "feature", title: "Feature / Parameter", type: "string" },
            { name: "col1Value", title: "Column 1 Value", type: "text", rows: 2 },
            { name: "col2Value", title: "Column 2 Value", type: "text", rows: 2 },
          ],
        },
      ],
    },
  ],
};

export const sourcingSection = {
  name: "sourcingSection",
  title: "Sourcing & Export Capabilities",
  type: "object",
  fields: [
    { name: "badge", title: "Badge", type: "string", initialValue: "Export Capabilities" },
    { name: "title", title: "Heading", type: "string", initialValue: "Why Choose Globetrade Corp?" },
    { name: "intro", title: "Sourcing Philosophy Text", type: "text", rows: 3 },
    { name: "varietiesTitle", title: "Varieties Card Heading", type: "string", initialValue: "We can source and export:" },
    {
      name: "varieties",
      title: "Export Varieties Available",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "specificationsTitle", title: "Specifications Card Heading", type: "string", initialValue: "Customization & Packaging" },
    {
      name: "specifications",
      title: "Specifications & Packing Options",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "note", title: "Tailored Solutions Note", type: "text", rows: 2 },
  ],
};

export const commitmentsSection = {
  name: "commitmentsSection",
  title: "Our Commitments",
  type: "object",
  fields: [
    { name: "badge", title: "Badge", type: "string", initialValue: "Quality & Reliability" },
    { name: "title", title: "Heading", type: "string", initialValue: "Our Commitment Includes:" },
    {
      name: "commitments",
      title: "Commitment Points",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export const partnerCtaSection = {
  name: "partnerCtaSection",
  title: "Partner with Us (CTA)",
  type: "object",
  fields: [
    { name: "badge", title: "Badge", type: "string", initialValue: "Commercial Partnership" },
    { name: "title", title: "Heading", type: "string", initialValue: "Partner with Globetrade Corp" },
    { name: "description", title: "Partnership Description", type: "text", rows: 3 },
    { name: "ctaText", title: "CTA Button Text", type: "string", initialValue: "Inquire for Export" },
    { name: "ctaLink", title: "CTA Button Link", type: "string", initialValue: "/contact" },
  ],
};

export const faqSection = {
  name: "faqSection",
  title: "Frequently Asked Questions",
  type: "object",
  fields: [
    { name: "badge", title: "Badge", type: "string", initialValue: "Information" },
    { name: "title", title: "Heading", type: "string", initialValue: "Frequently Asked Questions" },
    {
      name: "faqs",
      title: "Questions & Answers",
      type: "array",
      of: [
        {
          type: "object",
          name: "faqItem",
          fields: [
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text", rows: 3 },
          ],
        },
      ],
    },
  ],
};

export const customSection = {
  name: "customSection",
  title: "Custom Section",
  type: "object",
  fields: [
    { name: "badge", title: "Badge", type: "string" },
    { name: "title", title: "Heading", type: "string" },
    { name: "content", title: "Content", type: "text", rows: 4 },
    {
      name: "bulletPoints",
      title: "Bullet Points",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export const sectionTypes = [
  overviewSection,
  nutrientsSection,
  originSection,
  comparisonSection,
  sourcingSection,
  commitmentsSection,
  partnerCtaSection,
  faqSection,
  customSection,
];
