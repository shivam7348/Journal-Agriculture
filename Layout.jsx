import { Outlet } from "react-router-dom";
import Header from "./src/Header/Header";
import Footer from "./src/components/Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
}

export default Layout;
