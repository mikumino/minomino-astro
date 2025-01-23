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
      usage: z.enum(["in_use", "used", "not_used"]).optional(),
      recommended: z.boolean(),
      category: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
  "personal-guides": guidesCollection,
  blog: postsCollection,
  resources: resourcesCollection,
};
