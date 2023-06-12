import { PostCard } from '@/components'
import Container from '@/components/Container'
import { mockPosts } from '@/helpers/mocks'
import React from 'react'

function BlogPage() {
  return (
    <main className='grow'>
      <Container>
        <div className=' pt-8  md:pt-14'>
          <h1 className='text-title text-dark mb-5 md:mb-14'>Blog</h1>
          <div className='grid grid-cols-1 gap-8 '>
            {mockPosts.slice(0, 10).map((item, idx) => (
              <PostCard className='p-0 pb-5 border-b ' key={idx} post={item} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  )
}

export default BlogPage
