import React, { useEffect, useContext } from "react";
import { CartContext } from "../../App";
import "./Cart.css";

export default function Cart({ removeFromCart }) {
  const cartItems = useContext(CartContext);
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <>
      <h1 className="title">Cart Items</h1>
      <section className="cart container">
        {cartItems.length === 0 ? (
          <h2>Your Cart is empty</h2>
        ) : (
          cartItems.map((item) => (
            <article key={item.id} className="card_container">
              <div className="images">
                <img src={item.image} />
              </div>
              <div className="product">
                <h1>{item?.name.slice(0, 20)}</h1>
                <h2>{item.price} $</h2>
                <p className="desc">{item?.description.slice(0, 100)}</p>
                <div className="buttons">
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove from Cart
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
