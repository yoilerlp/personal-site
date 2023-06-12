'use client'

import React from 'react'
import { IconProps } from '@/components/Icon'

export function GithubIcon(props: IconProps) {
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
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M11.9992 0.249878C5.373 0.249878 0 5.64369 0 12.2981C0 17.6201 3.438 22.1356 8.20725 23.729C8.80725 23.8415 9.02625 23.4676 9.02625 23.1485L9.00975 21.0997C5.6715 21.8278 4.96725 19.4846 4.96725 19.4846C4.422 18.0933 3.63525 17.7226 3.63525 17.7226C2.5455 16.9749 3.71775 16.9901 3.71775 16.9901C4.9215 17.0752 5.55525 18.2317 5.55525 18.2317C6.62625 20.0729 8.364 19.5412 9.048 19.2324C9.15675 18.4539 9.46725 17.9229 9.81 17.6199C7.14525 17.3158 4.344 16.2826 4.344 11.6662C4.344 10.3507 4.81125 9.27557 5.57925 8.43294C5.4555 8.12807 5.04375 6.90369 5.69625 5.24488C5.69625 5.24488 6.70425 4.92107 8.99625 6.47975C9.954 6.21238 10.98 6.07925 12.0007 6.07382C13.02 6.07907 14.0468 6.21256 15.0052 6.47975C17.2957 4.92107 18.3015 5.24488 18.3015 5.24488C18.9563 6.90369 18.5445 8.12807 18.4207 8.43294C19.1903 9.27557 19.6545 10.3507 19.6545 11.6662C19.6545 16.2937 16.8487 17.3128 14.1757 17.6109C14.6062 17.9829 14.9902 18.7177 14.9902 19.8421L14.9752 23.147C14.9752 23.4695 15.1912 23.8445 15.8002 23.726C20.565 22.1313 24 17.6188 24 12.2981C24 5.64369 18.627 0.249878 11.9992 0.249878Z'

      />
    </svg>
  )
}