import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ active }) => {
  return (
    <div
      className={active ? "sidebar active" : "sidebar"}
      onClick={() => setActive(!active)}
    >
      <div className="logo">
        <img src="/img/logo.jpg" />
      </div>
      <ul>
        <li className="active">
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/discount">Discount</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

{
  /* <aside className={props.active ? "sidebar active" : "sidebar"}>
Sidebar
<div className="logo">
  <h1>7Admin</h1>
</div>
<ul>
  <li className="active">
    <Link to="/">Dashboard</Link>
  </li>
  <li>
    <Link to="/products">Products</Link>
  </li>
  <li>
    <Link to="/customers">Customers</Link>
  </li>
  <li></li>
  <li>
    <Link to="/discount">Discount</Link>
  </li>
  <li>
    <Link to="/settings">Settings</Link>
  </li>
</ul>
</aside> */
}
