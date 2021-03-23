import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";
import battery from "./image/battery.jpg";
import apple from "./image/apple.png";
import Products from "./Products";
import Cart from "./Cart";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("products");

  const addToCart = product => {
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = productToRemove => {
    setCart(cart.filter(product => product !== productToRemove));
  };

  const navigateTo = nextPage => {
    setPage(nextPage);
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart({cart.length})
        </button>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>
      {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}
      {page === PAGE_CART && (
        <Cart cart={cart} removeFromCart={removeFromCart} />
      )}
    </div>
  );
}

export default App;
