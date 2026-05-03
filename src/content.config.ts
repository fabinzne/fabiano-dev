import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().optional(),
  }),
});

// const projectsCollection = defineCollection({
//   loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     github: z.url().optional(),
//     demo: z.url().optional(),
//     forks: z.number().optional(),
//     contributions: z.number().optional(),
//     stars: z.number().optional(),
//   }),
// });

const tils = defineCollection({
  loader: glob({ base: "./src/content/tils", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    github: z.string().optional(),
    date: z.string(),
    author: z.string().optional(),
  }),
});

export const collections = {
  blog,
  // projects: projectsCollection,
  tils,
};
