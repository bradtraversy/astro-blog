import { defineCollection, getCollection } from 'astro:content';
const blogCollection = defineCollection({});

export const collections = {
  blog: blogCollection,
};
