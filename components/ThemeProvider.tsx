'use client'

import React, { useEffect, useLayoutEffect } from 'react'

type ThemeContext = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const THEME_LOCAL_STORAGE_KEY = 'theme'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark'

  if (!userHasThemePreference()) {
    return 'dark'
  }

  const persistedTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY)
  if (persistedTheme) {
    return persistedTheme as ThemeContext['theme']
  }

  return 'dark'
}

const userHasThemePreference = () => {
  if (typeof window === 'undefined') return false
  return !!localStorage.getItem(THEME_LOCAL_STORAGE_KEY)
}

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
)

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] =
    React.useState<ThemeContext['theme']>(getInitialTheme)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark')
    }
  }, [theme])

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return

    if (userHasThemePreference()) return

    const media = window.matchMedia('(prefers-color-scheme: dark)')

    let isDark = media.matches
    const mediaListener = (e: any) => {
      isDark = e.matches
      setTheme(isDark ? 'dark' : 'light')
    }
    media.addEventListener('change', mediaListener)

    setTheme(isDark ? 'dark' : 'light')

    return () => {
      media.removeEventListener('change', mediaListener)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme)
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
