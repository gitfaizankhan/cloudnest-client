import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUpload,
  FaFolder,
  FaShareAlt,
  FaStar,
  FaHistory,
  FaTrash,
  FaUser,
  FaCog,
} from "react-icons/fa";
import UserDropdown from "./UserDropdown";
import logo from "../assets/logo.png";

const menuItems = [
  { name: "Uploads", path: "/admin/uploads", icon: FaUpload },
  { name: "My Drive", path: "/admin/dashboard", icon: FaFolder },
  { name: "Shared with me", path: "/admin/shared", icon: FaShareAlt },
  { name: "Favorites", path: "/admin/favorites", icon: FaStar },
  { name: "Recent", path: "/admin/recent", icon: FaHistory },
  { name: "Trash", path: "/admin/trash", icon: FaTrash },
  { name: "Profile", path: "/admin/profile", icon: FaUser },
  { name: "Settings", path: "/admin/settings", icon: FaCog },
];

const Sidebar = () => {
  const [collapseShow, setCollapseShow] = useState("hidden");
  return (
    <>
      <nav
        className="md:left-0 md:block md:fixed md:top-0 md:bottom-0
      md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-slate-200 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
      >
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <FaBars size={20} />
          </button>

          <Link
            className="inline-flex items-center text-slate-600 whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/admin/"
          >
            <img src={logo} alt="Your Project Logo" className="h-10 mr-0" />
            <span>CloudNest</span>
          </Link>

          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>

          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="inline-flex items-center text-slate-600 whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/admin/"
                  >
                    <img
                      src={logo}
                      alt="Your Project Logo"
                      className="h-10 mr-0"
                    />
                    <span>CloudNest</span>
                  </Link>
                </div>

                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            </div>

            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border border-solid  border-slate-500 placeholder-slate-300 text-slate-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Drive Layout
            </h6>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li className="items-center" key={item.name}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        "text-xs uppercase py-3 font-bold flex items-center " +
                        (isActive
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-slate-700 hover:text-slate-500")
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <Icon
                            className={
                              (isActive ? "opacity-75 " : "text-slate-300 ") +
                              "mr-2 text-sm"
                            }
                          />
                          {item.name}
                        </>
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
