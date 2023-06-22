import { useContext } from "react";
import Order from "../Order/Order";
import s from "./AdminOrders.module.css";
import { ProductsContext } from "../../App";

export default function AdminOrders() {
  const { orders } = useContext(ProductsContext);
  console.log(orders);
  return (
    <div className={s.admin__products}>
      <h2 className={s.title}>Orders</h2>
      <div className={s.products__wrapper}>
        <ul className={s.products__titles}>
          <li>Name</li>
          <li>Telephone</li>
          <li>ID</li>
          <li>Description</li>
        </ul>
        {orders?.map((order) => {
          return <Order key={order.id} order={order} />;
        })}
      </div>
    </div>
  );
}
