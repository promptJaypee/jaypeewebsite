import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-20 py-20 min-h-screen">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center text-white max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Jaypee Cabanela
          </h1>

          <p className="text-xl text-gray-300 mb-2">
            Front-end Web Developer | Front-End Specialist
          </p>

          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            I'm a passionate web developer with expertise in creating dynamic
            and user-friendly websites. I specialize in front-end development,
            utilizing technologies like React, Next.js, and Tailwind CSS to
            build responsive and visually appealing web applications. With a
            keen eye for design and a commitment to clean code, I strive to
            deliver exceptional user experiences.
          </p>

          {/* Skills Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "Tailwind CSS",
                "TypeScript",
                "JavaScript",
                "Web Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-600 bg-opacity-30 text-white-200 rounded-full text-sm border border-blue-500 cursor-pointer hover:bg-blue-600 hover:bg-opacity-50 hover:text-white hover:border-cyan-400 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300 transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/75 hover:scale-105 active:scale-95 transition duration-300 transform">
              Get In Touch
            </button>
            <button className="px-8 py-3 border-2 border-blue-500 text-white-400 font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/75 hover:bg-blue-500 hover:bg-opacity-20 hover:scale-105 active:scale-95 hover:border-cyan-400 transition duration-300 transform">
              View Projects
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500 border-opacity-30">
            <Image
              src="/profile.png"
              alt="Jaypee Cabanela Profile"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full py-20 px-6 lg:px-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description:
                  "A modern e-commerce platform built with React and Next.js featuring product listings, cart functionality, and payment integration.",
                tech: ["React", "Next.js", "Tailwind CSS", "Stripe"],
              },
              {
                title: "Task Management App",
                description:
                  "A collaborative task management application with real-time updates, user authentication, and team workspace features.",
                tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
              },
              {
                title: "Portfolio Website",
                description:
                  "A responsive portfolio website showcasing projects and skills with smooth animations and modern UI design.",
                tech: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-blue-500 border-opacity-30 hover:border-cyan-400 transition duration-300 hover:shadow-2xl hover:shadow-blue-500/50 p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600 bg-opacity-30 text-blue-300 rounded-full text-sm border border-blue-500 border-opacity-50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="mt-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/75 hover:scale-105 active:scale-95 transition duration-300 transform">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-20 px-6 lg:px-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-center text-lg mb-12">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Reach out and let's create something amazing together!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-blue-500 border-opacity-30 p-6 hover:border-cyan-400 transition duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Email</h3>
                    <a
                      href="mailto:jaypee@example.com"
                      className="text-blue-400 hover:text-cyan-400 transition"
                    >
                      jaypee@example.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-blue-500 border-opacity-30 p-6 hover:border-cyan-400 transition duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-blue-400 hover:text-cyan-400 transition"
                    >
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-blue-500 border-opacity-30 p-6 hover:border-cyan-400 transition duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Location</h3>
                    <p className="text-gray-400">Manila, Philippines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-blue-500 border-opacity-30 p-8 hover:border-cyan-400 transition duration-300 hover:shadow-lg hover:shadow-blue-500/50">
              <form className="space-y-4">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-gray-900 border border-blue-500 border-opacity-30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/50 transition"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-gray-900 border border-blue-500 border-opacity-30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/50 transition"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Your message here..."
                    rows={4}
                    className="w-full bg-gray-900 border border-blue-500 border-opacity-30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/50 transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/75 hover:scale-105 active:scale-95 transition duration-300 transform"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="border-t border-gray-700 bg-black bg-opacity-50 py-12 px-6 text-center">
        <p className="text-gray-300 text-lg mb-4">
          Lets connect and bring your web projects to life!
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="text-blue-400 hover:underline-offset-2 hover:text-blue-300 transition  relative inline-block after:absolute after:left-1/2 after:-bottom-1 after:h-0.75 after:w-0 after:-translate-x-1/2 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-blue-400 hover:underline-offset-2 hover:text-blue-300 transition  relative inline-block after:absolute after:left-1/2 after:-bottom-1 after:h-0.75 after:w-0 after:-translate-x-1/2 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-blue-400 hover:underline-offset-2 hover:text-blue-300 transition  relative inline-block after:absolute after:left-1/2 after:-bottom-1 after:h-0.75 after:w-0 after:-translate-x-1/2 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Email
          </a>
        </div>
      </div>
    </main>
  );
}
