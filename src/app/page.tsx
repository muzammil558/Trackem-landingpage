"use client";

import AboutUs from "@/compnents/AboutUs";
import Features from "@/compnents/Features";
import Header from "@/compnents/Header";
import HowAppLooks from "@/compnents/HowAppLooks";
import HowItWorks from "@/compnents/HowItWorks";
import Navbar from "@/compnents/Navbar";
import Download from "@/compnents/Download";
import Footer from "@/compnents/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <AboutUs />
      <Features />
      <HowItWorks />
      <HowAppLooks />
      <Download />
      <Footer />
    </div>
  );
}
