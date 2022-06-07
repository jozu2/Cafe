import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { BsPersonCircle } from 'react-icons/bs';
import './Navbar.scss';
function Navbar() {
  return (
    <div className="container">
      <div className="logo">
        <Link to="/">
          <h1>Cafe Plum</h1> <span>est 2022</span>
        </Link>
      </div>

      <div className="center">
        <Link to="Shop">Shop</Link>
        <Link to="">Promo</Link>
      </div>

      <div className="end">
        <Link to="cart">
          <FiShoppingCart />
        </Link>
        <Link to="User">
          <BsPersonCircle />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
