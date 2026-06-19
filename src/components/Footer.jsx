import { Link } from "react-router-dom";

const footerLinks = {
  Company: [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ],
  Solutions: [
    { name: "Cloud Services", path: "/services#cloud" },
    { name: "AI & Machine Learning", path: "/services#ai" },
    { name: "Cybersecurity", path: "/services#security" },
    { name: "DevOps Consulting", path: "/services#devops" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-gray-300 mt-auto border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Brand Column */}
            <div className="md:col-span-4">
              <Link to="/" className="inline-block mb-3">
                <h2 className="text-xl font-bold">
                  <span className="text-white">Wincider</span>
                  <span className="text-[#FFD700]">Tech</span>
                </h2>
              </Link>
              <p className="text-sm text-gray-500 max-w-xs">
                Building the future through innovative technology solutions.
              </p>
            </div>

            {/* Navigation Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="md:col-span-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                  {category}
                </h3>
                <div className="flex flex-row gap-2.5">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="flex items-center text-sm text-gray-500 hover:text-[#FFD700] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar - Minimal */}
        <div className="py-4 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Wincider Technologies.
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>🇬🇧 EN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
