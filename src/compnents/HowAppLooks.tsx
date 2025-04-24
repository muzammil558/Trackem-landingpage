"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useAnimateOnView from "./useAnimateOnView";

export default function HowAppLooks() {
  // Header animations
  const [headerTitleRef, headerTitleInView] =
    useAnimateOnView<HTMLDivElement>();
  const [headerTextRef, headerTextInView] = useAnimateOnView<HTMLDivElement>();

  // Section 1 animations
  const [section1ContentRef, section1ContentInView] =
    useAnimateOnView<HTMLDivElement>();
  const [section1ImageRef, section1ImageInView] =
    useAnimateOnView<HTMLDivElement>();

  // Section 2 animations
  const [section2ContentRef, section2ContentInView] =
    useAnimateOnView<HTMLDivElement>();
  const [section2ImageRef, section2ImageInView] =
    useAnimateOnView<HTMLDivElement>();

  // Section 3 animations
  const [section3ContentRef, section3ContentInView] =
    useAnimateOnView<HTMLDivElement>();
  const [section3ImageRef, section3ImageInView] =
    useAnimateOnView<HTMLDivElement>();

  return (
    <div className="showcase-container" id="OurApplication">
      <div className="showcase-header">
        <motion.h1
          ref={headerTitleRef}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={
            headerTitleInView
              ? { scale: [1.5, 0.5, 1], opacity: 1 }
              : { scale: 0.5, opacity: 0 }
          }
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          How Our App Looks
        </motion.h1>
        <motion.p
          ref={headerTextRef}
          initial={{ opacity: 0 }}
          animate={headerTextInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          We&apos;ve crafted a sleek and modern design that&apos;s easy to
          navigate, with a customizable dashboard that feels like home. Our
          typography is clear and readable, like a good friend&apos;s advice,
          and our icons are colorful and intuitive, like a warm smile. Our
          charts and graphs are visually appealing, making it easy to celebrate
          your progress. We&apos;ve also added bright colors like a big hug in a
          digital form - they&apos;ll envelop you in positivity and inspire you
          to tackle your goals with enthusiasm and joy!
        </motion.p>
      </div>

      <section className="feature-section">
        <motion.div
          ref={section1ContentRef}
          initial={{ opacity: 0, x: 100 }}
          animate={
            section1ContentInView
              ? { opacity: 1, x: [-200, 0] }
              : { opacity: 0, x: 100 }
          }
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="feature-content"
        >
          <h2>Welcome To Track&apos;em!</h2>
          <p>
            Welcome to Track&apos;em!
            <br />
            <strong>New here?</strong> We&apos;re thrilled to have you on board!
            Track&apos;em is your personalized goal-tracking companion, designed
            to help you explore your dreams. Take a look at your goals, and
            start crushing them!
            <br />
            <strong>Already a member?</strong> Welcome back! We&apos;re glad
            you&apos;re here to track your progress. Keep up the amazing work,
            and we&apos;ll keep pushing forward. One touch at a time, let&apos;s
            achieve greatness together!
          </p>
        </motion.div>
        <motion.div
          ref={section1ImageRef}
          initial={{ opacity: 0, x: -100 }}
          animate={
            section1ImageInView
              ? { opacity: 1, x: [200, 0] }
              : { opacity: 0, x: 100 }
          }
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="phones-container"
        >
          <Image
            src="/HOAL1.png"
            alt="Track'em app welcome screen"
            width={280}
            height={560}
            className="phone-mockup"
          />
        </motion.div>
      </section>

      <section className="feature-section reverse">
        <motion.div
          ref={section2ContentRef}
          initial={{ opacity: 0, x: -100 }}
          animate={
            section2ContentInView
              ? { opacity: 1, x: [200, 0] }
              : { opacity: 0, x: 100 }
          }
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="feature-content"
        >
          <h2>Homepage And Detail Page</h2>
          <p>
            The <strong>Homepage</strong> serves as your central hub, seamlessly
            switching between Tasks and Goals with a simple tap. Here,
            you&apos;ll find a clean, organized layout with a comprehensive
            overview of your long-term ambitions. With detailed analytics and
            progress charts, Track&apos;em ensures you stay focused and
            motivated to achieve your dreams.
            <br />
            On the <strong>Detail Page</strong>, dive deep into your objectives
            with milestones, deadlines, and progress charts all in one place.
            Connect your goals with notes, attachments, and priority levels to
            stay organized and motivated!
          </p>
        </motion.div>
        <motion.div
          ref={section2ImageRef}
          initial={{ opacity: 0, x: 100 }}
          animate={
            section2ImageInView
              ? { opacity: 1, x: [-200, 0] }
              : { opacity: 0, x: 100 }
          }
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="phones-container"
        >
          <Image
            src="/HOAL2.png"
            alt="Track'em app homepage"
            width={280}
            height={560}
            className="phone-mockup"
          />
        </motion.div>
      </section>

      <section className="feature-section">
        <motion.div
          ref={section3ContentRef}
          initial={{ opacity: 0, x: 100 }}
          animate={
            section3ContentInView
              ? { opacity: 1, x: [-200, 0] }
              : { opacity: 0, x: 100 }
          }
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="feature-content"
        >
          <h2>Create New Task And Goal Page</h2>
          <p>
            Easily create new tasks and goals with Track&apos;em&apos;s
            intuitive interface. Define your goal—whether personal,
            professional, short or long-term—and break it down in your own
            terms. With our user-friendly forms to enter details, add reminders,
            and set milestones.
            <br />
            Organize with categories and tags for better organization. With
            Track&apos;em, setting up your path to success is quick, simple, and
            efficient. Start now and take the first step towards achieving your
            dreams!
          </p>
        </motion.div>
        <motion.div
          ref={section3ImageRef}
          initial={{ opacity: 0, x: -100 }}
          animate={
            section3ImageInView
              ? { opacity: 1, x: [200, 0] }
              : { opacity: 0, x: 100 }
          }
          transition={{ duration: 0.75, ease: "easeInOut" }}
          className="phones-container"
        >
          <Image
            src="/HOAL3.png"
            alt="Track'em app task creation"
            width={280}
            height={560}
            className="phone-mockup"
          />
        </motion.div>
      </section>
    </div>
  );
}
