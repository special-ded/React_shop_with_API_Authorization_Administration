import s from "./AdminOrders";

export default function AdminOrders() {
  return (
    <div className={s.admin__products}>
      <h2>Orders</h2>
      <div className={s.products__wrapper}>
        <ul className={s.products__title}>
          <li>Name</li>
          <li>Price</li>
          <li>ID</li>
          <li>Description</li>
        </ul>
        <ul className={s.product__info}>
          <li>IPhone</li>
          <li>790</li>
          <li>44444444</li>
          <li>Description,Description</li>
        </ul>
      </div>
    </div>
  );
}
