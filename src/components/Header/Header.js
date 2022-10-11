import React, {useContext } from "react";
import { Navbar, Avatar, Dropdown } from "flowbite-react";


import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/profile_avatar.png";
import { Link } from "react-router-dom";

import AuthContext from "../../context/AuthContext";


export default function Header() {
  let { user, logout } = useContext(AuthContext);
  return (
    <div className="border-b border-secondary">
      <Navbar fluid={true} rounded={true} className="">
        {/* Logo */}
        <Navbar.Brand>
          <img src={logo} className="mr-3 h-12 md:h-12" alt="YATNL Logo" />
        </Navbar.Brand>
        {/* Right section */}
        <div className="flex md:order-2 items-center gap-1">
          {/* User */}
          {user ? (
            <div className="flex items-center">
              <span className="mx-2 align-middle">
                Hello{" "}
                <span className="font-bold text-secondary">
                  {user.username}
                </span>
              </span>
              <Dropdown
                arrowIcon={false}
                inline={true}
                label={
                  <Avatar
                    alt="User settings"
                    img={avatar}
                    rounded={true}
                    className="mx-2 border border-secondary"
                  />
                }
              >
                <div className="bg-white p-2 rounded-md">
                  <Dropdown.Header className="bg-white">
                    <span className="block text-sm ">{user.username}</span>
                    <span className="block truncate text-sm font-medium ">
                      {user.email}
                    </span>
                  </Dropdown.Header>
                  <hr />
                  <Link to="/Invite">
                    <Dropdown.Item>Invite a friend</Dropdown.Item>
                  </Link>
                  <Link to="/Dashboard">
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                  </Link>
                  <Link to="/NewLeader">
                    <Dropdown.Item>New Leader</Dropdown.Item>
                  </Link>
                  <Link to="/Earnings">
                    <Dropdown.Item>Earnings</Dropdown.Item>
                  </Link>
                  <hr />
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={logout}
                    >
                      Log out
                    </button>
                  </Dropdown.Item>
                </div>
              </Dropdown>
            </div>
          ) : (
            <div className="flex gap-1">
              <div className="focus:outline-none text-white bg-secondary hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-secondary dark:hover:bg-red-700 dark:focus:ring-red-900">
                <Link to="/login">Login</Link>
              </div>
              <div className="focus:outline-none text-white bg-secondary hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-secondary dark:hover:bg-red-700 dark:focus:ring-red-900">
                <Link to="/signup">Sign Up</Link>
              </div>
              {/* <Link
                to="login"
                type="button"
                class="focus:outline-none text-white bg-secondary hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-secondary dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Login
              </Link>
              <Link
                to="signup"
                type="button"
                class="focus:outline-none text-white bg-secondary hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-secondary dark:hover:bg-red-700 dark:focus:ring-red-900"
              ></Link> */}
            </div>

            // <Link
            //   to="login"
            //   class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            // >
            //   Login
            // </Link>
          )}

          <Navbar.Toggle />
        </div>
        {/* Desktop links */}
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="pricing"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="contact_us"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile Links */}
        <Navbar.Collapse className="md:hidden">
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="about">About</Navbar.Link>
          <Navbar.Link href="/pricing">Pricing</Navbar.Link>
          <Navbar.Link href="/contact_us">Contact</Navbar.Link>
          {user ? null : <Navbar.Link href="/login">Login</Navbar.Link>}

          {user ? (
            <li>
              <div class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={logout}
                >
                  Log out
                </button>
              </div>
            </li>
          ) : null}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
