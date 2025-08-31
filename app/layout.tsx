import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
import { Toaster } from 'react-hot-toast'
import { AppProvider } from '@/contexts/AppContext'
export const metadata: Metadata = {
  title: 'AsanCapture - Professional Video Production',
  description: 'Professional video production services for weddings, events, and commercial projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" />
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}