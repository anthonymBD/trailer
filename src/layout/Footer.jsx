import React from "react";
import { footer,logo } from "../../constants/global";

const Footer = () => {
  return (
    <footer className="bg-[#2C4251] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* BRAND */}
          <div>
            <div className="mb-6 text-2xl font-bold tracking-wide">
            {logo.title}
            </div>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              {footer.description}
            </p>
          </div>

          {/* COLUMNS */}
          {footer.columns.map((column, i) => (
            <div key={i}>
              <h4 className="uppercase text-sm tracking-wider mb-5 text-white/90">
                {column.title}
              </h4>

              <ul className="space-y-3">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-white/20 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center text-sm text-white/60">

          <p> designed and coded by anthony morlett</p>

          <div className="flex gap-6">
            {footer.bottom.social?.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
