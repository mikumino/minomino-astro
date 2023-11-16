import { z, defineCollection } from 'astro:content';

const guidesCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        image: image(),
        imageAlt: z.string()
    }),
});

const postsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        image: image(),
        imageAlt: z.string()
    }),
});

export const collections = {
    'personal-guides': guidesCollection,
    'blog': postsCollection
};