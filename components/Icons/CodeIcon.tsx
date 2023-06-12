'use client'

import React from 'react'
import { IconProps } from '@/components/Icon'

export function CodeIcon(props: IconProps) {
  const { size, color, ...restSVGProps } = props

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_304_89)'>
        <path
          d='M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6V16.6Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_304_89'>
          <rect width={size} height={size} fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
