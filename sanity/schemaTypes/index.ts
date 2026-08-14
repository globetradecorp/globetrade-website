import { sectionTypes } from "./sections";
import { heroSectionType } from "./heroSectionType";
import { productType } from "./productType";
import { productPageType } from "./productPageType";

export const schemaTypes = [
  productType,
  productPageType,
  heroSectionType,
  ...sectionTypes,
];
