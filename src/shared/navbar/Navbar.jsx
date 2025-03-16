import Sidebar from "./Sidebar";
import img from "../../assets/logo.png";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
const Navbar = () => {
  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start">
          <Sidebar></Sidebar>
        </div>
        <div className="navbar-center flex">
          <a className="text-xl" href="/">
            <img src={img} alt="logo" className="w-36" />
          </a>
        </div>
        <div className="navbar-end">
          <ThemeButton></ThemeButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
