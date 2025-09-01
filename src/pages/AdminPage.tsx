'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import admin components with SSR disabled
const Sidebar = dynamic(() => import('@/components/admin/Sidebar'), { ssr: false })
const Header = dynamic(() => import('@/components/admin/Header'), { ssr: false })
const Dashboard = dynamic(() => import('@/components/admin/Dashboard'), { ssr: false })
const Bookings = dynamic(() => import('@/components/admin/Bookings'), { ssr: false })
const TeamManagement = dynamic(() => import('@/components/admin/TeamManagement'), { ssr: false })
const Analysis = dynamic(() => import('@/components/admin/Analysis'), { ssr: false })
const EquipmentPartner = dynamic(() => import('@/components/admin/EquipmentPartner'), { ssr: false })
const Operator = dynamic(() => import('@/components/admin/Operator'), { ssr: false })
const CreateOperator = dynamic(() => import('@/components/admin/CreateOperator'), { ssr: false })

interface AdminPageProps {
  userType: 'admin' | 'operator'
  userData: any
  onLogout: () => void
}

const AdminPage: React.FC<AdminPageProps> = ({ 
  userType, 
  userData, 
  onLogout
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeSection, setActiveSection] = useState('dashboard')
  const [isClient, setIsClient] = useState(false)
  
  // This effect runs only on the client after hydration
  useEffect(() => {
    setIsClient(true)
  }, [])

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />
      case 'bookings':
        return <Bookings />
      case 'team':
        return <TeamManagement />
      case 'analysis':
        return <Analysis />
      case 'equipment':
        return <EquipmentPartner />
      case 'operator':
        return userType === 'admin' ? <Operator /> : <Dashboard />
      case 'createOperator':
        return userType === 'admin' ? <CreateOperator /> : <Dashboard />
      default:
        return <Dashboard />
    }
  }

  // Show loading state or nothing until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex">
        {/* Fixed Sidebar */}
        <Sidebar 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          userType={userType}
        />

        {/* Main Content */}
        <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
          {/* Header */}
          <Header 
            userData={userData}
            userType={userType}
            onLogout={onLogout}
          />

          {/* Content */}
          <main className="flex-1 p-6 overflow-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style jsx>{`
              main::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  )
}

export default AdminPage