/**
 * Craft / Add-on / Package / Plating 数据
 *
 * 图片通过 astro:assets 的 <Image> 组件渲染，
 * 全部从 src/assets/crafts/ 用 import 引入，
 * 不再使用 public 路径。
 */

import type { ImageMetadata } from "astro";

/* ---------- Craft ---------- */
import softEnamel from "../assets/crafts/soft-enamel.jpg";        // craft[0]
import hardEnamel from "../assets/crafts/hard-enamel.jpg";        // craft[1]
import dieStruck from "../assets/crafts/die-struck.jpg";          // craft[2]
import offsetPrinting from "../assets/crafts/offset-printing.jpg"; // craft[3]
import uvPrinting from "../assets/crafts/uv-printing.jpg";        // craft[4]

/* ---------- Add-on ---------- */
import glitter from "../assets/crafts/glitter.jpg";                // addon[0]
import glowInTheDark from "../assets/crafts/glow-in-the-dark.jpg"; // addon[1]
import rhinestone from "../assets/crafts/rhinestone.jpg";          // addon[2]
/* 注意：原文件名是 exposy.jpg（拼写如此），如需改为 epoxy.jpg 请同步改 import */
import exposy from "../assets/crafts/exposy.jpg";                  // addon[3]
import interactivePin from "../assets/crafts/interactive-pin.jpg"; // addon[4]

/* ---------- Package ---------- */
import oppBag from "../assets/crafts/opp-bag.jpg";                 // package top[0]
import coinCapsule from "../assets/crafts/coin-capsule.jpg";       // package top[1]
import backCard from "../assets/crafts/back-card.jpg";             // package top[2]
import woodenFrame from "../assets/crafts/wooden-frame.jpg";       // package top[3]
import velvetBox from "../assets/crafts/velvet-box.jpg";           // package bottom[0]
import woodenBox from "../assets/crafts/wooden-box.jpg";           // package bottom[1]
import paperBox from "../assets/crafts/paper-box.jpg";             // package bottom[2]

/* ---------- Plating ---------- */
import platingColor from "../assets/crafts/plating-color.jpg";

/* ============================================================
   类型定义
   ============================================================ */

export interface CraftCardItem {
  title: string;
  image: ImageMetadata;
  alt: string;
  /** Package 卡片没有 text，所以设为可选 */
  text?: string;
}

export interface CraftPanelItem {
  /** 用于 tab 切换的稳定 id："craft" | "addon" | "package" | "plating" */
  panel: string;
  /** 显示在 tab 按钮上的文字 */
  title: string;
  /** "cards" 走卡片网格；"image" 走单图展示 */
  type: "cards" | "image";
  /** 仅 package 面板使用，表示走上下两段式布局 */
  layout?: "package";

  cards?: CraftCardItem[];
  cardsTop?: CraftCardItem[];
  cardsBottom?: CraftCardItem[];

  /** 仅 type === "image" 使用 */
  image?: ImageMetadata;
  alt?: string;
}

/* ============================================================
   数据
   ============================================================ */

export const craftsData: CraftPanelItem[] = [
  {
    panel: "craft",
    title: "Techniques",
    type: "cards",
    cards: [
      {
        title: "Soft Enamel",
        image: softEnamel,
        alt: "Soft Enamel",
        text: "Bright colors with raised metal lines for a dimensional look. Best for bold designs with strong contrast and texture.",
      },
      {
        title: "Hard Enamel",
        image: hardEnamel,
        alt: "Hard Enamel",
        text: "Smooth and polished surface with a refined appearance. Best for premium pins, medals and collectible coins.",
      },
      {
        title: "Die-Struck",
        image: dieStruck,
        alt: "Die-Struck",
        text: "Classic metal finish with depth and embossed details. Best for elegant designs without color filling.",
      },
      {
        title: "Offset-Printing",
        image: offsetPrinting,
        alt: "Offset-Printing",
        text: "Unlimited colors and precise detail without metal borders. Best for gradients, illustrations and complex artwork.",
      },
      {
        title: "UV-Printing",
        image: uvPrinting,
        alt: "UV-Printing",
        text: "Full-color printing with greater freedom for complex designs. Best for gradients, fine details and artwork beyond metal borders.",
      },
    ],
  },
  {
    panel: "addon",
    title: "Add-on",
    type: "cards",
    cards: [
      {
        title: "Glitter",
        image: glitter,
        alt: "Glitter",
        text: "Sparkling metallic flakes mixed into enamel for an eye-catching, shimmering effect.",
      },
      {
        title: "Glow-in-the-dark",
        image: glowInTheDark,
        alt: "Glow-in-the-dark",
        text: "Phosphorescent pigments that absorb light and glow vibrantly in low-light environments.",
      },
      {
        title: "Rhinestone",
        image: rhinestone,
        alt: "Rhinestone",
        text: "Faceted crystals embedded into the metal surface for high-end sparkle and luxury.",
      },
      {
        title: "Epoxy",
        image: exposy,
        alt: "Epoxy Dome",
        text: "Clear protective resin coating that adds depth, gloss, and scratch resistance.",
      },
      {
        title: "Interactive Pin",
        image: interactivePin,
        alt: "Interactive Pin",
        text: "Moving components such as spinners, sliders, or hinges for engaging, tactile pieces.",
      },
    ],
  },
  {
    panel: "package",
    title: "Package",
    type: "cards",
    layout: "package",
    cardsTop: [
      { title: "Opp Bag", image: oppBag, alt: "Opp Bag" },
      { title: "Coin Capsule", image: coinCapsule, alt: "Coin Capsule" },
      { title: "Back Card", image: backCard, alt: "Back Card" },
      { title: "Wooden Frame", image: woodenFrame, alt: "Wooden Frame" },
    ],
    cardsBottom: [
      { title: "Velvet Box", image: velvetBox, alt: "Velvet Box" },
      { title: "Wooden Box", image: woodenBox, alt: "Wooden Box" },
      { title: "Paper Box", image: paperBox, alt: "Paper Box" },
    ],
  },
  {
    panel: "plating",
    title: "Plating & Color",
    type: "image",
    image: platingColor,
    alt: "Plating & Color Options",
  },
];

export default craftsData;