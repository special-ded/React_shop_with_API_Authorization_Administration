import React, { useContext, useState, useRef, useMemo, useEffect } from "react";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import { ProductsContext } from "../../App";
import "./Shop.css";

export default function Shop({ addToCart }) {
  const products = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState(null);

  const inputValue = useRef(null);

  useEffect(() => {
    inputValue.current.focus();
  });

  function Filter() {
    const result = products?.filter((product) =>
      (product.name + product.description + product.price)
        .toLowerCase()
        .includes(inputValue?.current?.value)
    );
    setFilteredProducts(result);
  }

  function FilterHTML() {
    return (
      <div className="filterContainer">
        <input
          placeholder="Search Input.."
          className="filterInput"
          ref={inputValue}
          onChange={Filter}
        ></input>
      </div>
    );
  }

  console.log(filteredProducts);
  console.log(products);
  return (
    <>
      <Header FilterHTML={FilterHTML} />
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
