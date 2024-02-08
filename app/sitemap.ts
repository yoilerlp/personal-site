import { getAllMyPosts } from '@/services/blog'
import { MetadataRoute } from 'next'

export default async function siteMap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.NEXT_PUBLIC_SITE_URL
  const posts = await getAllMyPosts()
  const postsRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseURL}/blog/${post.id}`,
  }))
  return [
    {
      url: `${baseURL}`,
      priority: 1,
    },
    {
      url: `${baseURL}/about`,
    },
    {
      url: `${baseURL}/coding`,
    },
    {
      url: `${baseURL}/blog`,
    },
    ...postsRoutes,
  ]
}
