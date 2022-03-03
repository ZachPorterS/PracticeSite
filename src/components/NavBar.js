import { React, useState } from 'react';
import { NavItems } from './NavItems';
import '../styles/NavBar.css';

const NavBar = () => {


  return (
    <nav className='navbar'>
      <h1 className='nav-logo'>
        <i className='fa fa-birthday-cake' /> Bakery
      </h1>
      <ul className='nav-items'>
        {NavItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;