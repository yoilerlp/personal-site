'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from './Container'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/my-work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
]

function Header() {
  const pathName = usePathname()
  return (
    <header className='h-12 flex justify-center items-center py-7 px-3 lg:px-14  lg:justify-end'>
      <Container>
        <ul className='flex gap-9'>
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
      </Container>
    </header>
  )
}

export default Header
