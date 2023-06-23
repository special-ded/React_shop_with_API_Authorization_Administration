import React, { useState, useEffect, useId } from "react";
import { Routes, Route } from "react-router-dom";
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
import localStorageService from "./services/LocalStorage";
import AdminProtected from "./routes/AdminProtected";
import AdminProducts from "./Components/AdminProducts/AdminProducts";
import AdminUsers from "./Components/AdminUsers/AdminUsers";
import AdminOrders from "./Components/AdminOrders/AdminOrders";
import UserHttpService from "./services/user-http.service";
import OrdersHttpService from "./services/orders-http.service";
export const ProductsContext = React.createContext();
export const CartContext = React.createContext();

const BASE_URL = "https://api-git-master-special-ded.vercel.app";

function App() {
  const [users, setUsers] = useState(null);
  const [orders, setOrders] = useState(null);
  const [products, setProducts] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useState(
    localStorageService.getToken("access_token") || null
  );

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

  // useEffect(() => {
  //   UserHttpService().then((data) => {
  //     console.log(data);
  //   });

  //   fetch(BASE_URL + "/users")
  //     .then((response) => response.json())
  //     .then((json) => setUsers(json))
  //     .catch((error) => console.error(error));
  // }, []);

  useEffect(() => {
    UserHttpService().then((data) => {
      setUsers(data);
    });
  }, []);

  useEffect(() => {
    OrdersHttpService().then((data) => {
      setOrders(data);
    });
  }, []);

  return (
    <div className="App">
      <CartContext.Provider
        value={{ cartItems, setCartItems, token, setToken }}
      >
        <ProductsContext.Provider value={{ products, users, orders }}>
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
            <Route element={<AdminProtected token={token} />}>
              <Route exact path="/admin/*" element={<Admin key={useId()} />}>
                <Route path="products" element={<AdminProducts />}></Route>
                <Route path="users" element={<AdminUsers />}></Route>
                <Route path="orders" element={<AdminOrders />}></Route>
              </Route>
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
                  addToCart={addToCart}
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
