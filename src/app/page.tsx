"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Events from "@/components/events";
import Contact from "@/components/contact";
import ScrollProgress from "@/components/scroll-progress";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Contact />
      </main>
    </div>
  );
}
