"use client"
import Header from "@/components/header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="text-center px-4 sm:px-8 py-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-600 max-w-2xl mx-auto mb-6 text-sm sm:text-base"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>

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
        className="mt-16"
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
      </motion.div>
    </div>
  );
}
