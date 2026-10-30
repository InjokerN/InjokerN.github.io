/*
  FILE : src/data/news-list.ts
  ROLE : 新闻列表数据源 — 供 /news 列表页与各详情页的"相关文章"使用
         新增一篇新闻时，在 newsList 数组顶部加一条
*/

import type { ImageMetadata } from "astro";

/* 封面图 */
import summerCover from "../assets/news/summer-2026.jpg";
import cantonFairCover from "../assets/news/china-canton-fair-2025.jpg";
import tiCover from "../assets/news/metal-craft-guide-cover.jpg";

export interface NewsItem {
  slug: string;                                  /* 用于 URL 与详情页文件名 */
  date: string;                                  /* ISO 格式日期 */
  title: string;
  excerpt: string;
  cover: ImageMetadata;
  alt: string;
}

/* 原始列表：建议按日期倒序排列（最新在上） */
export const newsList: NewsItem[] = [
  {
    slug: "dota2-ti-2026",
    date: "2026-10-05",
    title: "The International 2026: Answering 4,000 Requests From the Dota 2 Community",
    excerpt:
      "During The International, our inbox filled with player badges, team pins and hero enamel pieces. Here is how we handled the community rush without moving a single deadline.",
    cover: tiCover,
    alt: "Custom Dota 2 community badges and hero enamel pins in production",
  },
  {
    slug: "summer-2026",
    date: "2026-08-07",
    title: "Summer of 2026: How a Custom Badge Became a Fan's Ticket to the Game",
    excerpt:
      "From enamel pins to PVC keychains, we crafted over 50,000 pieces for fans worldwide during the tournament.",
    cover: summerCover,
    alt: "Custom fan badges and coins for summer tournament",
  },
  {
    slug: "china-canton-fair-2025",
    date: "2025-10-15",
    title: "Canton Fair 2025: We met 200+ buyers, and we're still buzzing",
    excerpt:
      "This October, we packed up our best samples and flew to Guangzhou for the 138th Canton Fair.",
    cover: cantonFairCover,
    alt: "Our booth at the 138th Canton Fair in Guangzhou",
  },
];

/* 按日期倒序排序后的副本 */
export const sortedNewsList: NewsItem[] = [...newsList].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

/* 日期格式化 */
export function formatNewsDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(new Date(date));
}

/* ISO 时间戳（给 <time datetime> 用） */
export function toNewsISO(date: string): string {
  return new Date(date).toISOString();
}

/* 相关文章：排除当前，取最近 N 篇 */
export function getRelatedNews(currentSlug: string, count = 2): NewsItem[] {
  return sortedNewsList
    .filter((item) => item.slug !== currentSlug)
    .slice(0, count);
}