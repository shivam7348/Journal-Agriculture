import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppLayout from "../admin/layout/AppLayout";


const DefaultLayouAdminWithTitle = () => {
  const location = useLocation();
  const generateTitle = (path) => {
    if (path === "/admin") {
      return "Admin Dashboard";
    }

    const segments = path.split("/").filter(Boolean);
    if (segments.length > 0) {
      const lastSegment = segments[segments.length - 1];

      return lastSegment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
    }

    return "Admin Panel";
  };

  const title = generateTitle(location.pathname);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return <AppLayout />;
};

export default DefaultLayouAdminWithTitle;
