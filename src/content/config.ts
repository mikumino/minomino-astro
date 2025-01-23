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
      description: z.string().nullish(),
      image: image(),
      imageAlt: z.string(),
      url: z.string().nullish(),
      usage: z.enum(["Currently Use", "Used", "Not Used"]).nullish(),
      recommended: z.boolean(),
      category: z.string().nullish(),
      tags: z.array(z.string()).nullish(),
    }),
});

export const collections = {
  "personal-guides": guidesCollection,
  blog: postsCollection,
  resources: resourcesCollection,
};
