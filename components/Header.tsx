'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/my-work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

function Header() {
  const pathName = usePathname()
  return (
    <header className='h-12 border-b flex justify-center items-center py-7 px-3 lg:px-14  lg:justify-end'>
      <ul className='flex gap-9 border'>
        {links.map((link) => {
          const active = pathName === link.href
          return (
            <li
              className={`text-xl font-medium ${active && 'text-primary'}`}
              key={link.href}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          )
        })}
      </ul>
    </header>
  )
}

export default Header
