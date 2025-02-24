import React, { Suspense, useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import {
  login,
  logout,
  selectCheckAuthentication,
} from "../store/admin/adminAuthSlice";

import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import Layout from "../../Layout";
import DefaultLayouAdminWithTitle from "../utils/DefaultLayouAdminWithTitle";


const AuthWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const isAuthenticated = useSelector(selectCheckAuthentication);

  useEffect(() => {
    const adminToken = String(localStorage.getItem("adminToken"));
    const adminTokenExpiry = localStorage.getItem("adminTokenExpiry");

    if (adminToken && adminTokenExpiry) {
      const currentTime = new Date().getTime();
      if (currentTime > adminTokenExpiry) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");
        localStorage.removeItem("adminTokenExpiry");
        dispatch(logout());
        navigate("/admin/login");
        return;
      }
    }

    const loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn && adminToken) {
      const username = localStorage.getItem("username");
      const password = localStorage.getItem("password");
      dispatch(login({ username, password }));
      if (location.pathname === "/admin") {
        navigate("/admin/dashboard");
      }
    }

    setCheckingAuth(false);
  }, [dispatch, navigate, location.pathname]);

  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

const AdminApp = () => {
  return (
    <BrowserRouter>
      <Suspense  fallback={<div className="pt-3 text-center">Loading... </div>}>
        <Routes>
          <Route
            path="/admin"
            element={
              <AuthWrapper>
                <Navigate to="/admin/dashboard" />
              </AuthWrapper>
            }
          />

          <Route
            path="/admin/*"
            element={
              <AuthWrapper>
                <DefaultLayouAdminWithTitle />
              </AuthWrapper>
            }
          />

          <Route path="/admin/login" element={<SignIn />} />
          {/* <Route path="/admin/register" element={<SignUp />} /> */}
          <Route path="/admin/404" element={<NotFound />} />
          <Route path="/admin/*" element={<Navigate to="/admin/404" />} />

          <Route path="/" element={<Layout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AdminApp;
