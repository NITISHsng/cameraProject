'use client'

import { AppProvider } from '@/contexts/AppContext'
import HomePage from '@/pages/HomePage'

export default function Home() {
  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  )
}