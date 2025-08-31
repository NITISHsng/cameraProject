'use client'

import { AppProvider } from '@/contexts/AppContext'
import JoinUsPage from '@/pages/JoinUsPage'

export default function JoinUs() {
  return (
    <AppProvider>
      <JoinUsPage />
    </AppProvider>
  )
}