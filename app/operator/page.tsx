'use client'

import { useState } from 'react'
import OperatorPage from '@/pages/OperatorPage'
import LoginPage from '@/pages/LoginPage'
import { AppProvider } from '@/contexts/AppContext'

export default function Operator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState<'admin' | 'operator'>('operator')
  const [userData, setUserData] = useState<any>(null)

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
      />
    </AppProvider>
  )
}