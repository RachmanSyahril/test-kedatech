// app/about/page.jsx
"use client";

import { motion } from "framer-motion";
// import { ChevronRightIcon } from "@heroicons/react/24/outline";

const timeline = [
  {
    date: "Q1 2024",
    title: "Ideation & Research",
    content:
      "The idea for HomERP was born from challenges faced by small business owners in tracking inventory and profits manually. Market validation followed.",
  },
  {
    date: "Q2 2024",
    title: "MVP Development",
    content:
      "Built the MVP with core features like inventory logs, profit tracking, and dashboards. Focused on simplicity and usability.",
  },
  {
    date: "Q3 2024",
    title: "Closed Beta Launch",
    content:
      "Onboarded our first users—local entrepreneurs—and gathered feedback to refine the system.",
  },
  {
    date: "Q4 2024",
    title: "Public Launch",
    content:
      "Released HomERP publicly with a polished UI, reliable performance, and improved insights dashboard.",
  },
  {
    date: "2025+",
    title: "Scaling & Innovation",
    content:
      "Expanding with analytics, mobile support, and integrations with POS & e-commerce platforms.",
  },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-50">
      {/* About */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-500 mb-8"
          >
            About HomERP
          </motion.h2>

          <div className="space-y-6 text-gray-600">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              HomERP is a modern ERP-inspired web platform tailored for small
              and growing businesses. We empower entrepreneurs to effortlessly
              manage and track inventory movements and record daily profits—all
              from a single, easy-to-use interface.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Our goal is simple: make business operations smarter, faster, and
              fully digital. With HomERP, business owners can say goodbye to
              manual bookkeeping and excel sheets. We provide clear visibility
              into the inflow and outflow of goods and offer insights into daily
              profitability—allowing business owners to focus more on growth and
              less on admin.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-500 mb-12 text-center">
            Our Journey
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 w-1 bg-purple-200/20 h-full -translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative mb-12 flex justify-center gap-8"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-4 w-4 h-4 rounded-full bg-purple-200 
                  ${index % 2 === 0 ? "left-1/2 -ml-8" : "right-1/2 mr-8"}`}
                />

                {/* Content card */}
                <div
                  className={`w-full max-w-md p-6 rounded-xl shadow-lg bg-white 
                  ${index % 2 === 0 ? "ml-8" : "mr-8"} 
                  ${index % 2 === 0 ? "text-right" : "text-left"}`}
                >
                  <div className="text-sm font-semibold text-cyan-500 mb-2">
                    {item.date}
                  </div>
                  <h4 className="text-xl font-bold text-gray-500 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
