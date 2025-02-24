import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import journalStore from "./store/store";
import { Provider } from "react-redux";

import AdminApp from "./admin/AdminApp";

import { ToastContainer } from "react-toastify";

import AdminRoutes from "./admin/adminRoutes";
import { AppWrapper } from "./admin/components/common/PageMeta";
import { ThemeProvider } from "./admin/context/ThemeContext";
import router from "../router";
import { RouterProvider } from "react-router-dom";

const isAdminRoute = window.location.pathname.startsWith("/admin");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={journalStore}>
      <ToastContainer autoClose={3000} />

      {isAdminRoute ? (
        <AppWrapper>
          <ThemeProvider>
            {/* <AdminApp router={adminRoutes} /> */}
            <AdminRoutes />
          </ThemeProvider>
        </AppWrapper>
      ) : (
        <RouterProvider router={router} />
      )}
    </Provider>
  </React.StrictMode>
);
