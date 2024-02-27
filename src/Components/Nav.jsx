// Nav.js

import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from react-icons


const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="search-bar">
          <FaSearch className="search-icon" /> {/* Adding the search icon */}
          <input type="text" placeholder="Search...">
            
          </input>
          
        </div>
        <div className="categories">
          
          <ul>
          <li>Categories</li>
            <li>Website Builders</li>
            <li>Today's Deals</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
