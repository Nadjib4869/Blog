import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [dark, setDark] = useState(false);
  const { user, logout } = useAuth();

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const handleLogout = () => {
    logout();
    setDropdown(false);
  };

  return (
    <>
      <nav className=" h-14 dark:bg-red-500">
        <ul className="flex items-center h-full ml-64 space-x-96">
          <li className="">
            <Link to="/">Logo</Link>
          </li>
          <ul className="flex items-center space-x-5">
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
            {user ? (
              <>
                <li>
                  <Link to="/write-page">Write</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
                <li>
                  <img
                    src={
                      user
                        ? `http://localhost:8000/img/users/${user.user.photo}`
                        : ""
                    }
                    alt="User-Photo"
                    className="h-10 rounded-full cursor-pointer"
                    onClick={() => setDropdown(!dropdown)}
                  />
                </li>
                {dropdown && (
                  <ul className="absolute z-10 flex flex-col items-start rounded-lg w-36 mt-[140px] bg-slate-300 right-[192px]">
                    <li className="flex items-center w-full h-8 rounded-t-lg cursor-pointer hover:bg-slate-500">
                      <Link
                        to="/dashboard"
                        className="w-full pl-2"
                        onClick={() => setDropdown(false)}
                      >
                        Profile
                      </Link>
                    </li>
                    <li className="flex items-center w-full h-8 cursor-pointer hover:bg-slate-500">
                      <Link
                        to="/editProfile"
                        className="w-full pl-2"
                        onClick={() => setDropdown(false)}
                      >
                        Settings
                      </Link>
                    </li>
                    <li className="flex items-center w-full h-8 rounded-b-lg cursor-pointer hover:bg-slate-500">
                      <Link
                        to="/"
                        className="w-full pl-2"
                        onClick={() => handleLogout()}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                )}
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
            )}
          </ul>
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
      </nav>
      <Outlet />
    </>
  );
}
