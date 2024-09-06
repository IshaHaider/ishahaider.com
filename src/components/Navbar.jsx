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
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => {
      if (!prevState) {
        // If the menu is being opened, reset the active link
        setActiveLink("");
      }
      return !prevState; // Toggle the menu state
    });
  };

  const [activeLink, setActiveLink] = useState(""); // Track the active link

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

      // Set the active link to the one that was clicked
      setActiveLink(href);
      setIsMobileMenuOpen(false);
    }
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
        <div className="flex items-center justify-between fixed top-0 left-2 right-0 backdrop-blur-lg shadow-md z-50">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <a href="/#">
              <img src={logo} width={160} alt="logo" className="px-10" />
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
          <div className="relative flex flex-shrink-0">
            <a
              href="https://drive.google.com/file/d/1e0ZKHyKitcu-aCrZYiPcgTGkKWbAwFTV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block right-8"
            >
              <button className="flex items-center p-2.5 lg:text-2xl text-lg border-2 rounded-full bg-transparent text-white hover:bg-purple-500">
                <span>Resume</span>
                <MdArrowOutward className="ml-" />
              </button>
            </a>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <div className="relative">
          {/* NavBar Icon */}
          <div className="fixed top-0 left-0 right-0 backdrop-blur-lg shadow-md z-50 flex items-center justify-between">
            <div className="flex items-center">
              <a href="/#">
                <img src={logo} width={100} alt="logo" />
              </a>
            </div>
            <div
              className={`absolute top-6 ${
                isMobileMenuOpen
                  ? "left-[47%] transform -translate-x-1/2"
                  : "right-4"
              }`}
            >
              {" "}
              {/* Ensures button is at top-right */}
              {/* Single button to toggle the side menu */}
              <button
                className="focus:outline-none h-10 w-10 text-white"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="h-10 w-10" />
                ) : (
                  <FaBars className="h-10 w-10" />
                )}
              </button>
            </div>
          </div>

          {/* Side Panel */}
          {isMobileMenuOpen && (
            <nav className="fixed top-0 right-0 h-full w-1/2 bg-sky-950 shadow-lg z-50 p-4 flex flex-col rounded-l-lg">
              <div className="overflow-y-auto">
                <ul className="flex flex-col gap-6 mt-2">
                  {NAVIGATION_LINKS.map((item, index) => (
                    <li key={index}>
                      <Link to={item.href}>
                        <a
                          className={`block text-lg font-semibold p-2 rounded ${
                            activeLink === item.href
                              ? "text-black bg-gray-300"
                              : "text-white"
                          } hover:bg-gray-300 hover:text-black focus:bg-gray-300 focus:text-black `}
                          href={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                        >
                          {item.label}
                        </a>
                      </Link>
                    </li>
                  ))}
                  <a
                    href="https://drive.google.com/file/d/1e0ZKHyKitcu-aCrZYiPcgTGkKWbAwFTV/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block bottom-0"
                  >
                    <button className="flex items-center p-2.5 lg:text-2xl text-lg border-2 rounded-full bg-transparent text-white hover:bg-gray-300 hover:text-black focus:bg-gray-300 focus:text-black"
                    >
                      <span>Resume</span>
                      <MdArrowOutward className="ml-" />
                    </button>
                  </a>
                </ul>
              </div>
            </nav>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
