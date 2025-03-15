import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm mt-5">
        <div className="navbar-start">
          <Sidebar></Sidebar>
        </div>
        <div className="navbar-center flex">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Navbar;
