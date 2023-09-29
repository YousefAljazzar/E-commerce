import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "./Pages/Home Page/HomePage";
import ProductDetalis from "./Pages/ProudctDetailes/ProductDetalis";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Proudcts from "./Pages/Products/Proudcts";

function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "cloth",
      element: <Proudcts />,
    },
    {
      path: "cloth/:id",
      element: <ProductDetalis />,
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);
  return routes;
}

export default Routes;
