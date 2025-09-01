'use client'

import { useState } from 'react'
import AdminPage from '@/pages/AdminPage'
import LoginPage from '@/pages/LoginPage'
import { AppProvider } from '@/contexts/AppContext'

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState<'admin' | 'operator'>('admin')
  const [userData, setUserData] = useState<any>(null)

  const handleLogin = (type: 'admin' | 'operator', data: any) => {
    setUserType(type)
    setUserData(data)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserType('admin')
    setUserData(null)
    localStorage.clear();
  }

  if (!isLoggedIn) {
    return (
      <AppProvider>
        <LoginPage 
          onLogin={handleLogin}
        />
      </AppProvider>
    )
  }

  return (
    <AppProvider>
      <AdminPage 
        userType={userType}
        userData={userData}
        onLogout={handleLogout}
      />
    </AppProvider>
  )
}