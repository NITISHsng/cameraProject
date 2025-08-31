'use client'

import { AppProvider } from '@/contexts/AppContext'
import Gallery from '@/pages/GalleryPage'

export default function Hiring() {
  return (
    <AppProvider>
      <Gallery />
    </AppProvider>
  )
}