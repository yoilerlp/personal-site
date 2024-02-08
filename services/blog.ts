import { cache } from 'react'
import { getAllPosts } from '@/helpers/blog'

export const getAllMyPosts = cache(async () => {
  const posts = await getAllPosts()
  return posts
})
