import { sectionTypes } from "./sections";
import { heroSectionType } from "./heroSectionType";
import { productType } from "./productType";

export const schemaTypes = [productType, heroSectionType, ...sectionTypes];
