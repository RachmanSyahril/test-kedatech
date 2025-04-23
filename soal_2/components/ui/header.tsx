// components/Header.tsx
"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0  w-full z-50 transition-all duration-300 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 gap-4 sm:gap-0 ${
        scrolled
          ? "bg-white shadow-md backdrop-blur text-gray-900"
          : "bg-transparent text-neutral-300"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image src={"/logo.png"} alt="logo" width={150} height={16} />
      </motion.div>
      <nav className="flex flex-wrap justify-center sm:justify-end items-center space-x-4 sm:space-x-8">
        <a
          href="#about"
          className="font-bold text-cyan-600 hover:text-blue-500"
        >
          ABOUT
        </a>
        <a
          href="#pricing"
          className="font-bold text-cyan-600 hover:text-blue-500"
        >
          PRICING
        </a>
        <a
          href="#contact"
          className="font-bold text-cyan-600 hover:text-blue-500"
        >
          CONTACT
        </a>
        <Button
          variant="outline"
          className="border-2 border-cyan-500 text-cyan-500 hover:border-blue-500 hover:text-blue-5 text-sm sm:text-base"
        >
          LOGIN
        </Button>
      </nav>
    </header>
  );
}
