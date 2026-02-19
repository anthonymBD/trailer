import { NavLink, Link } from "react-router-dom";
import { navLinks, logo } from "../../constants/global";

export default function DesktopNav() {
    return (
        <div className="hidden md:flex w-full items-center justify-between m-28">

            {/* LOGO */}
            <Link to="/" className="flex items-center">
                <img
                    src={logo.image}
                    alt={logo.title}
                    className="h-7 w-auto hover:opacity-100 transition"
                />
                <span className="sr-only">{logo.title}</span>
            </Link>

            {/* NAV */}
            <nav className="flex items-center gap-7">

                {navLinks.map((link) => {
                    const href = link.href ?? "";
                    const isTel = href.startsWith("tel:");
                    const isHash = href.startsWith("#");
                    const isRoute = href.startsWith("/");
                    const Icon = link.icon;

                    // CTA
                    if (link.isCta) {
                        const content = (
                            <>
                                {Icon && <Icon className="w-4 h-4" />}
                                {link.label}
                            </>
                        );

                        if (isRoute) {
                            return (
                                <Link
                                    key={link.id}
                                    to={href}
                                    className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-md hover:-translate-y-px transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
                                >
                                    {content}
                                </Link>
                            );
                        }

                        return (
                            <a
                                key={link.id}
                                href={href}
                                className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-md hover:-translate-y-px transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
                            >
                                {content}
                            </a>
                        );
                    }

                    // Hash/tel links
                    if (isTel || isHash) {
                        return (
                            <a
                                key={link.id}
                                href={href}
                                className="rounded-full px-3 py-2 text-sm font-medium text-primary/70 hover:text-primary hover:bg-black/4 transition-colors"
                            >
                                {link.label}
                            </a>
                        );
                    }

                    // Internal route
                    return (
                        <NavLink
                            key={link.id}
                            to={href}
                            className={({ isActive }) =>
                                `rounded-full px-3 py-2 text-sm font-medium transition-colors ${isActive
                                    ? "text-primary bg-black/4"
                                    : "text-primary/60 hover:text-primary hover:bg-black/4"
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    );
                })}
            </nav>
        </div>
    );
}
