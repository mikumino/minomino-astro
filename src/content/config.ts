import { z, defineCollection } from "astro:content";

const guidesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      imageAlt: z.string(),
    }),
});

const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      image: image(),
      imageAlt: z.string(),
    }),
});

const resourcesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      image: image(),
      imageAlt: z.string(),
      url: z.string().optional(),
      inUse: z.boolean().optional(),
      recommended: z.boolean().optional(),
      category: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
  "personal-guides": guidesCollection,
  blog: postsCollection,
  resources: resourcesCollection,
};
