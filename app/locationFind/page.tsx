'use client'

import { AppProvider } from '@/contexts/AppContext'
import PincodeLookup from '@/pages/PinToLocation'
export default function JoinUs() {
  return (
    <AppProvider>
      <PincodeLookup />
    </AppProvider>
  )
}