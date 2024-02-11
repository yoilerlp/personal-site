'use client'
import React from 'react'

import SocialMediaLinksComponent from './SocialMediaLinks'

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
