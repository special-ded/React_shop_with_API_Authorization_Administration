import s from "./User.module.css";

export default function User({ user }) {
  return (
    <ul className={s.user}>
      <li>{user.username}</li>
      <li>{user.role}</li>
      <li>{user.id}</li>
      <li className={s.user__description}>{user.createdAt}</li>
    </ul>
  );
}
