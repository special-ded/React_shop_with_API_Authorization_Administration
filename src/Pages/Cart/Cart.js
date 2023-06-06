import React, { useEffect, useContext } from "react";
import { CartContext } from "../../App";
import CartCSS from "./Cart.module.css";

export default function Cart({ addBtnHandler, removeBtnHandler }) {
  const cartItems = useContext(CartContext);

  return (
    <>
      <h1 className={CartCSS.title}>Cart Items</h1>
      <section className={`${CartCSS.cart} ${CartCSS.container}`}>
        {cartItems.length === 0 ? (
          <h2>Your Cart is empty</h2>
        ) : (
          cartItems.map((item) => (
            <article key={item.id} className={CartCSS.card__container}>
              <div className={CartCSS.images}>
                <img src={item.image} />
              </div>
              <div className={CartCSS.product}>
                <h1>{item?.name.slice(0, 20)}</h1>
                <h2>{item.price} $</h2>
                <p className={CartCSS.desc}>
                  {item?.description.slice(0, 100)}
                </p>
                <div className={CartCSS.buttons}>
                  <button
                    className={CartCSS.remove_btn}
                    onClick={() => removeBtnHandler(item)}
                  >
                    -
                  </button>
                  <p className="quantityCounter">{item.quantity}</p>
                  <button
                    className={CartCSS.remove_btn}
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
