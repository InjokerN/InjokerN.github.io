/**
 * 产品目录数据
 *
 * FILE:
 *   src/data/products.ts
 *
 * ROLE:
 *   /products 产品目录页唯一数据源
 *
 * 首页不读取这里。
 * 首页自己的产品展示数据直接维护在：
 *   src/pages/index.astro
 */

import type { ImageMetadata } from "astro";

/* ============================================================
   PRODUCT IMAGES
   ============================================================ */

import medal01 from "../assets/products/home/home-medal-01.jpg";
import medal02 from "../assets/products/home/home-medal-02.jpg";

import challengeCoin01 from "../assets/products/home/home-challenge-coin-01.jpg";
import challengeCoin02 from "../assets/products/home/home-challenge-coin-02.jpg";

import keychain01 from "../assets/products/home/home-keychain-01.jpg";
import enamelPin01 from "../assets/products/home/home-enamel-pin-01.jpg";
import fridgeMagnet01 from "../assets/products/home/home-fridge-magnet-01.jpg";
import bottleOpener01 from "../assets/products/home/home-bottle-opener-01.jpg";
import buttonBadge01 from "../assets/products/home/home-button-badge-01.jpg";
import cufflink01 from "../assets/products/home/home-cufflink-01.jpg";

/* ============================================================
   PRODUCT TYPE
   ============================================================ */

export interface Product {
  slug: string;
  title: string;
  desc: string;

  image: ImageMetadata;
  alt: string;

  tags: string[];

  /**
   * 是否作为 /products 页面旗舰产品展示。
   */
  featured?: boolean;

  /**
   * 旗舰卡第二张图。
   */
  featuredImage2?: ImageMetadata;
}

/* ============================================================
   PRODUCTS
   ============================================================ */

export const products: Product[] = [
  /* ------------------------------------------------------------
     01. Medals
     ------------------------------------------------------------ */

  {
    slug: "medals",
    title: "Medals",

    desc: "For race finishers, award ceremonies and long-service recognition.",

    image: medal01,

    featuredImage2: medal02,

    alt: "Custom medal with detailed 3D relief and premium finish",

    tags: ["Custom Shape", "Custom Finish"],

    featured: true,
  },

  /* ------------------------------------------------------------
     02. Challenge Coins
     ------------------------------------------------------------ */

  {
    slug: "challenge-coins",
    title: "Challenge Coins",

    desc: "For units, teams and organizations marking service and milestones.",

    image: challengeCoin01,

    featuredImage2: challengeCoin02,

    alt: "Custom challenge coins",

    tags: ["3D Relief", "Diamond Cut", "Dual Plating"],

    featured: true,
  },

  /* ------------------------------------------------------------
     03. Keychains
     ------------------------------------------------------------ */

  {
    slug: "keychains",
    title: "Keychains",

    desc: "For everyday carry, branded giveaways and retail merchandise.",

    image: keychain01,

    alt: "Custom metal keychains",

    tags: ["Custom Shape", "Bulk Pricing"],
  },

  /* ------------------------------------------------------------
     04. Enamel Pins
     ------------------------------------------------------------ */

  {
    slug: "enamel-pins",
    title: "Enamel Pins",

    desc: "For brand campaigns, employee recognition and collectible series.",

    image: enamelPin01,

    alt: "Custom enamel pins",

    tags: ["Soft / Hard Enamel", "Custom Backing"],
  },

  /* ------------------------------------------------------------
     05. Fridge Magnets
     ------------------------------------------------------------ */

  {
    slug: "fridge-magnets",
    title: "Fridge Magnets",

    desc: "For souvenir programs, retail shelves and everyday brand exposure.",

    image: fridgeMagnet01,

    alt: "Custom fridge magnets",

    tags: ["Full Color", "Custom Shape", "Metal / PVC"],
  },

  /* ------------------------------------------------------------
     06. Bottle Openers
     ------------------------------------------------------------ */

  {
    slug: "bottle-openers",
    title: "Bottle Openers",

    desc: "For barware gifts, event favors and hospitality branding.",

    image: bottleOpener01,

    alt: "Custom bottle openers",

    tags: ["Die-struck", "Logo Engraved", "Custom Handle"],
  },

  /* ------------------------------------------------------------
     07. Button Badges
     ------------------------------------------------------------ */

  {
    slug: "button-badges",
    title: "Button Badges",

    desc: "For campaigns, events and short-run merchandise.",

    image: buttonBadge01,

    alt: "Custom button badges",

    tags: ["Full Color", "Fast Turnaround"],
  },

  /* ------------------------------------------------------------
     08. Cufflinks & Tie Clips
     ------------------------------------------------------------ */

  {
    slug: "cufflinks",
    title: "Cufflinks & Tie Clips",

    desc: "For corporate gifting, formal occasions and executive gifts.",

    image: cufflink01,

    alt: "Custom cufflinks and tie clips",

    tags: ["Premium Finish", "Gift Boxed", "Custom Logo"],
  },
];

export default products;
