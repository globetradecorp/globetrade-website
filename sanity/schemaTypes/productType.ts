export const productType = {
  name: "product",
  title: "Product",
  type: "document",
  fieldsets: [
    { name: "core", title: "Core Information" },
    { name: "pageLink", title: "Dedicated Page Link" },
  ],
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
      fieldset: "core",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      fieldset: "core",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "subtitle",
      title: "Botanical / Subtitle Moniker",
      type: "string",
      fieldset: "core",
    },
    {
      name: "productCategory",
      title: "Product Category",
      type: "string",
      fieldset: "core",
      options: {
        list: [
          { title: "Herbs", value: "Herbs" },
          { title: "Fruits", value: "Fruits" },
          { title: "Vegetables", value: "Vegetables" },
        ],
        layout: "radio",
      },
    },
    {
      name: "image",
      title: "Listing / Thumbnail Image",
      type: "image",
      fieldset: "core",
      options: { hotspot: true },
    },
    {
      name: "hsn",
      title: "HSN Code",
      type: "string",
      fieldset: "core",
    },
    {
      name: "details",
      title: "Listing Bullet Points",
      type: "array",
      of: [{ type: "string" }],
      fieldset: "core",
    },
    {
      name: "isFeatured",
      title: "Show on Homepage",
      type: "boolean",
      fieldset: "core",
      initialValue: true,
    },
    {
      name: "dedicatedPage",
      title: "Associated Dedicated Product Page",
      type: "reference",
      to: [{ type: "productPage" }],
      fieldset: "pageLink",
    },
  ],
};
