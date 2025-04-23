import React from "react";
import PFadeIn from "../animation/PFadeIn";

const index = () => {
  return (
    <section id="about" className="flex flex-col gap-8">
      <h2 className="text-4xl text-gray-600 font-bold text-center">
        About HomERP
      </h2>

      <div className="max-w-4xl mx-auto">
        <PFadeIn>
          HomERP is a modern ERP-inspired web platform tailored for small and
          growing businesses. We empower entrepreneurs to effortlessly manage
          and track inventory movements and record daily profits—all from a
          single, easy-to-use interface.
        </PFadeIn>
        <PFadeIn>
          Our goal is simple: make business operations smarter, faster, and
          fully digital. With HomERP, business owners can say goodbye to manual
          bookkeeping and excel sheets. We provide clear visibility into the
          inflow and outflow of goods and offer insights into daily
          profitability—allowing business owners to focus more on growth and
          less on admin.
        </PFadeIn>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-gray-600 font-bold mb-8 text-center">
          Our Journey
        </h2>
        <div className="relative border-l-4 border-cyan-500 pl-6">
          {[
            {
              title: "Q1 2024 – Ideation & Research",
              description:
                "The idea for HomERP was born from challenges faced by small business owners in tracking inventory and profits manually. Market validation followed.",
            },
            {
              title: "Q2 2024 – MVP Development",
              description:
                "Built the MVP with core features like inventory logs, profit tracking, and dashboards. Focused on simplicity and usability.",
            },
            {
              title: "Q3 2024 – Closed Beta Launch",
              description:
                "Onboarded our first users—local entrepreneurs—and gathered feedback to refine the system.",
            },
            {
              title: "Q4 2024 – Public Launch",
              description:
                "Released HomERP publicly with a polished UI, reliable performance, and improved insights dashboard.",
            },
            {
              title: "2025 and Beyond – Scaling & Innovation",
              description:
                "We’re now expanding with analytics, mobile support, and integrations with POS & e-commerce platforms.",
            },
          ].map((item, idx) => (
            <div key={idx} className="mb-10">
              <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-2 top-1.5 border-4 border-white shadow"></div>
              <h3 className="text-xl font-semibold text-cyan-600">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
