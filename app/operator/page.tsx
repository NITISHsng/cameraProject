'use client'

import { useState, useEffect } from 'react'
import { AppProvider } from '@/contexts/AppContext'
import OperatorPage from '@/pages/OperatorPage'
import LoginPage from '@/pages/LoginPage'

export default function Operator() {
  const [darkMode, setDarkMode] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState<'admin' | 'operator'>('operator')
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

  const handleLogin = (type: 'admin' | 'operator', data: any) => {
    setUserType(type)
    setUserData(data)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserType('operator')
    setUserData(null)
    localStorage.clear();
  }

  if (!isLoggedIn) {
    return (
      <AppProvider>
        <LoginPage 
          onLogin={handleLogin}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </AppProvider>
    )
  }

  return (
    <AppProvider>
      <OperatorPage 
        userType={userType}
        userData={userData}
        onLogout={handleLogout}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </AppProvider>
  )
}