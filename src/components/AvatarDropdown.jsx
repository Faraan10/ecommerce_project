import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const AvatarDropdown = ({ handleLogout }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => setOpen(!open);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=Faraan`}
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        <ChevronDown size={18} className="transition-transform duration-200" />
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg p-2 z-50">
          <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Profile</p>
          <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Settings</p>
          <p
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </p>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
