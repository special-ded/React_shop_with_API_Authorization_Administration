import { useContext } from "react";
import Order from "../Order/Order";
import s from "./AdminOrders.module.css";
import { ProductsContext } from "../../App";
import Loader from "../Loader/Loader";

export default function AdminOrders() {
  const { orders } = useContext(ProductsContext);

  return (
    <div className={s.orders}>
      <h2 className={s.title}>Orders</h2>
      <div className={s.orders__wrapper}>
        <ul className={s.orders__titles}>
          <li>Name</li>
          <li>Telephone</li>
          <li>ID</li>
          <li>Description</li>
        </ul>
        {!orders && (
          <div className={s.loader}>
            <Loader />
          </div>
        )}
        {orders?.map((order) => {
          return <Order key={order.id} order={order} />;
        })}
      </div>
    </div>
  );
}
