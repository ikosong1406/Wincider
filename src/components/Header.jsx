import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiTool,
  FiImage,
  FiMail,
  FiShoppingBag,
  FiUser,
  FiSearch,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";
import { RiPaletteLine, RiCloseLine, RiMenuLine } from "react-icons/ri";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-[#ffda93]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500 flex items-center justify-center shadow-lg">
                  <RiPaletteLine className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold bg-pink-600 bg-clip-text text-transparent">
                    Makeup Studio
                  </h1>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 font-medium transition-all ${
                    location.pathname === item.path
                      ? "border-b-2 border-[#33333] text-primary-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? (
                  <RiCloseLine className="w-6 h-6 text-[#333333]" />
                ) : (
                  <RiMenuLine className="w-6 h-6 text-[#333333]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-55">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <div className="fixed top-0 left-0 bottom-0 w-80 bg-[#333333] shadow-xl animate-slide-in">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500 flex items-center justify-center">
                  <RiPaletteLine className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#ffda93]">
                    Makeup Studio
                  </h2>
                  <p className="text-sm text-[#B9A281]">Navigation Menu</p>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <RiCloseLine className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="p-4">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                      location.pathname === item.path
                        ? "bg-[#ffda93] text-[#333333]"
                        : "text-[#B9A281] hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 px-4">
                <p className="text-sm text-[#B9A281] mb-2">Need help?</p>
                <p className="text-[#ffda93] font-medium">+1 (555) 123-4567</p>
                <p className="text-sm text-[#B9A281] mt-1">
                  contact@makeupstudio.com
                </p>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Add animation keyframes to index.css or use inline style */}
      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
