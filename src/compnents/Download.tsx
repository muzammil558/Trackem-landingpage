"use client";
import { motion } from "framer-motion";
import useAnimateOnView from "./useAnimateOnView";

function Download() {
  // Create ref and view state for the motion.div
  const [contentRef, contentInView] = useAnimateOnView<HTMLDivElement>();

  return (
    <div className="div-1" id="downloads">
      <div className="div-2">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 50 }}
          animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="div-3"
        >
          <div className="download-content ">
            <h1>Want to achieve your goals?</h1>
            <p>
              Download Track&apos;em and get instant access to a powerful
              goal-achieving app that fuels your motivation, boosts your
              productivity, and celebrates your successes. Join the thousands of
              achievers who have already chased their dreams.
              <br />
              What are you waiting for? Download Track&apos;em now and start
              making progress today!
            </p>
            <div className="download-button-container">
              <h3>Get the App now</h3>
              <div className="download-button">
                <button className="android"></button>
                <button className="iso"></button>
              </div>
            </div>
          </div>
          <div className="download-image"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default Download;
