import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer';
import '../styles/layout/_mainLayout.scss'; 
function MainLayout({ children }) {
  return (
    <div className="MainLayout">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
