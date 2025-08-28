const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                About Me
              </h2>
              <div className="w-16 h-1 bg-indigo-500 mt-3 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm a passionate web designer and developer with over 3 years of 
                experience creating digital experiences that are both beautiful 
                and functional. My journey began with a fascination for how 
                design and technology intersect to solve real-world problems.
              </p>

              <p>
                I specialize in modern web technologies and have a keen eye for 
                detail, ensuring every pixel serves a purpose. When I'm not coding, 
                you'll find me exploring new design trends, contributing to open-source, 
                or enjoying the vibrant tech community here in San Francisco.
              </p>

              <p>
                My approach combines user-centered design principles with 
                cutting-edge development practices to deliver exceptional 
                digital experiences that drive results and delight users.
              </p>
            </div>

            {/* Key Points */}
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

         
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-indigo-500 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">Clean Code</div>
                    <div className="text-gray-500">Beautiful Solutions</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center hover:scale-110 transition">
                <svg
                  className="w-8 h-8 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>

              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-xl bg-indigo-100 shadow-md flex items-center justify-center hover:scale-110 transition">
                <svg
                  className="w-6 h-6 text-indigo-600"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
