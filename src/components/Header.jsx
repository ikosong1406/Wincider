import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  RiCodeLine,
  RiCloseLine,
  RiMenuLine,
  RiCpuLine,
  RiArrowRightLine,
} from "react-icons/ri";

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
      <header className="sticky top-0 z-50 bg-[#151515] py-2">
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
            <nav className="hidden lg:flex items-center space-x-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 font-medium transition-all relative group rounded-lg ${
                    location.pathname === item.path
                      ? "text-[#FFD700]"
                      : "text-gray-300 hover:text-[#FFD700]"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-[#FFD700] rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Language Indicator */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <span className="text-lg">🇬🇧</span>
                <span className="text-xs font-medium text-white/80">EN</span>
              </div>

              {/* CTA Button - Desktop */}
              <Link
                to="/contact"
                className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-[#FFD700] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#FFD700]/20 transition-all hover:scale-105"
              >
                Contact Us
                <RiArrowRightLine className="w-4 h-4" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 backdrop-blur-md transition-colors border border-white/20"
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

      {/* Mobile Menu Overlay - Simplified */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Menu Panel - Full width, no sidebar */}
          <div className="fixed inset-x-0 top-16 bottom-0 bg-black/90 backdrop-blur-lg border-t border-white/10">
            <div className="flex flex-col h-full p-6">
              {/* Language Indicator - Mobile */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <span className="text-lg">🇬🇧</span>
                  <span className="text-xs font-medium text-white/80">EN</span>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                        location.pathname === item.path
                          ? "bg-white/10 backdrop-blur-md text-[#FFD700] border border-white/20"
                          : "text-gray-300 hover:bg-white/5 hover:backdrop-blur-md hover:text-[#FFD700] border border-transparent hover:border-white/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* CTA Button - Mobile */}
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#FFD700] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#FFD700]/20 transition-all hover:scale-105"
                >
                  Contact Us
                  <RiArrowRightLine className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
