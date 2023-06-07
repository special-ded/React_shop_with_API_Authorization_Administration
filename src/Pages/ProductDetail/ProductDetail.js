import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../App";

export default function ProductDetail() {
  const { productId } = useParams();
  const products = useContext(ProductsContext);
  const thisProduct = products.find((product) => product.id === productId);

  return (
    <div>
      <h1>{thisProduct.name}</h1>
      <p>Price: ${thisProduct.price}</p>
      <p>{thisProduct.description}</p>
    </div>
  );
}
