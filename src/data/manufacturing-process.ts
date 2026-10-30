/**
 * Shared manufacturing process used by product detail pages.
 *
 * Put the six shared production images in:
 *   src/assets/manufacturing/
 *
 * Files:
 *   medal-process-01-design.jpg
 *   medal-process-02-mold.jpg
 *   medal-process-03-forming.jpg
 *   medal-process-04-plating.jpg
 *   medal-process-05-finishing.jpg
 *   medal-process-06-packing.jpg
 *
 * Inspection is intentionally folded into the Finishing & Inspection step
 * so the six-image production sequence stays aligned with the available assets.
 */

import type { ImageMetadata } from "astro";

import process01 from "../assets/manufacturing/medal-process-01-design.jpg";
import process02 from "../assets/manufacturing/medal-process-02-mold.jpg";
import process03 from "../assets/manufacturing/medal-process-03-forming.jpg";
import process04 from "../assets/manufacturing/medal-process-04-plating.jpg";
import process05 from "../assets/manufacturing/medal-process-05-finishing.jpg";
import process06 from "../assets/manufacturing/medal-process-06-packing.jpg";

export interface ManufacturingStep {
  step: string;
  title: string;
  text: string;
  image: ImageMetadata;
  alt: string;
}

export const manufacturingProcess: ManufacturingStep[] = [
  {
    step: "01",
    title: "Design",
    text:
      "We review your artwork, dimensions, details, colors, and finishing requirements.",
    image: process01,
    alt: "Artwork and design review for a custom metal product",
  },
  {
    step: "02",
    title: "Mold",
    text:
      "A custom mold is created from the approved design.",
    image: process02,
    alt: "Custom metal mold prepared for production",
  },
  {
    step: "03",
    title: "Forming",
    text:
      "Die-casting or stamping creates the metal body and relief details.",
    image: process03,
    alt: "Metal forming process for custom metal products",
  },
  {
    step: "04",
    title: "Plating",
    text:
      "The product receives the selected gold, silver, bronze, antique, or other metal finish.",
    image: process04,
    alt: "Metal plating process for custom metal products",
  },
  {
    step: "05",
    title: "Finishing & Inspection",
    text:
      "Enamel, printing, polishing, final detailing, and quality checks are completed.",
    image: process05,
    alt: "Coloring, polishing, finishing, and quality inspection of custom metal products",
  },
  {
    step: "06",
    title: "Packing",
    text:
      "Finished products are packed according to project requirements and prepared for shipment.",
    image: process06,
    alt: "Finished custom metal products being packed for shipment",
  },
];

export default manufacturingProcess;