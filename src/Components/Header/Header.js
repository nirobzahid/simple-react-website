import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <nav className='nav'>
        <a href="/name">User name</a> 
        <a href="/contact">Contact</a>
        <a href="/details">Details</a>
        <a href="/salary">Salary</a>
      </nav>
    </div>
  );
};

export default Header;