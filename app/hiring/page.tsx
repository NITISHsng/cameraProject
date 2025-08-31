'use client'

import { AppProvider } from '@/contexts/AppContext'
import HiringPage from '@/pages/HiringPage'

export default function Hiring() {
  return (
    <AppProvider>
      <HiringPage />
    </AppProvider>
  )
}
