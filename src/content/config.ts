import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().optional(),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    forks: z.number().optional(),
    contributions: z.number().optional(),
    stars: z.number().optional(),
  }),
});

const tilsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    github: z.string().optional(),
    date: z.date(),
    author: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
  tils: tilsCollection,
};
