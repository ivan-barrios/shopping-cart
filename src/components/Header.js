import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
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
        <Cart />
      </nav>
    </header>
  );
};

export default Header;
