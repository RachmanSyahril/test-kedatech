"use client";
import About from "@/components/about";
import PFadeIn from "@/components/animation/PFadeIn";
import Pricing from "@/components/pricing";
import Header from "@/components/ui/header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="text-center px-4 sm:px-8 py-10">
        <div className="mt-36"></div>
        <PFadeIn>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </PFadeIn>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="italic text-gray-500 my-6 text-sm sm:text-base"
        >
          &quot; Excepteur sint occaecat cupidatat non proident &quot;
        </motion.blockquote>

        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            src="/illustration-placeholder.svg"
            alt="chart illustration"
            className="w-48 sm:w-64 h-auto"
          />
        </div>
      </main>

      {/* Wave Shape Decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="url(#gradient)"
            d="M0,128L80,160C160,192,320,256,480,256C640,256,800,192,960,154.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="url(#gradient1)"
            d="M1440,192L1360,160C1280,128,1120,64,960,64C800,64,640,128,480,165.3C320,203,160,213,80,218.7L0,224L0,0L80,0C160,0,320,0,480,0C640,0,800,0,960,0C1120,0,1280,0,1360,0L1440,0Z"
          ></path>
          <defs>
            <linearGradient id="gradient1" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <About />

      <Pricing />
    </div>
  );
}
