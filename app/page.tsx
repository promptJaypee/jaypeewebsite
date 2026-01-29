import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-20 py-20 min-h-screen">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center text-white max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
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
                  className="px-4 py-2 bg-blue-600 bg-opacity-30 text-white-200 rounded-full text-sm border border-blue-500 cursor-pointer hover:bg-blue-600 hover:bg-opacity-50 hover:text-cyan-300 hover:border-cyan-400 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300 transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/75 hover:scale-105 active:scale-95 transition duration-300 transform">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-20"></div>
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
            className="text-blue-400 hover:underline-offset-2 hover:text-blue-300 transition  relative inline-block after:absolute after:left-1/2 after:-bottom-1 after:h-0.75 after:w-0 after:-translate-x-1/2 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            LinkedIn
          </a>
          <a
            href="#"
            className="text-blue-400 hover:underline-offset-2 hover:text-blue-300 transition  relative inline-block after:absolute after:left-1/2 after:-bottom-1 after:h-0.75 after:w-0 after:-translate-x-1/2 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            GitHub
          </a>
          <a
            href="#"
            className="text-blue-400 hover:underline-offset-2 hover:text-blue-300 transition  relative inline-block after:absolute after:left-1/2 after:-bottom-1 after:h-0.75 after:w-0 after:-translate-x-1/2 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            Email
          </a>
        </div>
      </div>
    </main>
  );
}
