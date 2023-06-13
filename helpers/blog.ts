import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

import { IBlogPost } from '@/interfaces/post'

const postsFolder = path.join(process.cwd(), 'blog')

export const getAllPosts = async () => {
  const filesName = fs.readdirSync(postsFolder)

  let posts = []

  for (let post of filesName) {
    const postData = await getPostById(post)
    posts.push(postData)
  }

  const sortedPost = posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return sortedPost
}

export const getPostById = async (id: string) => {
  const realSlug = id.replace(/\.md$/, '')

  const filePath = path.join(postsFolder, `${realSlug}.md`)

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true,
    },
  })

  const tags: string[] = (frontmatter?.tags as any)?.split(',') || []
  const postData: IBlogPost = {
    id: realSlug,
    title: (frontmatter?.title as any) || '',
    description: (frontmatter?.description as any) || '',
    date: (frontmatter?.date as any) || '',
    tags,
    body: content,
  }

  return postData
}
