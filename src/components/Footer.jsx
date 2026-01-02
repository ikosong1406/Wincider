import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { RiPaletteLine } from "react-icons/ri";

const footerLinks = {
  Services: [
    { name: "Makeup Tutorials", path: "/services#tutorials" },
    { name: "Beauty Consultation", path: "/services#consultation" },
    { name: "Custom Kits", path: "/services#custom-kits" },
    { name: "Events Makeup", path: "/services#events" },
  ],
  Company: [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/about#team" },
    { name: "Careers", path: "/about#careers" },
    { name: "Press", path: "/about#press" },
  ],
};

const socialLinks = [
  { icon: <FiInstagram />, label: "Instagram", color: "hover:text-pink-600" },
  { icon: <FiFacebook />, label: "Facebook", color: "hover:text-blue-600" },
  { icon: <FiTwitter />, label: "Twitter", color: "hover:text-sky-500" },
  { icon: <FiYoutube />, label: "YouTube", color: "hover:text-red-600" },
];

export default function Footer() {
  return (
    <footer className="bg-[#B9A281] text-[#333333] mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-pink-500 flex items-center justify-center">
                <RiPaletteLine className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Makeup Studio</h2>
              </div>
            </Link>
            <p className="mb-6 max-w-md">
              Discover premium beauty products, expert tutorials, and
              personalized beauty consultations. Elevate your makeup game with
              our curated collection.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <FiMapPin className="w-5 h-5 text-primary-400" />
                <span>123 Beauty Street, Los Angeles, CA 90210</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-primary-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="w-5 h-5 text-primary-400" />
                <span>hello@makeupstudio.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors ${social.color} hover:bg-gray-700`}
                  aria-label={social.label}
                >
                  <span className="text-xl text-white">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold mb-4 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Makeup Studio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
