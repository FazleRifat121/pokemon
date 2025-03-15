import { Outlet } from "react-router";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Layout;
