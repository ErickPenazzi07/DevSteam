import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Login from "./pages/Login.jsx";
import App from "./App.jsx";
import Checkout from "./pages/Checkout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<Login />} />
    <Route path="/checkout" element={<Checkout/>} />
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);