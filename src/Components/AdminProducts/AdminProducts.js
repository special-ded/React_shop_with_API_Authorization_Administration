import { useContext, useId } from "react";
import s from "./AdminProducts.module.css";
import { ProductsContext } from "../../App";
import Product from "../Product/Product";
import Loader from "../Loader/Loader";

export default function AdminProducts() {
  const { products } = useContext(ProductsContext);

  return (
    <div className={s.admin__products}>
      <h2 className={s.title}>Products</h2>
      <div className={s.products__wrapper}>
        <ul className={s.products__titles}>
          <li>Name</li>
          <li>Price</li>
          <li>ID</li>
          <li>Description</li>
        </ul>
        {!products && (
          <div className={s.loader}>
            <Loader />
          </div>
        )}
        {products?.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
