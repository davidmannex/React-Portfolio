import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="flex-row">
        <li className="mx-2">
          <a href="/about">About Me</a>
        </li>
        <li className="mx-2">
          <a href="/portfolio">Portfolio</a>
        </li>
        <li className="mx-2">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;