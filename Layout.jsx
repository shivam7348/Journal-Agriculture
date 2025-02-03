import { Outlet } from "react-router-dom";
import Header from "./src/Header/Header";
import Footer from "./src/components/Footer/Footer";
import Topheader from "./src/Header/TopHeader";

function Layout() {
  return (
    <>
    {/* <Topheader/> */}
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
}

export default Layout;
