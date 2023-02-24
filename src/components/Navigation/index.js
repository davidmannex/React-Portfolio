import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="flex-row">
        <Link to="/about">
          <li className="mx-2">About Me</li>
        </Link>
        <Link to="/projects">
          <li className="mx-2">Portfolio</li>
        </Link>
        <Link to="/resume">
          <li className="mx-2">Resume</li>
        </Link>
        <Link to="/contact">
          <li className="mx-2">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;