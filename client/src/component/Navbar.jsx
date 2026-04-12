import { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import insiro from "../assets/insiro_logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the click-outside logic

  // Handle closing menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      ref={menuRef}
      className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={insiro} alt="logo" className="w-20" />
            <span className="mt-2 font-bold font-serif text-lg text-gray-500">
              | INSIRO
            </span>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 mx-8 max-w-2xl">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <CiSearch className="w-5 h-5" />
              </span>
              <input
                type="text"
                placeholder="Search questions, users..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-all"
              />
            </div>
          </div>

          {/* Links and Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 ml-2">
              <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 transition-all">
                Log in
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 shadow-md transition-all">
                Sign up
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none p-2"
            >
              <svg
                className="h-6 w-6 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content (Animated) */}
      <div
        className={`md:hidden bg-white border-b border-gray-200 px-4 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-80 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-2 space-y-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <CiSearch className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <a
            href="#"
            className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md font-medium"
          >
            Products
          </a>

          <div className="grid grid-cols-2 gap-2">
            <button className="w-full py-2 text-center text-blue-600 border border-blue-200 rounded-md bg-blue-50">
              Log in
            </button>
            <button className="w-full py-2 text-center text-white bg-blue-500 rounded-md shadow-sm">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
