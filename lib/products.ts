import { client } from "./sanity";

export async function getProducts() {
  return await client.fetch(`
    *[_type == "product"]{
      _id,
      "productName": name,
      hsn,
      details,
      "showOnHomepage": isFeatured,
      "image": image.asset->url
    }
  `);
}
