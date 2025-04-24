/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add body class when menu is open to enable blur effect
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // Clean up function
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Add an overlay div that appears when menu is open */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="backdrop-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-main">
            {/* Logo - Added onClick to close the menu when logo is clicked */}
            <motion.div
              animate={{ x: [-200, 0] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="navbar-logo"
              onClick={closeMenu}
            >
              <a href="#home">
                <img src="/logo/Trackem-Logo.png" alt="Trackem Logo" />
              </a>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              animate={{ y: [-100, 0] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="navbar-links"
            >
              <a href="#about" className="nav-link">
                About Us
              </a>
              <a href="#features" className="nav-link">
                Features
              </a>
              <a href="#OurApplication" className="nav-link">
                Our Application
              </a>
              <a href="#downloads" className="nav-link">
                Downloads
              </a>
            </motion.div>

            {/* Download Button (Desktop) */}
            <motion.div
              animate={{ x: [200, 0] }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="navbar-button"
            >
              <button className="download-button-nav">Download Now</button>
            </motion.div>

            {/* Mobile menu button */}
            <div className="mobile-menu-toggle">
              <button onClick={toggleMenu} className="toggle-button">
                <span className={`menu-icon ${isMenuOpen ? "open" : ""}`}>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with AnimatePresence for animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu open"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="mobile-menu-content">
                <a
                  href="#about"
                  className="mobile-menu-link"
                  onClick={closeMenu}
                >
                  About Us
                </a>
                <a
                  href="#features"
                  className="mobile-menu-link"
                  onClick={closeMenu}
                >
                  Features
                </a>
                <a
                  href="#OurApplication"
                  className="mobile-menu-link"
                  onClick={closeMenu}
                >
                  Our Application
                </a>
                <a
                  href="#downloads"
                  className="mobile-menu-link"
                  onClick={closeMenu}
                >
                  Downloads
                </a>
                <div className="mobile-menu-button">
                  <button
                    className="mobile-download-button"
                    onClick={closeMenu}
                  >
                    Download Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
