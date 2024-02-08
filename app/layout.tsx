import { Heebo } from 'next/font/google'
import type { Metadata } from 'next'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import { aboutMe, aboutMeShort } from '@/helpers/me'
import { tags } from '@/interfaces/post'

import '@/styles/globals.scss'
import ThemeProvider from '@/components/ThemeProvider'

const heebo = Heebo({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-heebo',
})

export const metadata: Metadata = {
  title: {
    default: aboutMe.fullName,
    template: `%s | ${aboutMe.fullName}`,
  },
  description: aboutMeShort.es,
  keywords: [
    'yoyler',
    'mosquera',
    'cordoba',
    'desarrollador',
    'software',
    ...Object.values(tags),
  ],
  creator: 'Yoyler Córdoba',
  openGraph: {
    title: aboutMe.fullName,
    description: aboutMeShort.es,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: aboutMe.fullName,
    images: [
      {
        url: `/me.webp`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: aboutMe.fullName,
    description: aboutMeShort.es,
    creator: '@yoiler_Córdoba',
    images: ['/me.webp'],
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css'
        />
      </head>
      <ThemeProvider>
        <body
          className={`${heebo.className} bg-white dark:bg-bgDark  flex flex-col h-full min-h-screen`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  )
}
