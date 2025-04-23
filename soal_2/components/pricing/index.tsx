// app/pricing/page.jsx
"use client";

import { motion } from "framer-motion";
import {
  CheckBadgeIcon,
  //   ChartBarIcon,
  //   ClockIcon,
  //   DocumentArrowDownIcon,
  //   SparklesIcon,
} from "@heroicons/react/24/solid";

const tiers = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Records incoming goods",
      "Records outgoing goods",
      "Records profits",
    ],
    featured: false,
    color: "border-blue-400",
  },
  {
    name: "Business",
    price: "Rp 299.000",
    features: [
      "Record incoming & outgoing goods",
      "Record Profit",
      "Sales analysis with Chart",
      "Support 7x24 Hours",
    ],
    featured: false,
    color: "border-purple-500",
  },
  {
    name: "Entrepreneur",
    price: "Rp 599.000",
    features: [
      "All Business features",
      "Export data to Excel",
      "AI Income prediction",
      "Priority Support",
      "Monthly Report",
      "E-Commerce Integration",
    ],
    featured: true,
    color: "border-[#1E2B58]",
  },
];

export default function index() {
  return (
    <section
      id="pricing"
      className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-500 mb-4"
          >
            Choose the Right Package for Your Business
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Improve your business efficiency with powerful features from HomERP
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative p-8 bg-white rounded-2xl shadow-lg border-t-4 ${
                tier.color
              } ${tier.featured ? "transform scale-105 shadow-xl" : ""}`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 bg-[#FFA630] text-white px-4 py-1 rounded-bl-lg rounded-tr-lg">
                  Best Value
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="text-4xl font-bold text-gray-900">
                  {tier.price}
                  {tier.price !== "Free" && (
                    <span className="text-lg font-normal">/month</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featIndex) => (
                  <li key={featIndex} className="flex items-start">
                    <CheckBadgeIcon className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  tier.featured
                    ? "bg-[#1E2B58] hover:bg-[#1e2b58cb] text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                Start Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 bg-white rounded-xl text-gray-500 p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-8">
            Feature Comparation
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left pb-4">Feature</th>
                  <th className="text-center p-4">Basic</th>
                  <th className="text-center p-4">Business</th>
                  <th className="text-center p-4">Entrepreneur</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Records Incoming / Outgoing Goods", "✓", "✓", "✓"],
                  ["Sales Chart Analysis", "✕", "✓", "✓"],
                  ["Support 24/7", "✕", "✓", "✓"],
                  ["Export Excel", "✕", "✕", "✓"],
                  ["AI Prediction", "✕", "✕", "✓"],
                ].map(([feature, ...tiers], index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-4 pr-8">{feature}</td>
                    {tiers.map((value, tierIndex) => (
                      <td key={tierIndex} className="text-center py-4 px-4">
                        <span
                          className={`text-xl ${
                            value === "✓" ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {value}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
