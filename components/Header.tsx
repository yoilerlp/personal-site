'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from './Container'
import useCurrentTheme from '@/hooks/useCurrentTheme'
import ThemeToggleButton from './ThemeToggleButton'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/coding', label: 'Coding' },
  { href: '/blog', label: 'Blog' },
]

function Header() {
  const pathName = usePathname()
  const themeContext = useCurrentTheme()
  return (
    <header className='h-12 flex justify-center items-center py-7 px-3 lg:px-14  lg:justify-end'>
      <Container>
        <ul className='flex gap-9 items-center'>
          {links.map((link) => {
            const active =
              link.href === '/'
                ? pathName === link.href
                : pathName?.startsWith(link.href)
            return (
              <li
                className={`dark:text-blueLight dark:hover:text-primary text-xl font-medium ${
                  active && 'text-primary dark:text-primary'
                }`}
                key={link.href}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            )
          })}
          <ThemeToggleButton />
        </ul>
      </Container>
    </header>
  )
}

export default Header
