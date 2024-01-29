import React from 'react';
import CartWidget from '../Cartwidget/cartwidget';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="">
            <img
              src="https://cdn.icon-icons.com/icons2/3150/PNG/512/clothing_shop_icon_192653.png"
              alt="Icono Ecommerce"
              width="50px"
              height="50px"
            />
          </a>
        </li>
    </ul>
      <CartWidget />
    </nav>
  );
}

export default Navbar;

