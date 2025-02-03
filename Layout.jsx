import { Outlet } from "react-router-dom";
import Header from "./src/Header/Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
