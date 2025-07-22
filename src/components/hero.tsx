"use client"

import { useEffect, useRef } from "react"
import Particles from "@/components/particles"

export default function Hero() {
  const piSymbolRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (piSymbolRef.current) {
        const rect = piSymbolRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = (e.clientX - centerX) * 0.02
        const deltaY = (e.clientY - centerY) * 0.02

        piSymbolRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <Particles />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-gray-900 to-gray-900"></div>

      {/* Content */}
      <div className="relative z-50 text-center px-4 sm:px-6 lg:px-8">
        {/* Pi Symbol */}
        <div
          ref={piSymbolRef}
          className="mb-8 transition-transform duration-100 ease-out"
        >
          <div className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-white relative">
            {/* Multiple layers for better visibility */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent blur-sm">
              pi3.14
            </span>
            <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,1)] animate-pulse">
              pi3.14
            </span>
            {/* Additional glow layers */}
            <span className="absolute inset-0 text-purple-400 opacity-30 blur-lg animate-pulse">
              pi3.14
            </span>
          </div>
        </div>

        {/* Tagline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin mb-2 text-gray-100">
          Where Developers{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-light">
            Orbit
          </span>{" "}
          Innovation
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-4 font-light leading-relaxed">
          Join a community of passionate developers exploring the infinite
          possibilities of code
        </p>

        {/* CTA Button */}
        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium transition-all duration-300 hover:from-purple-500 hover:to-pink-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
        >
          <span className="relative z-10">Explore the Universe</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
