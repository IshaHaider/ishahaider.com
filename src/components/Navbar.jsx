import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo2.png";
import { NAVIGATION_LINKS } from "../constants";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85; // Adjust this offset based on your navbar height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Use setTimeout to delay hash update until after the scroll completes
      setTimeout(() => {
        window.history.pushState(null, null, href);
      }, 300); // Adjust the timeout duration to match the scroll duration

      setIsMobileMenuOpen(false);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's `md` breakpoint is 768px
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Close the mobile menu on component mount if on a large screen
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Desktop Menu */}
      {!isMobile && (
        <div className="flex items-center justify-between fixed top-0 left-0 right-0 p-4 backdrop-blur-lg shadow-md z-50">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <a href="/#">
              <img src={logo} width={130} alt="logo" className="px-10" />
            </a>
          </div>

          {/* Navbar */}
          <nav className="flex-grow flex items-center justify-center">
            <div className="md:flex mx-auto hidden max-w-2xl items-center justify-center py-3 backdrop-blur-lg">
              <div className="flex items-center justify-between gap-6">
                <div className="flex">
                  {/* <p className="text-4xl font-bold">𝕀𝕊ℍ𝔸.ℍ </p> */}
                </div>
                <div className="flex">
                  <div className="pr-8">
                    <button
                      onClick={toggleDarkMode}
                      className="p-1  rounded bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                    >
                      {isDarkMode ? (
                        <MdOutlineLightMode size={24} />
                      ) : (
                        <MdLightMode size={24} />
                      )}
                    </button>
                  </div>

                  <ul className="flex items-center lg:gap-8 gap-4 pr-4 ">
                    {NAVIGATION_LINKS.map((item, index) => (
                      <li key={index}>
                        <Link to={item.href}>
                          <a
                            className="block w-full text-lg lg:text-2xl hover:text-yellow-400"
                            href={item.href}
                            onClick={(e) => handleLinkClick(e, item.href)}
                          >
                            {item.label}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          {/* Resume Button */}
          <div className="flex flex-shrink-0">
            <a
              href="https://drive.google.com/file/d/1e0ZKHyKitcu-aCrZYiPcgTGkKWbAwFTV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="flex items-center p-2.5 lg:text-2xl text-lg border-2 rounded-full bg-transparent text-white hover:bg-purple-500">
                <span>Resume</span>
                <MdArrowOutward className="ml-2" />
              </button>
            </a>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <div className="flex items-center justify-between fixed top-0 left-0 right-0 p-4 backdrop-blur-lg shadow-md z-50">
          {/* Logo & Resume */}
          <div className="flex flex-col flex-shrink-0 items-center">
            <a href="/#">
              <img src={logo} width={100} alt="logo" />
            </a>
            <a
              href="https://drive.google.com/file/d/1e0ZKHyKitcu-aCrZYiPcgTGkKWbAwFTV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block pt-2"
            >
              <button className="flex items-center text-sm p-2 border-2 rounded-full bg-transparent text-white hover:bg-purple-500">
                <span>Resume</span>
                <MdArrowOutward className="ml-2" />
              </button>
            </a>
          </div>
          {/* NavBar DropDown */}
          {isMobileMenuOpen && (
            <nav className="absolute right-16 top-4 w-5/12 mt-2 rounded-lg backdrop-blur-lg bg-white/50 shadow-lg z-100">
              <div className="ml-4 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200">
              <div className="pl-4 pt-8">
                    <button
                      onClick={toggleDarkMode}
                      className="p-1  rounded bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                    >
                      {isDarkMode ? (
                        <MdOutlineLightMode size={15} />
                      ) : (
                        <MdLightMode size={15} />
                      )}
                    </button>
                  </div>
                <ul className="flex flex-col gap-2 py-4 pr-4">
                  {NAVIGATION_LINKS.map((item, index) => (
                    <li key={index}>
                      <Link to={item.href}>
                        <a
                          className=" block w-full text-lg pl-4 font-semibold hover:text-black hover:bg-white/50 hover:shadow-lg hover:rounded-lg"
                          href={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                        >
                          {item.label}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          )}
          {/* NavBar Icon*/}
          <div className="relative flex items-center">
            <button className="focus:outline-none" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <FaTimes className="m-2 h-6 w-5" />
              ) : (
                <FaBars className="m-2 h-6 w-5" />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
