import { Link } from "react-router-dom";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiCpu,
} from "react-icons/fi";
import { RiCodeBoxLine, RiFlashlightLine } from "react-icons/ri";

const footerLinks = {
  Solutions: [
    { name: "Cloud Services", path: "/services#cloud" },
    { name: "AI & Machine Learning", path: "/services#ai" },
    { name: "Cybersecurity", path: "/services#security" },
    { name: "DevOps Consulting", path: "/services#devops" },
    { name: "Custom Development", path: "/services#development" },
  ],
  Resources: [
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: " Services", path: "/services" },
  ],
};

const socialLinks = [
  { icon: <FiGithub />, label: "GitHub", color: "hover:text-[#FFD700]" },
  { icon: <FiLinkedin />, label: "LinkedIn", color: "hover:text-[#FFD700]" },
  { icon: <FiTwitter />, label: "X (Twitter)", color: "hover:text-[#FFD700]" },
  { icon: <FiGlobe />, label: "Dev.to", color: "hover:text-[#FFD700]" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-auto border-t border-[#FFD700]/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Column - Larger */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div>
                <h2 className="text-2xl font-bold">
                  <span className="text-white">Wincider</span>
                  <span className="text-[#FFD700] ml-1">Tech</span>
                </h2>
                <p className="text-xs text-gray-500">
                  Innovation Driven Excellence
                </p>
              </div>
            </Link>

            <p className="mb-8 text-gray-400 leading-relaxed">
              Empowering businesses through cutting-edge technology solutions.
              From cloud infrastructure to AI-driven analytics, we transform
              complex challenges into seamless digital experiences.
            </p>

            {/* Contact Info with Gold Accents */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#FFD700]/10 flex items-center justify-center border border-[#FFD700]/20 group-hover:bg-[#FFD700]/20 transition-colors">
                  <FiPhone className="w-4 h-4 text-[#FFD700]" />
                </div>
                <span className="text-gray-400">+44 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#FFD700]/10 flex items-center justify-center border border-[#FFD700]/20 group-hover:bg-[#FFD700]/20 transition-colors">
                  <FiMail className="w-4 h-4 text-[#FFD700]" />
                </div>
                <span className="text-gray-400">hello@wincider.tech</span>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-8 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-full text-xs text-[#FFD700]">
                Cloud Native
              </span>
              <span className="px-3 py-1 bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-full text-xs text-[#FFD700]">
                AI/ML
              </span>
              <span className="px-3 py-1 bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-full text-xs text-[#FFD700]">
                DevOps
              </span>
              <span className="px-3 py-1 bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-full text-xs text-[#FFD700]">
                Blockchain
              </span>
              <span className="px-3 py-1 bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-full text-xs text-[#FFD700]">
                IoT
              </span>
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-2">
              <h3 className="text-lg font-bold mb-6 text-white relative inline-block">
                {category}
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#FFD700] rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-[#FFD700] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[#FFD700] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#FFD700]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Wincider Technologies. All rights
              reserved.
            </p>
            <div className="flex gap-8 text-sm">
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-[#FFD700] transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-gray-500 hover:text-[#FFD700] transition-colors"
              >
                Terms
              </Link>
              <Link
                to="/cookies"
                className="text-gray-500 hover:text-[#FFD700] transition-colors"
              >
                Cookies
              </Link>
              <Link
                to="/sitemap"
                className="text-gray-500 hover:text-[#FFD700] transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
