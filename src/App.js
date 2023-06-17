import React, { useState, useEffect, useId } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Admin from "./Pages/Admin/Admin";
import Checkout from "./Components/Checkout/Checkout";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import UserCabinet from "./Pages/UserCabinet/UserCabinet";
import RegisterComponent from "./Components/RegisterComponent/RegisterComponent";
import LoginComponent from "./Components/LoginComponent/LoginComponent";
import "./App.css";
import localStorageService from "./services/localStorage";
import AdminProtected from "./routes/AdminProtected";
export const ProductsContext = React.createContext();
export const CartContext = React.createContext();
const BASE_URL = "https://api-git-master-special-ded.vercel.app";

function App() {
  const [products, setProducts] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useState(
    localStorageService.getToken("access_token")
  );
  console.log(token);
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
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
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
      <CartContext.Provider value={{ cartItems, token, setToken }}>
        <ProductsContext.Provider value={products}>
          <Header key={useId()} />
          <Routes>
            <Route
              exact
              path="/"
              element={[
                <Home
                  key={useId()}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />,
              ]}
            />
            <Route
              exact
              path="/shop"
              element={[
                <Shop
                  key={useId()}
                  removeFromCart={removeFromCart}
                  addToCart={addToCart}
                />,
              ]}
            />
            <Route element={<AdminProtected />}>
              <Route exact path="/admin" element={<Admin key={useId()} />} />
            </Route>
            <Route
              exact
              path="/user-login"
              element={<LoginComponent key={useId()} />}
            />
            <Route
              exact
              path="/user-register"
              element={<RegisterComponent key={useId()} />}
            />
            <Route
              exact
              path="/user-cabinet"
              element={<UserCabinet key={useId()} />}
            />
            <Route
              exact
              path="/cart"
              element={[
                <Cart
                  key={useId()}
                  removeFromCart={removeFromCart}
                  addBtnHandler={addBtnHandler}
                  removeBtnHandler={removeBtnHandler}
                />,
                <Checkout key={useId()} />,
              ]}
            />
            <Route
              path="/shop/:productId"
              element={
                <ProductDetail
                  removeFromCart={removeFromCart}
                  addToCart={addToCart}
                  key={useId()}
                />
              }
            />
          </Routes>
          <Footer key={useId()} />
        </ProductsContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
