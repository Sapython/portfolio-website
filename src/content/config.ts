// Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";

const tags = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    createdDate: z.date(),
    sortOrder: z.number(),
  })
});

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      author: z.string(),
      tags: z.array(reference('tags')),
      featured: z.boolean(),
      social: z.array(z.object({
        icon: z.string(),
        path: z.string(),
      })),
    }),
});


// Export a single `collections` object to register your collection(s)
export const collections = {posts:postsCollection,tags};