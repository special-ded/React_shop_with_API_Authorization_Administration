import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import "./CartReceipt.css";

export default function CartReceipt() {
  const cartProducts = useContext(CartContext);
  function calculateAmount() {
    return cartProducts.reduce((Acc, product) => {
      return Acc + product.quantity * product.price;
    }, 0);
  }
  console.log(cartProducts);
  return (
    <section className="cart-receipt ">
      <div className="cart-receipt__wrapper">
        <button className="button">Back to Shop</button>
        <div className="checkout">
          <p className="checkout__amount">Amount: {calculateAmount()} $</p>
          <button className="checkout__btn button">Checkout</button>
        </div>
      </div>
    </section>
  );
}
