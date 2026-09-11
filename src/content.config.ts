import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const pageContentEs = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/page-content/es" }),
  schema: z.object({
    slug: z.string(),
    pageTitle: z.string(),
    readingButtonText: z.string(),
    crystalButtonText: z.string(),
    bookImage: z.string().nullable().optional(),
    crystalTitle: z.string(),
    crystalSubtitle: z.string(),
    crystalDesc: z.string(),
    experience: z.string(),
  }),
});

const pageContentEn = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/page-content/en" }),
  schema: z.object({
    slug: z.string(),
    pageTitle: z.string(),
    readingButtonText: z.string(),
    crystalButtonText: z.string(),
    bookImage: z.string().nullable().optional(),
    crystalTitle: z.string(),
    crystalSubtitle: z.string(),
    crystalDesc: z.string(),
    experience: z.string(),
  }),
});

export const collections = { pageContentEs, pageContentEn };
