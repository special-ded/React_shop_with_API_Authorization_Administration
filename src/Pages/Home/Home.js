import React, { useContext } from "react";
import "./Home.css";
import { ProductsContext } from "../../App";
import Card from "../../Components/Card/Card";

export default function Home({ addToCart, removeFromCart }) {
  const products = useContext(ProductsContext);
  console.log(products);

  return (
    <main className="home container">
      <section className="title">
        <h1>Welcome to the shop</h1>
        <h1>and check Our Bestsellers</h1>
      </section>
      <section className="shop container">
        {products ? null : <div className="loader"></div>}
        {products?.slice(0, 5)?.map((product) => (
          <Card
            key={product.id}
            product={product}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
          />
        ))}
      </section>
    </main>
  );
}
