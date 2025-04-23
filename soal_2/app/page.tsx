"use client";
import About from "@/components/about";
import DivFadeIn from "@/components/animation/DivFadeIn";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Header from "@/components/ui/header";
import Wave from "@/components/ui/wave";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Wave Shape Decoration */}
      <DivFadeIn className="mt-[-20vh] mb-[-15vh]">
        <Wave />
      </DivFadeIn>

      <About />

      <Pricing />

      <Contact />

      <Footer />
    </div>
  );
}
