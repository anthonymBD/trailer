import { NavLink, Link } from "react-router-dom";
import { navLinks, logo } from "../../constants/global.js";

export default function DesktopNav() {
    return (
        <div className="hidden md:flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
            
                <p>
                    <img
                        src={logo.image}
                        alt=""
                      
                    />

                    {logo.title}</p>
            </Link>

            <nav className="flex items-center gap-4">

                {navLinks.map((link) => {
                    const isExternal = link.path.startsWith("tel:");

                    // External links (phone, email, http)
                    if (isExternal) {
                        return (
                            <a
                                key={link.id}
                                href={link.path}
                                className="text-primary px-5 w-full hover:underline"
                            >
                                {link.title}
                            </a>
                        );
                    }

                    // Internal routes
                    return (
                        <NavLink
                            key={link.id}
                            to={link.path}
                            className={({ isActive }) =>
                                `px-5 w-full hover:underline ${isActive ? "font-semibold text-secondary" : "text-gray-700"
                                }`
                            }
                        >
                            {link.title}
                        </NavLink>
                    );
                })}

            </nav>
        </div>
    );
}
