import { Heebo } from 'next/font/google'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import '@/styles/globals.scss'

const heebo = Heebo({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-heebo',
})

export const metadata = {
  title: 'Personal page Yoyler Mosquera Cordoba',
  description: 'Personal page Yoyler Mosquera Cordoba',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${heebo.className} flex flex-col h-full min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
