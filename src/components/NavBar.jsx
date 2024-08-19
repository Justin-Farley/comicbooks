import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/browse">Browse Characters</NavLink>
        </li>
        <li>
          <NavLink to="/comics">Comics</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;