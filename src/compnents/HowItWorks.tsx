/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import useAnimateOnView from "./useAnimateOnView";

function HowItWorks() {
  // Create refs and view states for each motion.div
  const [contentRef, contentInView] = useAnimateOnView<HTMLDivElement>();
  const [imageRef, imageInView] = useAnimateOnView<HTMLDivElement>();

  return (
    <div className="aboutus hITwork ">
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, x: 100 }}
        animate={
          contentInView ? { opacity: 1, x: [-200, 0] } : { opacity: 0, x: 100 }
        }
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="Aboutus-content HIW-content"
      >
        <h1>How it works</h1>
        <p>
          Trackem is designed to be intuitive and user-friendly, ensuring you
          can start achieving your goals in just a few simple steps. Download
          the app from the App Store or Google Play, and quickly set up your
          profile and preferences. Define your objectives and break them down
          into manageable tasks, assigning deadlines to stay organized. Stay
          motivated with timely reminders and motivational messages, and
          celebrate your achievements as you reach your milestones.
        </p>
      </motion.div>
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: -100 }}
        animate={
          imageInView ? { opacity: 1, x: [200, 0] } : { opacity: 0, x: 100 }
        }
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="Aboutus-img HIW-img"
      >
        <img src="/Howitwork.png" alt="" />
      </motion.div>
    </div>
  );
}

export default HowItWorks;
