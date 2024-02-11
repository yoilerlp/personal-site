'use client'
import React from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { IBlogPost } from '@/interfaces/post'

interface PostCardProps {
  post: IBlogPost
  className?: string
}

export const MAX_TAGS_LENGTH = 3

function PostCard({ post, className = '' }: PostCardProps) {
  return (
    <article
      className={twMerge(
        ` dark:bg-bgDark w-full flex flex-col gap-4 p-6 pr-5 rounded bg-white ${className}`
      )}
    >
      <header className='overflow-y-hidden text-balance'>
        <h3
          title={post.title}
          className='dark:text-primary hover:underline lg:text-ellipsis text-[1.625rem] font-bold text-dark leading-10'
        >
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
      </header>
      <div className='dark:text-light text-dark text-lg	leading-7 flex gap-5'>
        <span>{post.date}</span>
        {'|'}
        {post?.tags?.slice(0, MAX_TAGS_LENGTH).map((tag, idx) => (
          <span className='truncate' key={idx}>
            {tag}
          </span>
        ))}
        {/* <span title={post?.tags?.join(', ')} className='truncate'>
          {post?.tags?.slice(0, MAX_TAGS_LENGTH).join(', ')}
        </span> */}
      </div>
      <main>
        <p
          title={post.description}
          className='dark:text-white text-dark line-clamp-5 text-base leading-6 text-justify'
        >
          {post.description}
        </p>
      </main>
    </article>
  )
}

export default PostCard
