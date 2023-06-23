import { useContext } from "react";
import User from "../User/User";
import s from "./AdminUsers.module.css";
import { ProductsContext } from "../../App";
import Loader from "../Loader/Loader";

export default function AdminUsers() {
  const { users } = useContext(ProductsContext);
  return (
    <div className={s.users}>
      <h2 className={s.title}>Users</h2>
      <div className={s.users__wrapper}>
        <ul className={s.users__titles}>
          <li>Name</li>
          <li>Role</li>
          <li>ID</li>
          <li>Date Registered</li>
        </ul>
        {!users && (
          <div className={s.loader}>
            <Loader />
          </div>
        )}
        {users?.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
}
