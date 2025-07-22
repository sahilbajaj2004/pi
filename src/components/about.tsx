"use client";

import type React from "react";
export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-thin text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Pi Community
              </span>
            </h2>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Pi is more than just a developer community—it&#39;s a constellation
                of brilliant minds pushing the boundaries of technology. Founded
                on the principle that innovation happens when diverse
                perspectives collide, we create an environment where developers
                can explore, experiment, and evolve.
              </p>

              <p>
                Our mission is to foster a culture of continuous learning, where
                seasoned professionals mentor emerging talent, and where
                breakthrough ideas are born from collaborative exploration. Like
                the mathematical constant π, our potential is infinite and our
                precision is unmatched.
              </p>

              <p>
                Join us in shaping the future of technology, one line of code at
                a time.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: "50+", label: "Developers" },
                { number: "5+", label: "Events" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Glowing orb */}
              <div className="w-64 h-64 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 animate-pulse"></div>
                <div
                  className="absolute inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute inset-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>

                {/* Center symbol */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]">
                    π
                  </span>
                </div>
              </div>

              {/* Floating elements */}
              <div
                className="absolute -top-4 -right-4 w-3 h-3 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="absolute top-1/3 -left-6 w-2 h-2 bg-pink-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.8s" }}
              ></div>
              <div
                className="absolute -bottom-2 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-bounce"
                style={{ animationDelay: "1.2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
