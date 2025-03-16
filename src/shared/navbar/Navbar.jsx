import Sidebar from "./Sidebar";
import img from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm mt-5">
        <div className="navbar-start">
          <Sidebar></Sidebar>
        </div>
        <div className="navbar-center flex">
          <a className="text-xl" href="/">
            <img src={img} alt="logo" className="w-32" />
          </a>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Navbar;
