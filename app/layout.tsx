import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.JS Learning App',
  description: 'Created by Bipin Kumar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        <Navbar />
        <main className="p-5">
          {children}
        </main>
      </body>
    </html>
  )
}
