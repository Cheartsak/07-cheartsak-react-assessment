import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import Owner from "./owner.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/owner", element: <Owner /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
