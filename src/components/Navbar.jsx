import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AvatarDropdown from "./AvatarDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(null);
  const menuRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close sidebar on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsOpen(false); // Close sidebar
    navigate("/login");
  };

  const NavLinks = ({ closeMenu, handleLogout }) => (
    <>
      <Link
        to="/"
        className="hover:text-blue-400 cursor-pointer"
        onClick={closeMenu}
      >
        Home
      </Link>
      <Link
        to="/products"
        className="hover:text-blue-400 cursor-pointer"
        onClick={closeMenu}
      >
        Products
      </Link>
      <Link
        to="/about"
        className="hover:text-blue-400 cursor-pointer"
        onClick={closeMenu}
      >
        About
      </Link>
      <Link
        to="/contact"
        className="hover:text-blue-400 cursor-pointer"
        onClick={closeMenu}
      >
        Contact
      </Link>

      {!token ? (
        <>
          <Link
            to="/login"
            className="hover:text-blue-400 cursor-pointer"
            onClick={closeMenu}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="hover:text-blue-400 cursor-pointer"
            onClick={closeMenu}
          >
            Register
          </Link>
        </>
      ) : null}
    </>
  );

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold cursor-pointer">
          MyShop
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLinks handleLogout={handleLogout} />
          {token && (
            <AvatarDropdown setToken={setToken} handleLogout={handleLogout} />
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div
            ref={menuRef}
            className="relative w-64 bg-gray-800 text-white p-6 flex flex-col gap-4 z-50 animate-slide-in"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold">Menu</span>
              <button onClick={toggleMenu} className="cursor-pointer">
                <X size={24} />
              </button>
            </div>
            <NavLinks closeMenu={toggleMenu} handleLogout={handleLogout} />
            {token && <AvatarDropdown handleLogout={handleLogout} />}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
