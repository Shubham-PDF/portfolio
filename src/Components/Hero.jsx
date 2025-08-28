import heroPortrait from "../assets/profile.png";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-500 font-medium">Hi, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Shubham
              </h1>
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  Web Designer & Software Developer
                </h2>
                <p className="text-lg text-gray-500">
                  Based in Chandigarh, India
                </p>
              </div>
            </div>

            {/* Justified Paragraph */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl text-justify">
              I create beautiful, functional web experiences that blend
              thoughtful design with clean code. Passionate about crafting
              digital solutions that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 text-lg rounded-lg bg-blue-600 text-white font-medium shadow-md hover:scale-105 transition-transform duration-300"
              >
                Hire Me
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 text-lg rounded-lg border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-300"
              >
                View Work
              </button>

              {/* Resume Download Button */}
              <a
                href="/resume.pdf" // put resume.pdf in public/ folder
                download
                className="px-6 py-3 text-lg rounded-lg border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition "
              >
                Resume
              </a>

            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile Image */}
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                <img
                  src={heroPortrait}
                  alt="Shubham Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Binary Code Elements */}
              <div className="absolute -top-6 -right-6 bg-gray-900 text-gray-300 text-xs font-mono px-3 py-2 rounded-lg shadow-md animate-pulse">
                01010011
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gray-900 text-gray-300 text-xs font-mono px-3 py-2 rounded-lg shadow-md animate-pulse delay-700">
                01101000
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
