/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import useAnimateOnView from "./useAnimateOnView";

function Header() {
  // Create refs and view states for each motion.div
  const [contentRef, contentInView] = useAnimateOnView<HTMLDivElement>();
  const [mobileRef] = useAnimateOnView<HTMLDivElement>();

  return (
    // Added overflow-x-hidden to prevent horizontal overflow
    <div className="header-bg" id="home">
      <div className="header-container">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, x: 100 }}
          animate={
            contentInView
              ? { opacity: 1, x: [-200, 0] }
              : { opacity: 0, x: 100 }
          }
          transition={{ duration: 1, ease: "easeInOut" }}
          className="header-content"
        >
          <div className="header-img">
            <img src="/header-trackem-pic.png" alt="" />
          </div>
          <div className="header-img-content">
            <h2>Track Your Path To Success</h2>
            <div className="fade-line"></div>
            <p>
              Set Goals. Track Progress. Achieve Dreams with our all-in-one
              Tracking App. Create new goals, manage tasks and habits, and keep
              a detailed record of your progress effortlessly. Start your
              journey towards success today!
            </p>
            <button>Download Now</button>
          </div>
        </motion.div>
        <motion.div
          ref={mobileRef}
          initial={{ opacity: 0, x: -100 }}
          animate={
            contentInView ? { opacity: 1, x: [200, 0] } : { opacity: 0, x: 100 }
          }
          transition={{ duration: 1, ease: "easeInOut" }}
          className="header-mobile-pic"
        >
          <img src="/header-mobile.png" alt="" />
        </motion.div>
      </div>
      <a className="arrow" href="#about">
        <img src="/Vector (4).png" alt="" />
      </a>
    </div>
  );
}

export default Header;
