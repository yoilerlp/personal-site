/* eslint-disable @next/next/no-img-element */
import React, { ComponentPropsWithoutRef } from 'react'
import { MDXComponents } from 'mdx/types'

function Heading({
  level,
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  level: 1 | 2 | 3 | 4 | 5 | 6
}) {
  const Tag = `h${level}`
  return React.createElement(
    Tag,
    props,
    <a href={`#${props.id}`}>{children}</a>
  )
}

const renderHeadingComponent = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  const component = (props: ComponentPropsWithoutRef<'h1'>) => {
    return <Heading level={level} {...props} />
  }
  return component
}

export const components: MDXComponents = {
  h1: renderHeadingComponent(1),
  h2: renderHeadingComponent(2),
  h3: renderHeadingComponent(3),
  h4: renderHeadingComponent(4),
  h5: renderHeadingComponent(5),
  h6: renderHeadingComponent(6),
  a: (props: ComponentPropsWithoutRef<'a'>) => {
    const isInternalLink = props?.href?.startsWith('#')
    const extraProps = !isInternalLink
      ? ({
          target: '_blank',
          rel: 'noopener',
        } as typeof props)
      : {}
    return <a {...props} {...extraProps} />
  },
  img: (props: ComponentPropsWithoutRef<'img'>) => {
    return (
      <img {...props} alt={props?.alt || 'image no fount'} loading='lazy' />
    )
  },
}
