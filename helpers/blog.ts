import fs from 'fs'
import path from 'path'

import rehypePrettyCode, { Options } from 'rehype-pretty-code'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'

import type { IBlogPost } from '@/interfaces/post'
import { components } from '../components/blogComponents'

const rehypeOptions: Options = {}

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

  const filePath = path.join(postsFolder, `${realSlug}/index.md`)

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [rehypePrettyCode, rehypeOptions],
          [rehypeSlug, {}],
        ],
      },
    },
  })

  const tags: string[] = (frontmatter?.tags as any)?.split(',') || []

  const postData: IBlogPost = {
    id: realSlug,
    title: (frontmatter?.title as string) || '',
    description: (frontmatter?.description as any) || '',
    date: (frontmatter?.date as string) || '',
    poster: (frontmatter?.poster as string) || '',
    tags,
    body: content,
  }

  return postData
}
