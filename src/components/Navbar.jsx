import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AvatarDropdown from "./AvatarDropdown";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsOpen(false);
    setToken(null);
    navigate("/login");
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <nav className="bg-gray-900 text-white p-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold cursor-pointer">
            App Name
          </Link>

          {/* desktop view */}
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">
              <div className="relative">
                <ShoppingCart
                  size={25}
                  className="text-gray-800 dark:text-white"
                />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  3
                </span>
              </div>
            </Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            {token ? (
              <>
                <AvatarDropdown handleLogout={handleLogout} />
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </div>

          {/* mobile toggle hamburger */}
          <div className="md:hidden flex gap-5">
            <Link to="/cart" className="flex items-center space-x-2">
              <div className="relative">
                <ShoppingCart
                  size={24}
                  className="text-gray-800 dark:text-white"
                />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  3
                </span>
              </div>
            </Link>
            <button onClick={toggleButton} className="cursor-pointer">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isOpen && (
          <div className="fixed inset-0 z-40 flex">
            {/* overlay */}
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* sidebar */}
            <div className="relative w-64 bg-gray-800 text-white p-6 flex flex-col gap-4 z-50 animate-slide-in">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xl font-bold">Menu</span>
                <button onClick={toggleButton} className="cursor-pointer">
                  <X size={24} />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col gap-3">
                <div>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition"
                    onClick={toggleButton}
                  >
                    Home
                  </Link>
                </div>
                <div>
                  <Link
                    to="/products"
                    className="hover:text-blue-400 transition"
                    onClick={toggleButton}
                  >
                    Products
                  </Link>
                </div>
                <div>
                  <Link
                    to="/contact"
                    className="hover:text-blue-400 transition"
                    onClick={toggleButton}
                  >
                    Contact
                  </Link>
                </div>
                <div>
                  <Link
                    to="/about"
                    className="hover:text-blue-400 transition"
                    onClick={toggleButton}
                  >
                    About
                  </Link>
                </div>

                {!token ? (
                  <>
                    <div>
                      <Link
                        to="/login"
                        className="hover:text-blue-400 transition"
                        onClick={toggleButton}
                      >
                        Login
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/register"
                        className="hover:text-blue-400 transition"
                        onClick={toggleButton}
                      >
                        Register
                      </Link>
                    </div>
                  </>
                ) : (
                  <div onClick={(e) => e.stopPropagation()}>
                    <AvatarDropdown handleLogout={handleLogout} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
