import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <nav className="bg-yellow-300 h-14 dark:bg-red-500">
        <ul className="flex items-center h-full ml-64 space-x-96">
          <li className="">
            <Link to="/">Logo</Link>
          </li>
          <ul className="flex space-x-5">
            <li>
              <button onClick={() => darkModeHandler()}>
                {dark && <IoSunny />}
                {!dark && <IoMoon />}
              </button>
            </li>
            <li>
              <Link to="/">All Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/write-page">Write</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            {/* { token ? (
              <>
                <li>
                  <Link to="/post-page">Write</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li> 
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </>
              ) : (
                <>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/login">Log In</Link>
                  </li>
                </>
              )} */}
          </ul>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
