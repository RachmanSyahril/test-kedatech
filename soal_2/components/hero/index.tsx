import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import PFadeIn from "../animation/PFadeIn";
import { Button } from "../ui/button";

const index = () => {
  return (
    <section id="hero" className="px-4 sm:px-8 py-8">
      <div className="mt-40 md:mt-30"></div>
      <div className="relative z-10 container mx-auto px-4 py-4 text-cyan-500">
        <div className="max-w-3xl space-y-8 animate-fade-in-up">
          <PFadeIn>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              HomERP: Simplify Your Business Flow
            </h1>
          </PFadeIn>
          <PFadeIn>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              Real-time inventory tracking & profit analytics for growing
              businesses
            </p>
          </PFadeIn>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mb-16 md:mb-0">
            <Button variant="iconRight" className="px-8 py-4">
              Try Free Demo
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button variant="outline" className="px-8 py-4 mt-2 md:mt-0">See How It Works</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
