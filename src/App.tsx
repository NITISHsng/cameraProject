import React, { useState, useEffect } from 'react';
import { AppProvider } from './contexts/AppContext';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import HiringPage from './pages/HiringPage';
import JoinUsPage from './pages/JoinUsPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'admin' | 'operator'>('admin');
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const handleLogin = (type: 'admin' | 'operator', data: any) => {
    setUserType(type);
    setUserData(data);
    setIsLoggedIn(true);
    setCurrentPage('admin');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType('admin');
    setUserData(null);
    setCurrentPage('home');
    localStorage.clear();
  };

  // Show login page for admin access
  if (currentPage === 'admin' && !isLoggedIn) {
    return (
      <AppProvider>
        <LoginPage 
          onLogin={handleLogin}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </AppProvider>
    );
  }

  if (currentPage === 'admin' && isLoggedIn) {
    return (
      <AppProvider>
        <AdminPage 
          userType={userType}
          userData={userData}
          onLogout={handleLogout}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </AppProvider>
    );
  }

  if (currentPage === 'hiring') {
    return (
      <AppProvider>
        <HiringPage
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          navigateToPage={navigateToPage}
          currentPage={currentPage}
        />
      </AppProvider>
    );
  }

  if (currentPage === 'join-us') {
    return (
      <AppProvider>
        <JoinUsPage
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          navigateToPage={navigateToPage}
          currentPage={currentPage}
        />
      </AppProvider>
    );
  }

  return (
    <AppProvider>
      <HomePage
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        navigateToPage={navigateToPage}
        currentPage={currentPage}
      />
    </AppProvider>
  );
}

export default App;