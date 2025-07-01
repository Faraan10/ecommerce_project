import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content border-t border-base-200 px-5 md:px-20 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">Zayrah.life</h3>
          <p className="text-sm leading-relaxed">
            Redefining premium fashion. Footwear & essentials that keep you
            ahead of the curve — stylish, comfortable, and built to last.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-blue-500 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Get in Touch</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:support@zayrah.life">support@zayrah.life</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+911234567890">+91 12345 67890</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Bangalore, India</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
      </div>

      {/* Copyright */}
      <div className="text-center text-xs mt-10 text-base-content/70">
        © {new Date().getFullYear()} Zayrah.life. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
