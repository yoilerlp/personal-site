'use client'
import Link from 'next/link'

import { SocialMediaLinksItemsDetails } from '@/helpers/socialMediaLinks'
import useCurrentTheme from '@/hooks/useCurrentTheme'
import Icon from './Icon'

interface SocialMediaLinksComponentProps {
  className?: string
}

export default function SocialMediaLinksComponent({
  className = '',
}: SocialMediaLinksComponentProps) {
  const { isDark } = useCurrentTheme()
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
