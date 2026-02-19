import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { useEffect, useRef } from "react";

const Navbar = () => {
    const navRef = useRef(null);

    useEffect(() => {
        const setHeight = () => {
            if (navRef.current) {
                document.documentElement.style.setProperty(
                    "--nav-h",
                    `${navRef.current.offsetHeight}px`
                );
            }
        };

        setHeight();
        window.addEventListener("resize", setHeight);
        return () => window.removeEventListener("resize", setHeight);
    }, []);

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-black/5 bg-white py-4 h-22">
            <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <DesktopNav />
                <MobileNav />
            </div>
        </nav>
    )
}
export default Navbar