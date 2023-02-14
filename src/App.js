import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (product) => {
    if (!cart.includes(product)) {
      setCart([...cart, product]);
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/shop"
          element={<Shop handleClick={handleClick} />}
        />
        <Route exact path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
