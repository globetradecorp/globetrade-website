export const heroContentType = {
  name: "heroContent",
  title: "Hero Content",
  type: "document",
  fields: [
    {
      name: "smallTagline",
      title: "Small Tagline",
      type: "string",
    },
    {
      name: "heading",
      title: "Main Heading",
      type: "text",
      rows: 4,
      description: "Use one line per heading row.",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
    },
  ],
};
