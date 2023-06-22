import s from "./Product.module.css";

export default function Product({ product }) {
  return (
    <ul className={s.product}>
      <li>{product.name}</li>
      <li>{product.price}</li>
      <li>{product.id}</li>
      <li className={s.product__description}>{product.description}</li>
    </ul>
  );
}
