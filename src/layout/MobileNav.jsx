import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, logo } from "../../constants/global.js";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  // Lock scroll when menu open (Apple behavior)
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  // Escape key closes menu
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <nav className="md:hidden flex w-full items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img src={logo.image} alt={logo.title} className="h-7 w-auto" />
          <span className="sr-only">{logo.title}</span>
        </Link>

        <button
          onClick={openMenu}
          aria-label="Open Menu"
          className="p-2 rounded-full border border-black/10 bg-white/70 backdrop-blur hover:bg-white transition shadow-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-60 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Slide Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[82%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b">
            <div className="flex items-center gap-2">
              <img src={logo.image} alt={logo.title} className="h-7 w-auto" />
              <span className="sr-only">{logo.title}</span>
            </div>

            <button
              onClick={closeMenu}
              aria-label="Close Menu"
              className="p-2 rounded-full border border-black/10 hover:bg-gray-50 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <ul className="flex flex-col px-6 py-6">
            {navLinks.map((link) => {
              const href = link.href ?? "";
              const isTel = href.startsWith("tel:");
              const isHash = href.startsWith("#");
              const isRoute = href.startsWith("/");
              const Icon = link.icon;

              // CTA
              if (link.isCta) {
                return (
                  <li key={link.id}>
                    <a
                      href={href}
                      onClick={closeMenu}
                      className="mt-4 flex items-center justify-center gap-2 rounded-full bg-secondary px-4 py-3 text-base font-semibold text-primary shadow-sm hover:shadow-md transition"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {link.label}
                    </a>
                  </li>
                );
              }

              // Hash/tel links
              if (isTel || isHash) {
                return (
                  <li key={link.id}>
                    <a
                      href={href}
                      onClick={closeMenu}
                      className="block py-4 text-base font-medium border-b border-black/10 last:border-none hover:text-secondary transition"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              }

              // Internal route
              if (isRoute) {
                return (
                <li key={link.id}>
                  <NavLink
                    to={href}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block py-4 text-base font-medium border-b border-black/10 last:border-none transition ${isActive ? "text-secondary" : "text-gray-800 hover:text-secondary"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
                );
              }

              // Fallback (treat unknown hrefs as anchors)
              return (
                <li key={link.id}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className="block py-4 text-base font-medium border-b border-black/10 last:border-none hover:text-secondary transition"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
