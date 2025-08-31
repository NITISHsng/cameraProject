'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AppContextType {
  darkMode: boolean
  toggleDarkMode: () => void
  currentPage: string
  setCurrentPage: (page: string) => void
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  isLoggedIn: boolean
  setIsLoggedIn: (loggedIn: boolean) => void
  userType: 'admin' | 'operator'
  setUserType: (type: 'admin' | 'operator') => void
  userData: any
  setUserData: (data: any) => void
  navigateToPage: (page: string) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState<'admin' | 'operator'>('admin')
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const navigateToPage = (page: string) => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
    
    // Use window.location for navigation to avoid router issues
    switch (page) {
      case 'home':
        if (typeof window !== 'undefined' && window.location.pathname !== '/') {
          window.location.href = '/'
        }
        break
      case 'admin':
        if (typeof window !== 'undefined' && window.location.pathname !== '/admin') {
          window.location.href = '/admin'
        }
        break
      case 'operator':
        if (typeof window !== 'undefined' && window.location.pathname !== '/operator') {
          window.location.href = '/operator'
        }
        break
      case 'hiring':
        if (typeof window !== 'undefined' && window.location.pathname !== '/hiring') {
          window.location.href = '/hiring'
        }
        break
      case 'join-us':
        if (typeof window !== 'undefined' && window.location.pathname !== '/join-us') {
          window.location.href = '/join-us'
        }
        break
      default:
        if (typeof window !== 'undefined' && window.location.pathname !== '/') {
          window.location.href = '/'
        }
    }
  }

  const value = {
    darkMode,
    toggleDarkMode,
    currentPage,
    setCurrentPage,
    mobileMenuOpen,
    setMobileMenuOpen,
    isLoggedIn,
    setIsLoggedIn,
    userType,
    setUserType,
    userData,
    setUserData,
    navigateToPage
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}