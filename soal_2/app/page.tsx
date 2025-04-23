"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Header from "@/components/ui/header";
import Wave from "@/components/ui/wave";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Wave Shape Decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-[-20vh] mb-[-15vh]"
      >
        <Wave />
      </motion.div>

      <About />

      <Pricing />

      <Contact />

      <Footer />
    </div>
  );
}
