'use client'

import React from 'react'
import Icon from './Icon'

function Footer() {
  return (
    <footer className='w-full mt-20 h-44  flex flex-col gap-6 justify-center items-center'>
      <div className='flex gap-9 justify-center items-center '>
        <Icon iconName='FacebookIcon' size={30} />
        <Icon iconName='InstagramIcon' size={30} />
        <Icon iconName='TwitterIcon' size={30} />
        <Icon className='cursor-pointer' iconName='LinkedinIcon' size={30} />
      </div>
      <span>Copyright ©2023 All rights reserved Yoyler Mosquera Cordoba</span>
    </footer>
  )
}

export default Footer
