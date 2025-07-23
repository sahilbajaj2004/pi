"use client";

import { useState } from "react";
import {
    Mail,
    Send,
} from "lucide-react";
import {
  FaWhatsapp,
  FaDiscord,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "ff919f4b-7231-48cb-a91f-13c57d3b23e5",
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          }),
        });

        const result = await response.json();

        if (result.success) {
            setStatus("✅ Message sent successfully!");
            setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        } else {
            setStatus("❌ Something went wrong. Please try again.");
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-purple-500 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-thin text-white mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to join our orbit? Reach out and let&#39;s start building
              the future together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Connect With Us
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:Pi.connect01@gmail.com"
                    className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 no-underline"
                  >
                    <Mail className="text-purple-400" size={24} />
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-gray-400">
                        Pi.connect01@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://chat.whatsapp.com/F2WTE0iryHr3CFiy1J5p0W?mode=r_c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 no-underline"
                  >
                    <FaWhatsapp className="text-purple-400" size={24} />
                    <div>
                      <div className="text-white font-medium">WhatsApp</div>
                      <div className="text-gray-400">
                        Join our WhatsApp community
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-medium text-white mb-4">
                  Follow Our Journey
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://discord.gg/wxZyVzHM"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Discord"
                    className="p-3 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] group focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <FaDiscord
                      size={20}
                      className="text-gray-400 group-hover:text-purple-400 transition-colors"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pi-community-29158b376/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-3 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] group focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <FaLinkedin
                      size={20}
                      className="text-gray-400 group-hover:text-purple-400 transition-colors"
                    />
                  </a>
                  <a
                    href="https://x.com/Piconnect01/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="x"
                    className="p-3 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] group focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <FaTwitter
                      size={20}
                      className="text-gray-400 group-hover:text-purple-400 transition-colors"
                    />
                  </a>
                  <a
                    href="https://github.com/piconnect01"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="github"
                    className="p-3 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] group focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <FaGithub
                      size={20}
                      className="text-gray-400 group-hover:text-purple-400 transition-colors"
                    />
                  </a>
                </div>
              </div>

              {/* Community Stats */}
              <div className="p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20">
                <h4 className="text-lg font-medium text-white mb-4">
                  Join Our Growing Community
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">
                      50+
                    </div>
                    <div className="text-sm text-gray-400">Active Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">5+</div>
                    <div className="text-sm text-gray-400">Monthly Events</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />

                {/* First Name & Last Name side by side */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                      placeholder="First name"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                {/* Email & Phone side by side */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                      placeholder="(optional)"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 resize-none"
                    placeholder="Tell us about your ideas, questions, or how you'd like to contribute..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium transition-all duration-300 hover:from-purple-500 hover:to-pink-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2 group"
                >
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  Send Message
                </button>

                {status && (
                  <p className="text-center text-sm text-gray-300 mt-2">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-700/50 text-center">
          <p className="text-gray-400">
            © 2024 Pi Developer Community. Building the future, one commit at a
            time.
          </p>
        </div>
      </section>
    );
}

