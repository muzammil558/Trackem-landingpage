"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useAnimateOnView from "./useAnimateOnView";

function Features() {
  // Create refs and view states for each motion element
  const [titleRef, titleInView] = useAnimateOnView<HTMLDivElement>();
  const [card1Ref, card1InView] = useAnimateOnView<HTMLDivElement>();
  const [card2Ref, card2InView] = useAnimateOnView<HTMLDivElement>();
  const [card3Ref, card3InView] = useAnimateOnView<HTMLDivElement>();

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    type: "spring",
    stiffness: 60,
    damping: 15,
  };

  return (
    <div className="features-container" id="features">
      <motion.h1
        ref={titleRef}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={
          titleInView
            ? { scale: [1.5, 0.5, 1], opacity: 1 }
            : { scale: 0.5, opacity: 0 }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Features we offer
      </motion.h1>
      <div className="features-content">
        <div className="feature-gradient">
          <motion.div
            ref={card1Ref}
            className="feature-card"
            variants={cardVariants}
            initial="hidden"
            animate={card1InView ? "visible" : "hidden"}
            transition={{ ...transition }}
          >
            <div className="feature-icon">
              <Image
                src="/task.png"
                alt="Create Task Icon"
                width={60}
                height={60}
              />
            </div>
            <h3>Create Task</h3>
            <p>
              Start your day with purpose! Write down the tasks that matter most
              to you. Break down big goals into smaller, achievable steps. With
              Trackem, your daily to-do list becomes a roadmap to success.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={card2Ref}
          className="feature-card"
          variants={cardVariants}
          initial="hidden"
          animate={card2InView ? "visible" : "hidden"}
          transition={{ ...transition, delay: 0.2 }}
        >
          <div className="feature-icon">
            <Image
              src="/goals.png"
              alt="Track Goals Icon"
              width={60}
              height={60}
            />
          </div>
          <h3>Track Goals</h3>
          <p>
            Monitor your progress with our comprehensive goal tracking feature.
            Set clear milestones, visualize your advancement through detailed
            analytics, and celebrate your achievements as you move closer to
            your aspirations.
          </p>
        </motion.div>

        <motion.div
          ref={card3Ref}
          className="feature-card"
          variants={cardVariants}
          initial="hidden"
          animate={card3InView ? "visible" : "hidden"}
          transition={{ ...transition, delay: 0.4 }}
        >
          <div className="feature-icon">
            <Image
              src="/notification.png"
              alt="Notifications Icon"
              width={60}
              height={60}
            />
          </div>
          <h3>Timely Notifications</h3>
          <p>
            Stay on schedule with personalized reminders. Trackem sends you
            timely notifications to ensure you never miss a task or deadline,
            helping you maintain consistency and stay motivated throughout your
            journey.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Features;
