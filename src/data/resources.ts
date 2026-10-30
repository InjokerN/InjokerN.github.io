/**
 * 资源页数据：下载资料 + 工艺讲解
 *
 * 图片统一放在 src/assets/resources/
 */

import type { ImageMetadata } from "astro";

const covers = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/resources/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

function getCover(name: string): ImageMetadata {
  const key = Object.keys(covers).find((k) => k.includes(`/${name}.`));
  if (!key) {
    throw new Error(
      `Cover image "${name}" not found. Expected at src/assets/resources/${name}.jpg`
    );
  }
  return covers[key]!.default;
}

/* ---------- 下载资料 ---------- */

export interface DownloadItem {
  slug: string;
  title: string;
  desc: string;
  file: string;
  cover: ImageMetadata;
}

export const downloads: DownloadItem[] = [
  {
    slug: "catalog-full",
    title: "Full Product Catalog",
    desc: "Complete overview of all metal craft categories.",
    file: "/download/catalog-full.pdf",
    cover: getCover("catalog-cover"),
  },
  {
    slug: "medals-brochure",
    title: "Medals & Coins Brochure",
    desc: "Detailed spec and finish options for medals and coins.",
    file: "/download/brochure-medals.pdf",
    cover: getCover("medals-cover"),
  },
  {
    slug: "customize-guide",
    title: "Customization Guide",
    desc: "How to prepare your artwork and choose the right craft.",
    file: "/download/custom-guide.pdf",
    cover: getCover("customize-cover"),
  },
];

/* ---------- 工艺内容 ---------- */

/** 工艺总览长文（全站唯一，作为 START HERE 入口） */
export interface CraftGuideItem {
  slug: string;
  title: string;
  desc: string;
  cover: ImageMetadata;
  href: string;
}

export const craftGuides: CraftGuideItem[] = [
  {
    slug: "metal-craft-guide",
    title: "Metal Crafts & Gifts Manufacturing Guide",
    desc: "Soft vs hard enamel, mold costs, color management, plating wear and attachment standards — the full manufacturing guide in one read.",
    cover: getCover("craft-cover"),
    href: "/resources/metal-craft-guide",
  },
];

/* ---------- 指南目录（未来 6 个集群页） ---------- */

/**
 * 决策阶段：
 *   choose     — 选择工艺/表面
 *   verify     — 核验成本与品质
 *   durability — 检查功能与耐久
 */
export type CraftPhase = "choose" | "verify" | "durability";

export interface GuideOutlineItem {
  slug: string;
  number: string;
  title: string;
  desc: string;
  phase: CraftPhase;
  /**
   * 当前链接目标。
   * 拆分完成前：指向支柱页对应章节锚点（#guide-01 ~ #guide-06）。
   * 拆分完成后：改为独立集群页 URL，页面代码无需改动。
   */
  href: string;
}

export const guideOutline: GuideOutlineItem[] = [
  {
    slug: "soft-vs-hard-enamel",
    number: "01",
    title: "Soft Enamel vs. Hard Enamel",
    desc: "Surface character, durability, and cost positioning — how to choose between the two.",
    phase: "choose",
    href: "/resources/metal-craft-guide/soft-vs-hard-enamel",
  },
  {
    slug: "mold-fee",
    number: "02",
    title: "Understanding Mold Fees",
    desc: "Why custom tooling is charged separately, and how molds are stored for repeat orders.",
    phase: "verify",
    href: "/resources/metal-craft-guide/metal-forming-mold-fees",
  },
  {
    slug: "color-management",
    number: "03",
    title: "Color Management",
    desc: "How color is specified, matched and checked so it stays consistent from the first sample to the last carton.",
    phase: "verify",
    href: "/resources/metal-craft-guide/color-matching-artwork",
  },
  {
    slug: "plating-durability",
    number: "04",
    title: "Plating & Durability",
    desc: "Finish categories, wear mechanisms, and how to slow plating thinning in daily use.",
    phase: "durability",
    href: "/resources/metal-craft-guide/plating-durability",
  },
  {
    slug: "badge-attachments",
    number: "05",
    title: "Badge Attachments",
    desc: "Butterfly clutch, rubber clutch, flat locking clutch, and magnetic backing — matched to fabric and use.",
    phase: "durability",
    href: "/resources/metal-craft-guide/attachments-packaging",
  },
  {
    slug: "pin-stem-security",
    number: "06",
    title: "Pin Stem Security",
    desc: "Brazing and die-cast fixation methods, plus the pull and torque tests behind them.",
    phase: "durability",
    href: "/resources/metal-craft-guide/quality-control-tolerances",
  },
];