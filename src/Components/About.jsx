import { BookOpen, Code2, Rocket, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                About Me
              </h2>
              <div className="w-16 h-1 bg-indigo-500 mt-3 rounded-full ml-15"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
              <p>
                I’m a passionate and inquisitive Computer Science student with a strong interest in solving real-world problems through technology. With a foundation in both design and development, I enjoy blending creativity with logic to craft solutions that are efficient, user-friendly, and impactful.
              </p>
              <p>
                My vision is to grow into a well-rounded developer who not only builds meaningful applications but also contributes back to the communities that inspire and support me.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="font-semibold text-gray-900">Design Philosophy</h4>
                <p className="text-gray-500 text-sm">
                  User-first, minimalist approach with attention to detail.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Development Focus</h4>
                <p className="text-gray-500 text-sm">
                  Clean, scalable code with modern best practices.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Aesthetic Stat Cards */}
          <div className="grid grid-cols-2 gap-6 mt-10">
            {/* Education */}
            <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-tr from-indigo-500/90 to-purple-500/90 text-white transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <BookOpen className="w-10 h-10 mx-auto mb-3" />
              <h4 className="mt-2 font-semibold text-lg">Education</h4>
              <p className="text-sm opacity-90">B.E. Computer Science</p>
            </div>

            {/* Coding */}
            <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-tr from-pink-500/90 to-rose-500/90 text-white transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Code2 className="w-10 h-10 mx-auto mb-3" />
              <h4 className="mt-2 font-semibold text-lg">Coding</h4>
              <p className="text-sm opacity-90">3+ Years Experience</p>
            </div>

            {/* Projects */}
            <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-tr from-emerald-500/90 to-teal-500/90 text-white transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <Rocket className="w-10 h-10 mx-auto mb-3" />
              <h4 className="mt-2 font-semibold text-lg">Projects</h4>
              <p className="text-sm opacity-90">10+ Completed</p>
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-tr from-orange-500/90 to-amber-500/90 text-white transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <MapPin className="w-10 h-10 mx-auto mb-3" />
              <h4 className="mt-2 font-semibold text-lg">Location</h4>
              <p className="text-sm opacity-90">Chandigarh, India</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
