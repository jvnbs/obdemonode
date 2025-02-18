import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <header className="site-header" id="site-header">
        <Header />
      </header>
      <div id="content" className="content">
          <Outlet/>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Layout;
