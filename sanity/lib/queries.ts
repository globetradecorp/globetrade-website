import groq from "groq";

export const productFields = `
  name,
  image,
  hsn,
  details,
  featured
`;

export const allProductsQuery = groq`*[_type == "product"] | order(name asc) {
  ${productFields}
}`;

export const featuredProductsQuery = groq`*[_type == "product" && featured == true] | order(name asc)[0...3] {
  ${productFields}
}`;
