'use client'

import Footer from './Footer'
import Header from './Header'
import ThemeProvider from './ThemeProvider'

export default function ContentWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}
