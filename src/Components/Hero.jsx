import heroPortrait from "../assets/profile.png";

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      // scroll-mt ensures nav anchors land nicely; pt-24 clears the fixed nav
      className="scroll-mt-24 pt-24 pb-16 md:pt-28 md:pb-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Don't vertically center the whole section; let padding control spacing */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
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
                <p className="text-lg text-gray-500">Based in Chandigarh, India</p>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              I create beautiful, functional web experiences that blend thoughtful design with clean
              code. Passionate about crafting digital solutions that make a difference.
            </p>

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

              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/resume.pdf";
                  link.download = "resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  link.remove();
                }}
                className="px-6 py-3 text-lg rounded-lg border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-300"
              >
                Resume
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                <img
                  src={heroPortrait}
                  alt="Shubham Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* little chips */}
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
