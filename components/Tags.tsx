'use client'

import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import Icon from './Icon'
import { removeDuplicate } from '@/helpers/utils'

export const ProjectCardTags = ({
  tags,
  className = '',
  tagClassName = '',
  activeTags = [],
  showDelete = false,
  withLink = true,
}: {
  tags: string[]
  className?: string
  tagClassName?: string
  activeTags?: string[]
  showDelete?: boolean
  withLink?: boolean
}) => {
  const getTagUrl = (tag: string) => {
    let tagList = removeDuplicate([...activeTags, tag]).join(',')
    if (showDelete && activeTags.includes(tag)) {
      tagList = activeTags.filter((t) => t !== tag).join(',')
    }
    return `/coding?tag=${encodeURIComponent(tagList)}`
  }
  return (
    <ol className={twMerge('flex gap-2', className)}>
      {tags?.map((tag, idx) => (
        <li
          className={twMerge(
            'dark:text-primary flex-shrink-0 p-2 border font-medium text-[12px]  rounded-md border-primary',
            tagClassName
          )}
          key={`tag-${tag}-${idx}`}
        >
          {
            withLink ? (
              <Link
                className='flex items-center gap-1'
                prefetch={false}
                href={getTagUrl(tag)}
              >
                {showDelete && (
                  <Icon iconName={'CrossIcon'} size={14} color={'black'} />
                )}
                {tag}
              </Link>
            ) : (
              <span>
                {showDelete && (
                  <Icon iconName={'CrossIcon'} size={14} color={'black'} />
                )}
                {tag}
              </span>
            )
          }
        </li>
      ))}
    </ol>
  )
}
