import * as React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Recipies from "./Recipies.jsx";

const router = createBrowserRouter([
  {
    path: "/plant-based-on-the-go/",
    element: <App />,
  },
  {
    path: "/plant-based-on-the-go/recipies",
    element: <Recipies />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
