import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AvatarDropdown from "./AvatarDropdown";

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
          <div className="md:hidden">
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
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold">Menu</span>
                <button onClick={toggleButton} className="cursor-pointer">
                  <X size={24} />
                </button>
              </div>
              <Link to="/" onClick={toggleButton}>
                Home
              </Link>
              <Link to="/products" onClick={toggleButton}>
                Products
              </Link>
              <Link to="/contact" onClick={toggleButton}>
                Contact
              </Link>
              <Link to="/about" onClick={toggleButton}>
                About
              </Link>
              {!token ? (
                <>
                  <Link to="/login" onClick={toggleButton}>
                    Login
                  </Link>
                  <Link to="/register" onClick={toggleButton}>
                    Register
                  </Link>
                </>
              ) : (
                <AvatarDropdown handleLogout={handleLogout} />
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
