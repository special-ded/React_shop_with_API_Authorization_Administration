import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import CardCSS from "./Card.module.css";

export default function Card({ product, addToCart, removeFromCart }) {
  const [inCart, setInCart] = useState(false);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    if (cartItems.find((element) => element.id === product.id)) {
      setInCart(true);
      return;
    }

    if (!cartItems.find((element) => element.id === product.id)) {
      setInCart(false);
    }
  }, [cartItems]);

  function clickHandler(product) {
    if (!inCart) {
      addToCart(product);
    } else {
      removeFromCart(product.id);
    }
  }

  return (
    <article className={CardCSS.card__container}>
      <figure className={CardCSS.image__wrapper}>
        <img className={CardCSS.image} src={product.image} />
      </figure>

      <div className={CardCSS.asside}>
        <Link to={`/shop/${product.id}`}>
          <h1>{product.name.slice(0, 20)}</h1>
        </Link>
        <h2>{product.price} $</h2>
        <p className={CardCSS.description}>
          {product.description.slice(0, 100)};
        </p>
        <button
          className={CardCSS.add_to_cart_btn}
          onClick={() => clickHandler(product)}
        >
          {inCart ? "In Cart" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}
