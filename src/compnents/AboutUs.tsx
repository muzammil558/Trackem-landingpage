/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import useAnimateOnView from "./useAnimateOnView";

function AboutUs() {
  // Create refs and view states for each motion.div
  const [contentRef, contentInView] = useAnimateOnView<HTMLDivElement>();
  const [imageRef, imageInView] = useAnimateOnView<HTMLDivElement>();

  return (
    <div className="aboutus " id="about">
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, x: 100 }}
        animate={
          contentInView ? { opacity: 1, x: [-200, 0] } : { opacity: 0, x: 100 }
        }
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="Aboutus-content"
      >
        <h1>About Us</h1>
        <p>What drives you to achieve your goals?</p>
        <p>
          We believe that everyone has the potential to achieve their dreams and
          aspirations. Our team is passionate about empowering you to take
          control of your goals and progress. Thats why we created Trackem - to
          provide a simple, yet powerful tool to help you track your path to
          success.
          <br /> Every step you take, and every goal you achieve, is a testament
          to your potential. Trackem combines goal setting, task management, and
          habit tracking in one user-friendly platform. Easily create new goals,
          break them down into tasks, and build productive habits. Track your
          progress with detailed analytics and stay motivated with personalized
          reminders and rewards.
        </p>
      </motion.div>
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: -100 }}
        animate={
          imageInView ? { opacity: 1, x: [200, 0] } : { opacity: 0, x: 100 }
        }
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="Aboutus-img"
      >
        <img src="/AboutUs-img.png" alt="" />
      </motion.div>
    </div>
  );
}

export default AboutUs;
