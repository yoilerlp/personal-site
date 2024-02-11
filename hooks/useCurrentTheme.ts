'use client'
import { useContext } from 'react'
import { ThemeContext } from '@/components/ThemeProvider'

export default function useCurrentTheme() {
  const themeContext = useContext(ThemeContext)
  if (themeContext === undefined) {
    throw new Error(
      'useCurrentTheme must be used within a ThemeContextProvider'
    )
  }

  return themeContext
}
