import { forwardRef } from "react";
import { X } from "lucide-react";
import avatar from "../assets/avatar.png";

const Sidebar = forwardRef(({ isOpen, onClose }, ref) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-30 transition-opacity" />
      )}

      {/* Sidebar */}
      <div
        ref={ref}
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={onClose} className="cursor-pointer">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col p-4 gap-4">
          <a href="#" className="hover:underline cursor-pointer">
            Home
          </a>
          <a href="#" className="hover:underline cursor-pointer">
            Products
          </a>
          <a href="#" className="hover:underline cursor-pointer">
            Contact
          </a>
        </div>

        <div className="mt-auto p-4 border-t">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
            <span className="font-medium">Faraan</span>
          </div>
        </div>
      </div>
    </>
  );
});

export default Sidebar;
