import React, { useContext } from "react";
import HomeCSS from "./Home.module.css";
import { ProductsContext } from "../../App";
import Card from "../../Components/Card/Card";

export default function Home({ addToCart, removeFromCart }) {
  const products = useContext(ProductsContext);

  return (
    <main className={HomeCSS.home}>
      <section className={HomeCSS.title}>
        <h1>Welcome to the shop</h1>
        <h1>and check Our Bestsellers</h1>
      </section>
      <section className={HomeCSS.card_wrapper}>
        {products ? null : <div className={HomeCSS.loader}></div>}
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
