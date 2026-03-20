// Utility functions for blog posts
import type { CollectionEntry } from 'astro:content'

/**
 * Calculate read time based on word count
 * Average reading speed: 200 words per minute
 */
export function calculateReadTime(text: string | undefined): number {
  if (!text) return 1
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  const readTime = Math.ceil(words / wordsPerMinute)

  return readTime
}

/**
 * Normalize category string (e.g., "fintech" -> "Fintech", "FinTech" -> "Fintech")
 * Ensures consistent categorization regardless of frontmatter case.
 */
export function normalizeCategory(category: string | undefined): string {
  if (!category) return 'General'
  const trimmed = category.trim()
  if (!trimmed) return 'General'

  return trimmed.split(/\s+/).map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ')
}


/**
 * Get related posts based on category
 */
export function getRelatedPosts(
  posts: any[],
  currentSlug: string,
  currentCategory: string,
  limit: number = 3
): any[] {
  const normalizedCurrent = normalizeCategory(currentCategory)

  // First try to get posts from same category
  const sameCategoryPosts = posts.filter(post => normalizeCategory(post.data.category) === normalizedCurrent && post.id !== currentSlug)

  // If we have enough posts from same category, use them
  if (sameCategoryPosts.length >= limit) {
    return sameCategoryPosts.slice(0, limit)
  }

  // If not enough posts from same category, fill with other posts
  const otherPosts = posts.filter(post => normalizeCategory(post.data.category) !== normalizedCurrent && post.id !== currentSlug)

  return [...sameCategoryPosts, ...otherPosts].slice(0, limit)
}

/**
 * Get navigation links for previous and next posts
 */
export function getPostNavigation(
  posts: any[],
  currentSlug: string
): { previous: any | null; next: any | null } {
  // Sort posts by pubDate (newest first)
  const sortedPosts = [...posts].sort((a, b) => a.data.id - b.data.id)
  const currentIndex = sortedPosts.findIndex(post => post.id === currentSlug)

  if (currentIndex === -1) {
    return { previous: null, next: null }
  }

  const previous = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null
  const next = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null

  return { previous, next }
}

/**
 * Format date to readable string
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
