import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const hero = defineCollection({
  loader: glob({ pattern: "hero.md", base: "./src/content/landing" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
  }),
});

const cardOfTheDay = defineCollection({
  loader: glob({ pattern: "card-of-the-day.md", base: "./src/content/landing" }),
  schema: z.object({
    day: z.string(),
    month: z.string(),
    cardName: z.string(),
    description: z.string(),
  }),
});

const readings = defineCollection({
  loader: glob({ pattern: "readings.md", base: "./src/content/landing" }),
  schema: z.object({
    readingTitle: z.string(),
    readingButtonText: z.string(),
    crystalTitle: z.string(),
    crystalDate: z.string(),
    crystalCardName: z.string(),
    crystalButtonText: z.string(),
    meaningsTitle: z.string(),
    wheelCardName: z.string(),
    wheelDescription: z.string(),
  }),
});

const siteConfig = defineCollection({
  loader: glob({ pattern: "config.md", base: "./src/content/landing" }),
  schema: z.object({
    siteTitle: z.string(),
    navInfo: z.string(),
    navHoroscope: z.string(),
    navContact: z.string(),
    footerText: z.string(),
  }),
});

export const collections = { hero, cardOfTheDay, readings, siteConfig };
