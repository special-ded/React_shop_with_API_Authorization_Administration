import React from "react";
import "./Card.css";

export default function Card({ product, addToCart }) {
  return (
    <article className="card__container">
      <figure className="images">
        <img src={product.image} />
      </figure>
      <div className="product">
        <h1>{product.name.slice(0, 20)}</h1>
        <h2>{product.price} $</h2>
        <p className="desc">{product.description.slice(0, 100)};</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}
