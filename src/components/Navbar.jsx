import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import { LINKS } from "../constants/main";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Set active link based on current URL path
  useEffect(() => {
    const path = window.location.hash || window.location.pathname;
    setActiveLink(path);
  }, []);

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <a href="" className="text-xl font-bold">
              ZentroLab
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center">
            <ul className="flex space-x-8 items-center">
              {LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`text-black px-2 rounded-sm transition-all duration-300 ${
                    activeLink === link.href
                      ? "bg-secondary underline underline-offset-5"
                      : "hover:bg-secondary hover:underline hover:underline-offset-5"
                  }`}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className={`border border-black rounded-md px-4 py-2 transition-all duration-300 ${
                  activeLink === "#contact"
                    ? "bg-secondary border-secondary"
                    : "hover:bg-secondary hover:border-secondary"
                }`}
                onClick={() => setActiveLink("#contact")}
              >
                Have a Project?
              </a>
            </ul>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-secondary focus:outline-none"
            >
              {isOpen ? (
                <RxCross2 className="size-6" />
              ) : (
                <GiHamburgerMenu className="size-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 z-10">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                  setActiveLink(link.href);
                }}
                className={`text-black px-4 py-2 rounded-sm transition-all duration-300 ${
                  activeLink === link.href
                    ? "bg-secondary"
                    : "hover:bg-secondary"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => {
                setIsOpen(false);
                setActiveLink("#contact");
              }}
              className={`border border-black rounded-md px-4 py-2 transition-all duration-300 ${
                activeLink === "#contact"
                  ? "bg-secondary border-secondary"
                  : "hover:bg-secondary hover:border-secondary"
              }`}
            >
              Have a Project?
            </a>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
