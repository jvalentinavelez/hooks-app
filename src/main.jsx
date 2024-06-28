import React from "react";
import ReactDOM from "react-dom/client";

// import { HooksApp } from "./HooksApp";
import { AboutPage, HomePage, LoginPage, MainApp } from "./09-useContext";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "/*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <HooksApp />
  <RouterProvider router={router} />
  // </React.StrictMode>
);
