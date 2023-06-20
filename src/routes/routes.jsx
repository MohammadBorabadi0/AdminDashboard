import Customers from "../pages/Customers";
import Discount from "../pages/Discount";
import Products from "../pages/Products";
import Settings from "../pages/Settings";

const routes = [
  { path: "/", element: 'DashboardPage' },
  { path: "/products", element: <Products></Products> },
  { path: "/customers", element: <Customers></Customers> },
  { path: "/discount", element: <Discount></Discount> },
  { path: "/settings", element: <Settings></Settings> },
  { path: "*", element: "Not Found" },
];

export default routes;
