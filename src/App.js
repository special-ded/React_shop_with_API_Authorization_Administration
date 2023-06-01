import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import uuid from "react-native-uuid";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Admin from "./Pages/Admin/Admin";
import Login from "./Components/Login/Login";
import "./App.css";

export const ProductsContext = React.createContext();
export const CartContext = React.createContext();
const BASE_URL = "https://hys-fe-course-api-omega.vercel.app";

function App() {
  const [products, setProducts] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    const exist = cartItems.find((element) => element.id === product.id);
    if (exist) {
      const index = cartItems.findIndex((item) => item.id === product.id);
      const cartCopy = [...cartItems];
      cartCopy.splice(index, 1, { ...exist, quantity: exist.quantity + 1 });
      setCartItems(cartCopy);
      return;
    }
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
    console.log(cartItems);
  }

  function removeFromCart(id) {
    const index = cartItems.findIndex((item) => item.id === id);
    const cartCopy = [...cartItems];
    cartCopy.splice(index, 1);
    setCartItems(cartCopy);
  }

  function addBtnHandler(product) {
    console.log(cartItems);
    addToCart(product);
  }

  function removeBtnHandler(product) {
    if (product.quantity === 1) {
      removeFromCart(product.id);
      return;
    }
    const exist = cartItems.find((element) => element.id === product.id);
    const index = cartItems.findIndex((item) => item.id === product.id);
    const cartCopy = [...cartItems];
    cartCopy.splice(index, 1, { ...exist, quantity: exist.quantity - 1 });
    setCartItems(cartCopy);
  }

  useEffect(() => {
    fetch(BASE_URL + "/products")
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <CartContext.Provider value={cartItems}>
        <ProductsContext.Provider value={products}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={[
                  <Header key={uuid.v4()} />,
                  <Home key={uuid.v4()} addToCart={addToCart} />,
                  <Footer key={uuid.v4()} />,
                ]}
              />
              <Route
                path="/shop"
                element={[
                  <Header key={uuid.v4()} />,
                  <Shop key={uuid.v4()} addToCart={addToCart} />,
                  <Footer key={uuid.v4()} />,
                ]}
              />
              <Route
                path="/admin"
                element={[
                  <Header key={uuid.v4()} />,
                  <Admin key={uuid.v4()} />,
                  <Footer key={uuid.v4()} />,
                ]}
              />
              <Route
                path="/login"
                element={[
                  <Header key={uuid.v4()} />,
                  <Login key={uuid.v4()} />,
                  <Footer key={uuid.v4()} />,
                ]}
              />
              <Route
                path="/cart"
                element={[
                  <Header key={uuid.v4()} />,
                  <Cart
                    key={uuid.v4()}
                    removeFromCart={removeFromCart}
                    addBtnHandler={addBtnHandler}
                    removeBtnHandler={removeBtnHandler}
                  />,
                  <Footer key={uuid.v4()} />,
                ]}
              />
            </Routes>
          </BrowserRouter>
        </ProductsContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
