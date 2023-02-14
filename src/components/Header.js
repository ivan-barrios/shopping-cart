import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <Link to="/" className="Links">
        <h1>Wodor</h1>
      </Link>
      <nav>
        <Link to="/shop/" className="Links">
          <h2>Shop</h2>
        </Link>
        <Link to="/cart" className="Links">
          <h2>Cart</h2>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
