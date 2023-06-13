import React from 'react'
import { Metadata } from 'next'


import { Container } from '@/components'
import { getAllPosts, getPostById } from '@/helpers/blog'

interface Props {
  params: {
    id: string
  }
}
export const dynamicParams = false

const getPageContent = async (id: string) => {
  const post = await getPostById(id)
  return post
}

export const generateMetadata = async ({ params }: { params: { id: string } }) => {
  const post = await getPageContent(params.id)
  const meta: Metadata = {
    title: post.title,
    description: post.description,
    authors: {
      name: 'Yoyler',
    },
  }
  return meta
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

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
        <article className='unreset prose'>{post.body}</article>
      </Container>
    </main>

  )
}

export default PostPage
