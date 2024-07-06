import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer';
import '../styles/layout/Layout.scss'; 
function MainLayout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
