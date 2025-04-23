// components/Footer.jsx
"use client";

import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#1E2B58] text-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">HomERP</h3>
            <p className="text-sm">
              Modern business management solutions for Indonesian SMEs
            </p>
            <div className="flex space-x-4">
              <GlobeAltIcon className="w-6 h-6 text-white" />
              <span className="text-sm">www.homerp.id</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Pricing", "Features", "Blog"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm hover:text-cyan-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPinIcon className="w-5 h-5 mt-1 text-cyan-500" />
                <span className="text-sm">
                  Jl. Teknologi No. 123
                  <br />
                  Jakarta Selatan, Indonesia
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5 text-cyan-500" />
                <a
                  href="tel:+628123456789"
                  className="text-sm hover:text-cyan-500"
                >
                  +62 812 3456 789
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="w-5 h-5 text-cyan-500" />
                <a
                  href="mailto:info@homerp.id"
                  className="text-sm hover:text-cyan-500"
                >
                  info@homerp.id
                </a>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Newsletter</h4>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-lg bg-white/10 border border-gray-400 focus:outline-none focus:border-cyan-500 text-sm"
              />
              <button
                type="submit"
                className="bg-cyan-500 text-[#2A3F88] py-2 px-4 rounded-lg font-medium hover:bg-cyan-600 transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>

            {/* Social Media */}
            {/* <div className="flex space-x-4 mt-4">
              {[
                { icon: FacebookIcon, name: "Facebook" },
                { icon: TwitterIcon, name: "Twitter" },
                { icon: LinkedinIcon, name: "LinkedIn" },
                { icon: InstagramIcon, name: "Instagram" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div> */}
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm">© {currentYear} HomERP. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
