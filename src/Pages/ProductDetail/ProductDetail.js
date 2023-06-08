import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext, ProductsContext } from "../../App";
import ProductDetailCSS from "./ProductDetail.module.css";

export default function ProductDetail({ removeFromCart, addToCart }) {
  const [inCart, setInCart] = useState(false);
  const { productId } = useParams();
  const products = useContext(ProductsContext);
  const thisProduct = products.find((product) => product.id === productId);

  const cartItems = useContext(CartContext);

  useEffect(() => {
    buttonHandler();
  }, [cartItems]);

  function buttonHandler() {
    if (cartItems.find((element) => element.id === thisProduct.id)) {
      setInCart(true);
      return;
    }

    if (!cartItems.find((element) => element.id === thisProduct.id)) {
      setInCart(false);
    }
  }

  function clickHandler(product) {
    if (!inCart) {
      addToCart(product);
    } else {
      removeFromCart(product.id);
    }
  }

  return (
    <section className={ProductDetailCSS.container}>
      <figure className={ProductDetailCSS.images}>
        <img className={ProductDetailCSS.image} src={thisProduct.image} />
      </figure>
      <div className={ProductDetailCSS.product}>
        <h1>{thisProduct.name}</h1>
        <h2>Price: {thisProduct.price} $</h2>
        <p className={ProductDetailCSS.description}>
          {thisProduct.description};
        </p>
        <button
          className={ProductDetailCSS.add_to_cart_btn}
          onClick={() => clickHandler(thisProduct)}
        >
          {inCart ? "In Cart" : "Add to Cart"}
        </button>
      </div>
    </section>
  );
}
