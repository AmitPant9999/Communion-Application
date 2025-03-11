import { Link, useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const [isEventsClicked, setIsEventsClicked] = useState(false);
  const location = useLocation();
  const previousLocation = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleEventsClick = () => {
    setIsEventsClicked(true);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleOtherLinkClick = () => {
    setIsEventsClicked(false);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (previousLocation.current && location.pathname !== "/events") {
      setIsEventsClicked(false);
    }
    previousLocation.current = location;
  }, [location]);

  return (
    <div className="flex justify-between items-center p-4">
      <div className="hidden md:flex gap-8 text-sm font-bold items-center">
        <Link to="/" onClick={handleOtherLinkClick} className="hover:text-blue-500">
          Home
        </Link>
        <Link to="/about" onClick={handleOtherLinkClick} className="hover:text-blue-500">
          About
        </Link>
        <Link to="/events" onClick={handleEventsClick} className="hover:text-blue-500">
          Events
        </Link>
        {isEventsClicked && (
          <a href="#addevent" className="hover:cursor-pointer hover:text-blue-500">
            Add Event
          </a>
        )}
       
        <Link
          to="/events"
          className="bg-transparent border border-black hover:bg-black hover:text-white py-2 px-4 rounded-md transition-colors duration-300"
        >
          Join Us
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white md:hidden">
          <div className="flex flex-col items-center gap-4 py-4">
            <Link to="/" onClick={handleOtherLinkClick} className="hover:text-blue-500">
              Home
            </Link>
            <Link to="/about" onClick={handleOtherLinkClick} className="hover:text-blue-500">
              About
            </Link>
            <Link to="/events" onClick={handleEventsClick} className="hover:text-blue-500">
              Events
            </Link>
            {isEventsClicked && (
              <a href="#addevent" className="hover:cursor-pointer hover:text-blue-500">
                Add Event
              </a>
            )}
            <Link to="/support" onClick={handleOtherLinkClick} className="hover:text-blue-500">
              Support
            </Link>
            <Link
              to="/events"
              className="bg-transparent border border-black hover:bg-black hover:text-white py-2 px-4 rounded-md transition-colors duration-300"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;