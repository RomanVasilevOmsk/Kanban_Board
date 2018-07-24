import React from 'react';
import Header from './Header';

const Layout = ({ children }) => (
  <div className="view-container" >
    <Header />
    {children}
  </div>
);

export default Layout;
