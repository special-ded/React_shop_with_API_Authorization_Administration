export default function AdminProducts() {
  return (
    <div className={AdminCSS.admin__products}>
      <h2>Products</h2>
      <div className={AdminCSS.products__wrapper}>
        <ul className={AdminCSS.products__title}>
          <li>Name</li>
          <li>Price</li>
          <li>ID</li>
          <li>Description</li>
        </ul>
        <ul className={AdminCSS.product__info}>
          <li>IPhone</li>
          <li>790</li>
          <li>44444444</li>
          <li>Description,Description</li>
        </ul>
      </div>
    </div>
  );
}
