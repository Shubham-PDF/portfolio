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
                  Web Designer & Developer
                </h2>
                <p className="text-lg text-gray-500">
                  Based in Chandigarh, India
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              I create beautiful, functional web experiences that blend
              thoughtful design with clean code. Passionate about crafting
              digital solutions that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 text-lg rounded-lg bg-blue-600 text-white font-medium shadow-md hover:scale-105 transition"
              >
                Hire Me
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 text-lg rounded-lg border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
              >
                View Work
              </button>
            </div>

            {/* Quick Stats */}
            {/* <div className="flex gap-12 pt-8 border-t border-gray-300">
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-500">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-500">Years</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">30+</div>
                <div className="text-sm text-gray-500">Clients</div>
              </div>
            </div> */}
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
                <img
                  src={heroPortrait}
                  alt="Alex Johnson - Web Designer & Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-blue-500 rounded-xl shadow-md animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500 rounded-lg shadow-md animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
