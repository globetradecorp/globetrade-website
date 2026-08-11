export const heroSectionType = {
  name: "heroSection",
  title: "Hero",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Hero Heading",
      type: "text",
      rows: 4,
      initialValue:
        "Premium Indian Herbs, Fruits & Vegetables\nExported Worldwide with Quality\nTrusted by Global Buyers",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slides",
      title: "Hero Slider Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
