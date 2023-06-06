import React, { useContext, useState, useRef } from "react";
import Card from "../../Components/Card/Card";
import { ProductsContext } from "../../App";
import ShopCSS from "./Shop.module.css";

export default function Shop({ addToCart, removeFromCart }) {
  const products = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState(null);

  const inputValue = useRef(null);

  function Filter() {
    const result = products?.filter((product) =>
      (product.name + product.description + product.price)
        .toLowerCase()
        .includes(inputValue?.current?.value)
    );
    setFilteredProducts(result);
  }
  return (
    <main>
      <section className={ShopCSS.filter}>
        <form>
          <input
            placeholder="I am searching..."
            className={ShopCSS.filter_input}
            ref={inputValue}
            onChange={Filter}
          ></input>
        </form>
      </section>
      <section className={ShopCSS.shop}>
        {products ? null : <div className={ShopCSS.loader}></div>}
        {filteredProducts
          ? filteredProducts?.map((product) => (
              <Card
                key={product.id}
                product={product}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
              />
            ))
          : products?.map((product) => (
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
