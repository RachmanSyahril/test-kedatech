// app/contact/page.jsx
"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import {
  ChatBubbleLeftIcon,
  EnvelopeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-500 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            Choose the most convenient method to contact the HomeERP team.
          </p>
        </motion.div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* WhatsApp Card */}
          <motion.a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-green-100 rounded-full">
                <ChatBubbleLeftIcon className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              WhatsApp
            </h3>
            <p className="text-gray-600 mb-4">Quick Response via Chat</p>
            <span className="text-green-600 font-medium">
              +62 812 3456 7890
            </span>
          </motion.a>

          {/* Email Card */}
          <motion.a
            href="mailto:support@homerp.com"
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-blue-100 rounded-full">
                <EnvelopeIcon className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Send message via email</p>
            <span className="text-blue-600 font-medium">
              support@homerp.com
            </span>
          </motion.a>

          {/* Form Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-purple-100 rounded-full">
                <DocumentTextIcon className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              Message Us
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A3F88] focus:border-transparent"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A3F88] focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A3F88] focus:border-transparent"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2A3F88] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#1E2B58] transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
