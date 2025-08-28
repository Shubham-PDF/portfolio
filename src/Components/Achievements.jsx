import React from "react";

const Achievements = () => {
  const achievements = [
    {
      year: "2022",
      title: "Computer Architecture & Organisation",
      organization: "NPTEL",
      description: "Achieved Elite Certification in Computer Architecture & Organisation.",
      type: "certification",
    },
  {
    year: "2023",
    title: "Winner - MCM Meraki Hackathon",
    organization: "MCM DAV Women College, Chandigarh",
    description: "Secured 1st place by building an innovative solution during the hackathon.",
    type: "hackathon",
  },
  {
    year: "2023",
    title: "Cloud Computing",
    organization: "NPTEL",
    description: "Recognized as Silver Medalist in Cloud Computing.",
    type: "certification",
  },
  {
    year: "2024",
    title: "Internet of Things",
    organization: "NPTEL",
    description: "Secured Silver Medal in Internet of Things certification course.",
    type: "certification",
  },
  {
    year: "2025",
    title: "Runner-up - Hack-O-Mania",
    organization: "NMIMS College, Chandigarh",
    description: "Awarded 2nd place for developing a creative web-based project in limited time.",
    type: "hackathon",
  },
];

const getIcon = (type) => {
  switch (type) {
      case "career":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
            />
          </svg>
        );
      case "certification":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        );
      case "award":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        );
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "career":
        return "bg-blue-100 text-blue-700";
      case "certification":
        return "bg-green-100 text-green-700";
      case "award":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-purple-100 text-purple-700";
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Achievements & Milestones
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A timeline of my professional growth, certifications, and recognition
            in the field of web development and design.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div
                key={`${achievement.year}-${achievement.title}`}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white transform md:-translate-x-1/2 z-10"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(
                            achievement.type
                          )}`}
                        >
                          {achievement.type.charAt(0).toUpperCase() +
                            achievement.type.slice(1)}
                        </span>
                        <span className="text-sm font-medium text-gray-500">
                          {achievement.year}
                        </span>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg text-blue-600">
                          {getIcon(achievement.type)}
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-gray-900">
                            {achievement.title}
                          </h3>
                          <p className="text-sm font-medium text-gray-600">
                            {achievement.organization}
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "10+", label: "Projects Completed" },
            { number: "3+", label: "Years Experience" },
            { number: "8+", label: "Certifications" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Achievements;
