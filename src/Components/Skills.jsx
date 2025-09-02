import React from "react";
import { CheckCircle2 } from "lucide-react";

const Skills = () => {
  const accentColors = {
    blue: "bg-blue-500 text-blue-500",
    green: "bg-green-500 text-green-500",
    purple: "bg-purple-500 text-purple-500",
    red: "bg-red-500 text-red-500",
    yellow: "bg-yellow-500 text-yellow-500",
  };

  const skillCategories = [
    {
      title: "Languages",
      accent: "blue",
      skills: [
        { name: "C", note: "Core programming" },
        { name: "C++", note: "OOP & STL" },
        { name: "Java", note: "Backend + DSA" },
        { name: "Python", note: "Scripting" },
        { name: "JavaScript", note: "Web development" },
        { name: "Kotlin", note: "Android apps" },
      ],
    },
    {
      title: "Frontend Development",
      accent: "green",
      skills: [
        { name: "React.js", note: "Component-based UI" },
        { name: "React Router", note: "Navigation handling" },
        { name: "Tailwind CSS", note: "Utility-first styling" },
        { name: "Axios", note: "API requests" },
        { name: "HTML5", note: "Modern markup" },
        { name: "CSS3", note: "Advanced styling" },
      ],
    },
    {
      title: "Backend & Databases",
      accent: "purple",
      skills: [
        { name: "Java (Spring Boot)", note: "REST APIs" },
        { name: "RESTful APIs", note: "Scalable endpoints" },
        { name: "JWT Auth", note: "Token-based security" },
        { name: "MySQL", note: "Relational DB" },
        { name: "PostgreSQL", note: "Advanced queries" },
        { name: "Supabase", note: "Realtime storage" },
      ],
    },
    {
      title: "Core CS Concepts",
      accent: "red",
      skills: [
        { name: "Data Structures", note: "Problem-solving" },
        { name: "Algorithms", note: "Optimized logic" },
        { name: "DBMS", note: "Database concepts" },
        { name: "Operating Systems", note: "Process management" },
        { name: "Networks", note: "Communication models" },
        { name: "IoT", note: "Embedded systems" },
      ],
    },
    {
      title: "Tools & Platforms",
      accent: "yellow",
      skills: [
        { name: "Git/GitHub", note: "Version control" },
        { name: "VS Code", note: "Code editor" },
        { name: "IntelliJ IDEA", note: "Java IDE" },
        { name: "Postman", note: "API testing" },
        { name: "Netlify/Vercel", note: "Web hosting" },
        { name: "Figma/Canva", note: "UI/UX & design" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive skill set spanning modern web technologies,
            design tools, and development practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {skillCategories.map((category, idx) => {
            const [bgColor, textColor] = accentColors[category.accent].split(" ");
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-left w-full max-w-sm"
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center justify-between">
                  {category.title}
                  <span className={`w-12 h-1 rounded-full ${bgColor}`}></span>
                </h3>

                <ul className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className={`${textColor} w-5 h-5 mt-1`} />
                      <div>
                        <p className="text-gray-800 font-medium">{skill.name}</p>
                        <p className="text-sm text-gray-500">{skill.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
