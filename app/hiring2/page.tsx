'use client'

import { AppProvider } from '@/contexts/AppContext'
import Abc from '@/pages/Abc'

export default function Hiring() {
  return (
    <AppProvider>
      <Abc />
    </AppProvider>
  )
}