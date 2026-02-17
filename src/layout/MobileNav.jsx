import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, logo } from "../../constants/global.js";


const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((s) => !s);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setIsMenuOpen(false); };
    if (isMenuOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  return (
    <>
      <nav className="md:hidden" role="navigation" aria-label="Mobile Navigation">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <img src="/images/logo.png" alt={logo.title} className="w-8 h-8" />
            <p className="text-xl font-bold text-gray-900">{logo.title}</p>
          </Link>

          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden mt-4`}>
        <ul className="flex flex-col gap-4 p-4 bg-gray-50 rounded-md">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                onClick={closeMenu}
                className="block font-medium transition-colors hover:text-blue-600"
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileNav;