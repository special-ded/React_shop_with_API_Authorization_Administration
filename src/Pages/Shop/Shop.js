import React, { useContext, useState, useRef } from "react";
import Card from "../../Components/Card/Card";
import { ProductsContext } from "../../App";
import "./Shop.css";

export default function Shop({ addToCart }) {
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
    <>
      <div className="filterContainer">
        <input
          placeholder="I am searching..."
          className="filterInput"
          ref={inputValue}
          onChange={Filter}
        ></input>
      </div>
      <section className="shop container">
        {products ? null : <div className="loader"></div>}
        {filteredProducts
          ? filteredProducts?.map((product) => (
              <Card key={product.id} product={product} addToCart={addToCart} />
            ))
          : products?.map((product) => (
              <Card key={product.id} product={product} addToCart={addToCart} />
            ))}
      </section>
    </>
  );
}
