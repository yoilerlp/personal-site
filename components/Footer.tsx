'use client'
import React from 'react'
import { Icon } from '@/components'
import { SocialMediaLinksItemsDetails } from '@/helpers/socialMediaLinks'
import Link from 'next/link'
import useCurrentTheme from '@/hooks/useCurrentTheme'

interface SocialMediaLinksComponentProps {
  className?: string
}

export const SocialMediaLinksComponent = ({
  className = '',
}: SocialMediaLinksComponentProps) => {
  const { theme } = useCurrentTheme()
  const isDark = theme === 'dark'
  return (
    <div className={`flex justify-center items-center ${className}`}>
      {SocialMediaLinksItemsDetails.map((item, idx) => (
        <Link href={item.link} target='_blank' title={item.link} key={idx}>
          <Icon
            iconName={item.iconName}
            color={isDark ? 'white' : item.brandColor}
            size={30}
          />
        </Link>
      ))}
    </div>
  )
}

function Footer() {
  return (
    <footer className='w-full mt-5 h-44  flex flex-col gap-6 justify-center items-center'>
      <SocialMediaLinksComponent className='gap-9' />
      <span className='dark:text-primary text-center'>
        {/* Copyright ©2023 All rights reserved Yoyler Mosquera Córdoba */}©
        Yoyler Mosquera Córdoba
      </span>
    </footer>
  )
}

export default Footer
