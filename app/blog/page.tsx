import React from 'react'
import { Metadata } from 'next'

import { PostCard, Container } from '@/components'
import { aboutMe, aboutMeShort } from '@/helpers/me'
import { getAllMyPosts } from '@/services/blog'

export const metadata: Metadata = {
  title: `Blog`,
  description: `
    ${aboutMeShort.es}
  `,
}
async function BlogPage() {
  const posts = await getAllMyPosts()
  return (
    <main className='grow'>
      <Container>
        <div className='pt-8'>
          <h1 className='dark:text-primary text-title text-dark mb-10'>Blog</h1>
          <div className='grid grid-cols-1 gap-8 '>
            {posts.map((item, idx) => (
              <PostCard className='p-0 pb-5 border-b ' key={idx} post={item} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  )
}

export default BlogPage
