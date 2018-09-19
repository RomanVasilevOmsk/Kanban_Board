import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div className="view-container">
    <Header />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
