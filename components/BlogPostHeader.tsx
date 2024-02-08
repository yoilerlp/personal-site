'use client'
import React from 'react'
import Image from 'next/image'

import { IBlogPost } from '@/interfaces/post'
import { formatDate } from '@/helpers/utils'
import { ProjectCardTags } from './Tags'

const BlogPostHeader = ({ post }: { post: IBlogPost }) => {
  return (
    <>
      <section className='flex flex-col gap-5 items-center my-9'>
        <h1 className='dark:text-white text-title text-dark text-center '>{post.title}</h1>
        <div className='flex gap-2 items-center '>
          <div className='w-9 h-9 overflow-hidden rounded-[20px]'>
            <Image
              src='/me-small.webp'
              alt='Yoyler Mosquera Córdoba'
              className='object-cover'
              width={36}
              height={36}
            />
          </div>
          <div>
            <h2 className='dark:text-primary text-[1rem] font-bold text-dark'>Yoyler Córdoba</h2>
            <span className='dark:text-light text-[0.875rem]'>{formatDate(post.date)}</span>
          </div>
        </div>
        <ProjectCardTags
          withLink={false}
          className='mt-4 flex-wrap '
          tags={post.tags || []}
        />
      </section>
      {post?.poster ? (
        <div className='relative w-full h-[380px]'>
          <Image
            loading='lazy'
            src={post?.poster}
            alt='Yoyler Mosquera Córdoba'
            className='object-cover object-center'
            fill
          />
        </div>
      ) : null}
    </>
  )
}

export default BlogPostHeader
