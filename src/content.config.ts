import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blogSchema = z.object({
  id: z.number().optional(),
  slug: z.string().optional(),
  title: z.string(),
  description: z.string(),
  imageUrl: z.string().optional(),
  imageAlt: z.string().optional(),
  pubDate: z.string(),
  author: z.string().default('Lakshya Tangri'),
  avatarUrl: z.string().optional(),
  category: z.string().default('General'),
  readTime: z.number().optional(),
  featured: z.boolean().default(false)
})

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: blogSchema
})

const blogHtml = defineCollection({
  loader: glob({ pattern: '**/*.html', base: './src/content/blog' }),
  schema: blogSchema
})

export const collections = { blog, blogHtml }
