import React from 'react'

type Post = {
  title: string
  description: string
  slug: string
  date: string
  tags: string[]
}

interface PostCardProps {
  post: Post
  className?: string
}

// const MAX_TITLE_LENGTH = 82
const MAX_TAGS_LENGTH = 3
// const MAX_DESCRIPTION_LENGTH = 200

function PostCard({ post, className = '' }: PostCardProps) {
  return (
    <article
      className={`w-full flex flex-col gap-4 p-6 pr-5 rounded bg-white ${className}`}
    >
      <header className='max-h-20 overflow-y-hidden  text-ellipsis line-clamp-2	'>
        <h3
          title={post.title}
          className=' text-ellipsis text-[1.625rem] font-bold text-dark leading-10'
        >
          {post.title}
        </h3>
      </header>
      <div className='text-dark text-lg	leading-7 flex gap-5'>
        <span>{post.date}</span>
        {'|'}
        <span title={post.tags.join(', ')} className='truncate'>
          {post.tags?.slice(0, MAX_TAGS_LENGTH).join(', ')}
        </span>
      </div>
      <main className=''>
        <p
          title={post.description}
          className=' line-clamp-5 text-base leading-6'
        >
          {post.description}
        </p>
      </main>
    </article>
  )
}

export default PostCard
