export const heroSlideType = {
  name: "heroSlide",
  title: "Hero Slide",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "altText",
      title: "Alt Text",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    },
    {
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
    },
  ],
};
