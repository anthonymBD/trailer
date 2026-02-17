import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar = () => {

    return (
        <nav className="bg-white shadow-lg fixed w-full top-0 z-50 ">
            <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <DesktopNav />
                <MobileNav />
            </div>
        </nav>
    )
}
export default Navbar