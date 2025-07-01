import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content px-5 md:px-20 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">Zayrah.life</h3>
          <p className="text-sm leading-relaxed">
            Premium sneakers & fashion curated for the modern lifestyle. Step
            into style with Zayrah.
          </p>
        </div>
        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact & Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
          <div className="flex space-x-4 text-xl mb-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              <FaTwitter />
            </a>
            <a href="mailto:support@zayrah.life" className="hover:text-primary">
              <FaEnvelope />
            </a>
          </div>
          <p className="text-sm">support@zayrah.life</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-base-300 mt-10 pt-5 text-center text-sm">
        © {new Date().getFullYear()} Zayrah.life. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
