import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import CheckoutCSS from "./Checkout.module.css";

export default function Checkout() {
  const cartProducts = useContext(CartContext);
  function calculateAmount() {
    return cartProducts.reduce((Acc, product) => {
      return Acc + product.quantity * product.price;
    }, 0);
  }
  console.log(cartProducts);
  return (
    <section className={CheckoutCSS.receipt}>
      <div className={CheckoutCSS.receipt__wrapper}>
        <button className={CheckoutCSS.button}>
          <Link to="/shop">Back to Shop</Link>
        </button>
        <div className={CheckoutCSS.checkout}>
          <p className={CheckoutCSS.checkout__amount}>
            Amount: {calculateAmount()} $
          </p>
          <button
            className={`${CheckoutCSS.checkout__btn} ${CheckoutCSS.button}`}
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
}
