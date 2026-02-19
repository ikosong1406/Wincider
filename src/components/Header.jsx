import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { RiCodeLine, RiCloseLine, RiMenuLine, RiCpuLine } from "react-icons/ri";

const navigation = [
  { name: "Home", path: "/" },
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
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/90 border-b border-[#FFD700]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3">
                <div className="">
                  <h1 className="text-xl font-bold">
                    <span className="text-white">Wincider</span>
                    <span className="text-[#FFD700] ml-1">Tech</span>
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
                  className={`flex items-center gap-2 px-4 py-2 font-medium transition-all relative group ${
                    location.pathname === item.path
                      ? "text-[#FFD700]"
                      : "text-gray-300 hover:text-[#FFD700]"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFD700] rounded-full" />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] rounded-full transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-[#FFD700]/10 transition-colors border border-[#FFD700]/20"
              >
                {isMenuOpen ? (
                  <RiCloseLine className="w-6 h-6 text-[#FFD700]" />
                ) : (
                  <RiMenuLine className="w-6 h-6 text-[#FFD700]" />
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
            className="fixed inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <div className="fixed top-0 left-0 bottom-0 w-80 bg-black border-r border-[#FFD700]/20 shadow-xl animate-slide-in">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#FFD700]/20">
              <div className="flex items-center gap-3">
                <div>
                  <h2 className="text-lg font-bold">
                    <span className="text-white">Wincider</span>
                    <span className="text-[#FFD700] ml-1">Tech</span>
                  </h2>
                  <p className="text-sm text-gray-400">
                    Innovation & Excellence
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-[#FFD700]/10 border border-[#FFD700]/20"
              >
                <RiCloseLine className="w-6 h-6 text-[#FFD700]" />
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
                        ? "bg-gradient-to-r from-[#FFD700]/10 to-[#DAA520]/10 text-[#FFD700] border border-[#FFD700]/20"
                        : "text-gray-300 hover:bg-[#FFD700]/5 hover:text-[#FFD700]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Add animation keyframes */}
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
