export const productType = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "hsn",
      title: "HSN",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "isFeatured",
      title: "Show on Homepage",
      type: "boolean",
      initialValue: false,
    },
  ],
};
