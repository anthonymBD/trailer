import React from "react";
import { FiInstagram, FiFacebook, FiYoutube, FiPhone } from "react-icons/fi";
import { footer, logo } from "../../constants/global";

const Footer = () => {
  return (
    <footer id="contact" className="scroll-mt-20 bg-[#2C4251] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* BRAND */}
          <div>
            <img src={logo.image} alt={logo.title} className="h-8 mb-6" />

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

          <p>Designed & coded by Anthony Morlett</p>

          {/* ICON SOCIALS */}
          <div className="flex gap-5 text-lg">
            {footer.bottom.social.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  <Icon />
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
