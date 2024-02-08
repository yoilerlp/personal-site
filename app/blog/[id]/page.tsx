import React from 'react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { Container, BlogPostHeader } from '@/components'

import { getAllMyPosts } from '@/services/blog'

interface Props {
  params: {
    id: string
  }
}
export const dynamicParams = false

const getPageContent = async (id: string) => {
  const post = (await getAllMyPosts()).find((post) => post.id === id)
  if (!post) {
    notFound()
  }
  return post
}

export const generateMetadata = async ({
  params,
}: {
  params: { id: string }
}) => {
  const authorName = 'Yoyler Mosquera Córdoba'
  const defultBlogPoster = 'https://i.imgur.com/sZSylTh.jpg'
  const post = await getPageContent(params.id)
  post.poster = post.poster || defultBlogPoster
  const meta: Metadata = {
    title: `${post.title}`,
    description: post.description,
    keywords: post.tags,
    creator: authorName,
    openGraph: {
      type: 'article',
      authors: authorName,
      description: post.description,
      tags: post.tags,
      publishedTime: post.date,
      siteName: authorName,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.id}`,
      images: [
        {
          url: post.poster || '',
          alt: `Poster ${post.title}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title: post.title,
      description: post.description,
      card: 'summary_large_image',
      site: `@yoiler_cordoba`,
      images: [
        {
          url: post.poster,
          width: 1200,
          height: 630,
          alt: `Poster ${post.title}`,
        },
      ],
    },
    authors: {
      name: authorName,
    },
  }
  return meta
}

export async function generateStaticParams() {
  const posts = await getAllMyPosts()

  return posts.map((post) => ({
    id: post.id,
  }))
}

const PostPage = async ({ params }: Props) => {
  const { id } = params

  const post = await getPageContent(id)
  return (
    <main className='grow'>
      <Container>
        <article className='min-h-[800px] blog-post-wrapper'>
          <BlogPostHeader post={post} />
          <div className='mt-4 p-5'>
            <section className=' flex flex-col items-center'>
              <div className='prose dark:prose-invert w-full max-w-7xl lg:prose-xl'>
                {post.body}
              </div>
            </section>
          </div>
        </article>
      </Container>
    </main>
  )
}

export default PostPage
