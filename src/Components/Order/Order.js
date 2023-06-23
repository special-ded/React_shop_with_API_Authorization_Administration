import s from "./Order.module.css";

export default function Order({ order }) {
  return (
    <ul className={s.order}>
      <li>{order.name}</li>
      <li>{order.phone}</li>
      <li>{order.id}</li>
      <li className={s.order__description}>2222</li>
    </ul>
  );
}
