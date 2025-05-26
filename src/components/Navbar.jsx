import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import { LINKS } from "../constants/navLinks";
import logo from "../assets/logo.webp";
import { motion, AnimatePresence } from "framer-motion";
import { container, item, navbarSlide } from "../constants/motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash || "/";
      setActiveLink(currentHash);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <motion.nav
      variants={navbarSlide}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <a href="/" className="text-xl font-bold">
              <img src={logo} alt="logo" className="h-16" />
            </a>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <motion.ul
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex space-x-8 items-center"
            >
              {LINKS.map((link, index) => (
                <motion.li key={index} variants={item}>
                  <a
                    href={link.href}
                    className={`text-black px-2 rounded-sm transition-all duration-300 ${
                      activeLink === link.href
                        ? "bg-secondary underline underline-offset-4"
                        : "hover:bg-secondary hover:underline hover:underline-offset-4"
                    }`}
                    onClick={() => setActiveLink(link.href)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={item}>
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
              </motion.li>
            </motion.ul>
          </div>

          <div className="lg:hidden flex items-center">
            <motion.button
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-secondary focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <RxCross2 className="size-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <GiHamburgerMenu className="size-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              key="mobile-menu"
              variants={container}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 z-40"
            >
              {LINKS.map((link, index) => (
                <motion.li key={index} variants={item}>
                  <a
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
                </motion.li>
              ))}

              <motion.li variants={item}>
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
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
