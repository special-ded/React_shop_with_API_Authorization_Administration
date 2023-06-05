import React, { useEffect, useContext } from "react";
import { CartContext } from "../../App";
import "./Cart.css";

export default function Cart({ addBtnHandler, removeBtnHandler }) {
  const cartItems = useContext(CartContext);

  return (
    <>
      <h1 className="title">Cart Items</h1>
      <section className="cart container">
        {cartItems.length === 0 ? (
          <h2>Your Cart is empty</h2>
        ) : (
          cartItems.map((item) => (
            <article key={item.id} className="card__container">
              <div className="images">
                <img src={item.image} />
              </div>
              <div className="product">
                <h1>{item?.name.slice(0, 20)}</h1>
                <h2>{item.price} $</h2>
                <p className="desc">{item?.description.slice(0, 100)}</p>
                <div className="buttons">
                  <button
                    className="remove-btn"
                    onClick={() => removeBtnHandler(item)}
                  >
                    -
                  </button>
                  <p className="quantityCounter">{item.quantity}</p>
                  <button
                    className="remove-btn"
                    onClick={() => addBtnHandler(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            </article>
          ))
        )}
      </section>
    </>
  );
}
