import { Link } from "react-router-dom";
import Logo from "../assets/med-images/logo.svg";

function Header() {
  return (
    <div className="fixed top-0 w-full z-20 bg-white shadow-md px-1 md:px-5 lg:px-5 md:py-5 py-3 lg:py-5">
      <div className="px-2 md:px-8 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <img className="h-7 md:h-8 lg:h-8" src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <button className="text-sm lg:text-base md:text-base px-5 py-3 bg-[#1010eb] mx-1.5 rounded-full flex justify-center items-center text-white hover:bg-[#0e0ec4] border-0 ">
              Request call back
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Header;
