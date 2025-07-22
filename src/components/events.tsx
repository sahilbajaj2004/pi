import { Calendar, MapPin, Users } from "lucide-react";

export default function Events() {
    const events = [
      {
        title: "AI & Blockchain Essentials",
        date: "August 02, 2025",
        time: "10:00 AM - 5:00 PM",
        location: "Ime Group of Colleges",
        attendees: 50,
        description:
          "Dive into the future of technology! On Day 1, participants will explore the world of Artificial Intelligence and Blockchain. From understanding real-world applications to hands-on insights, this session is designed to empower beginners and enthusiasts with foundational knowledge in two of the most transformative technologies of today.",
        type: "Bootcamp",
        registerUrl: "https://lu.ma/mlwicirf",
      },
      {
        title: "Personality Development & Soft Skills",
        date: "August 03, 2025",
        time: "10:00 AM - 5:00 PM",
        location: "Ime Group of Colleges",
        attendees: 50,
        description:
          "​Technical skills alone aren't enough! Day 2 focuses on shaping confident, professional personalities. Through interactive activities, expert guidance, and practical strategies, participants will enhance their communication, leadership, and presentation skills – helping them stand out in both academic and professional environments.",
        type: "Bootcamp",
        registerUrl: "https://lu.ma/mlwicirf",
      },
      // Add registerUrl for other events as needed
    ];

    const getTypeColor = (type: string) => {
        switch (type) {
            case "Meetup":
                return "from-blue-500 to-cyan-500";
            case "Workshop":
                return "from-purple-500 to-pink-500";
            case "Hackathon":
                return "from-orange-500 to-red-500";
            case "Community":
                return "from-green-500 to-emerald-500";
            default:
                return "from-purple-500 to-pink-500";
        }
    };

    return (
        <section
            id="events"
            className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gray-800/30"
        >
            {/* Section divider */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-thin text-white mb-6">
                        Upcoming{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Events
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Join our constellation of events designed to inspire, educate, and
                        connect developers from all backgrounds.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                        >
                            {/* Event type badge */}
                            <div
                                className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTypeColor(
                                    event.type
                                )} mb-4`}
                            >
                                {event.type}
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                {event.title}
                            </h3>

                            <p className="text-gray-400 mb-4 leading-relaxed">
                                {event.description}
                            </p>

                            <div className="space-y-2 text-sm text-gray-300">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-purple-400" />
                                    <span>
                                        {event.date} • {event.time}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} className="text-purple-400" />
                                    <span>{event.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users size={16} className="text-purple-400" />
                                    <span>{event.attendees} attendees expected</span>
                                </div>
                            </div>

                            <a
                                href={event.registerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 w-full inline-block text-center py-2 px-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg text-purple-300 hover:from-purple-600/30 hover:to-pink-600/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                            >
                                Register Now
                            </a>

                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
