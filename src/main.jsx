import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import DashboardPage from "./pages/DashboardPage";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Discount from "./pages/Discount";
import Settings from "./pages/Settings";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/discount" element={<Discount />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element="Not Found" />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
