import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AvatarDropdown from "./AvatarDropdown";
import toast from "react-hot-toast";

const Navbar = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const toggleButton = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsOpen(false);
    toast.error("User logged out");
    navigate("/login");
  };

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const navLinkClass =
    "hover:bg-base-200 hover:text-base-content px-3 py-1 rounded transition";

  return (
    <nav className="bg-base-300 text-base-content p-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          App Name
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-400 transition">
            Products
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingCart size={25} className="text-base-content" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cart.length}
            </span>
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
          {token ? (
            <AvatarDropdown handleLogout={handleLogout} />
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-400 transition">
                Login
              </Link>
              <Link to="/register" className="hover:text-blue-400 transition">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex gap-5">
          <Link to="/cart" className="relative">
            <ShoppingCart size={24} className="text-base-content" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cart.length}
            </span>
          </Link>
          <button onClick={toggleButton} className="cursor-pointer">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div
            className="fixed inset-0 bg-base-300 opacity-50"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-64 bg-base-100 text-base-content p-6 flex flex-col gap-4 z-50 animate-slide-in">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold">Menu</span>
              <button onClick={toggleButton} className="cursor-pointer">
                <X size={24} className="hover:text-blue-400" />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <div className="rounded transition px-3 py-1">
                <Link
                  to="/"
                  className="text-base-content hover:text-blue-400"
                  onClick={toggleButton}
                >
                  Home
                </Link>
              </div>
              <div className="rounded transition px-3 py-1">
                <Link
                  to="/products"
                  className="text-base-content hover:text-blue-400"
                  onClick={toggleButton}
                >
                  Products
                </Link>
              </div>
              <div className="rounded transition px-3 py-1">
                <Link
                  to="/contact"
                  className="text-base-content hover:text-blue-400"
                  onClick={toggleButton}
                >
                  Contact
                </Link>
              </div>
              <div className="rounded transition px-3 py-1">
                <Link
                  to="/about"
                  className="text-base-content hover:text-blue-400"
                  onClick={toggleButton}
                >
                  About
                </Link>
              </div>

              {!token ? (
                <>
                  <div className="rounded transition px-3 py-1">
                    <Link
                      to="/login"
                      className="text-base-content hover:text-blue-400"
                      onClick={toggleButton}
                    >
                      Login
                    </Link>
                  </div>
                  <div className="rounded transition px-3 py-1">
                    <Link
                      to="/register"
                      className="text-base-content hover:text-blue-400"
                      onClick={toggleButton}
                    >
                      Register
                    </Link>
                  </div>
                </>
              ) : (
                <div className="rounded transition px-3 py-1">
                  <AvatarDropdown handleLogout={handleLogout} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
