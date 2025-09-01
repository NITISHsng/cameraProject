import React, { useState } from 'react';
import { AppProvider } from './contexts/AppContext';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import HiringPage from './pages/HiringPage';
import JoinUsPage from './pages/JoinUsPage';
import LoginPage from './pages/LoginPage';

  // const {
  //   mobileMenuOpen,
  //   setMobileMenuOpen,
  //   navigateToPage,
  //   currentPage,
  // } = useAppContext();

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!mobileMenuOpen);
  // };

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'admin' | 'operator'>('admin');
  const [userData, setUserData] = useState<any>(null);

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
      
        />
      </AppProvider>
    );
  }

  if (currentPage === 'hiring') {
    return (
      <AppProvider>
        <HiringPage
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
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        navigateToPage={navigateToPage}
        currentPage={currentPage}
      />
    </AppProvider>
  );
}

export default App;