import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-transparent absolute z-100 w-full text-white ">
      <div className="navbar w-[90%] m-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 "
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Room</a>
                <ul className="p-2 z-100">
                  <li>
                    <a>Room Aechive</a>
                  </li>
                  <li>
                    <a>Room Detail</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Pages</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">PURA</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Hoom</a>
            </li>
            <li>
              <details>
                <summary>Room</summary>
                <ul className="p-2">
                  <li>
                    <a>Room Archive</a>
                  </li>
                  <li>
                    <a>Room Detail</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Pages</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-8">
          <a className="btn">Book Now</a>
          <Link to={'/login'}>Login</Link>
        </div>
      </div>
    </div>
  );
}
