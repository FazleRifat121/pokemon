import { NavLink } from "react-router";
import { MdHomeFilled } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";
import { MdClose } from "react-icons/md";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="z-10">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-3">
            {/* Sidebar content here */}
            <li className="text-lg font-semibold">
              <NavLink to="/">
                <MdHomeFilled />
                Home
              </NavLink>
            </li>
            <li className="text-lg font-semibold">
              <NavLink to="/about">
                <ImBriefcase />
                About
              </NavLink>
            </li>
            <li className="text-lg font-semibold">
              <NavLink to="/contact">
                <FaAddressBook />
                Contact
              </NavLink>
            </li>

            <label htmlFor="my-drawer">
              <div className="btn mt-10 hidden show-on-mobile drawer-button text-lg w-20 font-bold">
                <MdClose />
              </div>
            </label>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
