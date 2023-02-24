import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Navigation';

const Header = () => {
  return (
    <header className="flex-row px-1">
      <div className="logo">
        <h1>
          <Link to="/">David Annex</Link>
        </h1>
      </div>
      <Nav></Nav>
    </header>
  );
};

export default Header;