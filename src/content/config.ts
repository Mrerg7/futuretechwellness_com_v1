import { defineCollection, z } from 'astro:content';

const pillarsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string().optional(), // emoji or heroicon name for simplicity
    summary: z.string(),
    order: z.number().default(1),
  }),
});

export const collections = {
  pillars: pillarsCollection,
};
