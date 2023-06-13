import React from 'react'
import { PostCard, Container } from '@/components'
import { getAllPosts } from '@/helpers/blog'

async function BlogPage() {
  const posts  = await getAllPosts()
  return (
    <main className='grow'>
      <Container>
        <div className=' pt-8  md:pt-14'>
          <h1 className='text-title text-dark mb-5 md:mb-14'>Blog</h1>
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
