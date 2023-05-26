import React, { useEffect, useMemo } from "react";

export default function Cart({ cartItems, removeFromCart }) {
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  console.log(cartItems);

  return (
    <section className="container">
      <h1>Cart Items</h1>
      {cartItems.length === 0 ? (
        <h2>Your Cart is empty</h2>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="card_container">
            <div className="images">
              <img src={item.image} />
            </div>
            <div className="product">
              <h1>{item?.title}</h1>
              <h2>{item.price}</h2>
              <p className="desc">{item?.description}</p>
              <div className="buttons">
                <button onClick={() => removeFromCart(item.id)} className="add">
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
}
