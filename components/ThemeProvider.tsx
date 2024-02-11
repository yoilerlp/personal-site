'use client'

import React, { useEffect, useLayoutEffect } from 'react'

type ThemeContext = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  appIsReady: boolean
  isDark: boolean
}

const THEME_LOCAL_STORAGE_KEY = 'theme'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light'

  if (!userHasThemePreference()) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      console.log('entro aca')
      return 'dark'
    }
    return 'light'
  }

  const persistedTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY)
  if (persistedTheme) {
    return persistedTheme as ThemeContext['theme']
  }

  return 'light'
}

const userHasThemePreference = () => {
  return localStorage.getItem(THEME_LOCAL_STORAGE_KEY) !== null
}

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
)

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isReady, setIsReady] = React.useState(false)

  const [theme, setTheme] = React.useState<ThemeContext['theme'] | undefined>(
    typeof window !== 'undefined' ? getInitialTheme() : undefined
  )

  useLayoutEffect(() => {
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

  useEffect(() => {
    setIsReady(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme)
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: theme!,
        toggleTheme,
        appIsReady: isReady,
        isDark: theme === 'dark' && isReady,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
