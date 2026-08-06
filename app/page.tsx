"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import projects from "@/app/data/jsons/projects.json";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //dark theme start
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const initialDark = savedTheme ? savedTheme === "dark" : true;
    setIsDark(initialDark);
    if (initialDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark, mounted]);

  //dark theme end

  useEffect(() => {
    const fullText = "Jaypee Cabanela.";
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100); // Typing speed

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 300); // Cursor blink speed

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close the mobile menu automatically if the viewport grows past the md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#contacts", label: "Contacts" },
    { href: "https://www.linkedin.com/in/jaypeecabanela/", label: "Mail" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <div>
      {/* Theme Toggle Button */}
      {mounted && (
        <button
          onClick={() => setIsDark(!isDark)}
          className="fixed bottom-4 right-4 p-3 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white rounded-full shadow-lg hover:shadow-xl transition duration-300 z-50"
          aria-label="Toggle theme"
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      )}

      <header
        className={`fixed top-0 w-full ${isScrolled || isMenuOpen ? "bg-white dark:bg-gray-950 shadow-md" : "bg-transparent"} transition-colors duration-300 z-50`}
      >
        <div className="flex justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 gap-6 w-full">
            {/* Logo and Navigation - Left */}
            <div className="flex items-center gap-8">
              {/* Jaypeedraws Icon */}
              <div className="flex items-center">
                <Image
                  src="/jaypeedraws-icon.png"
                  alt="Jaypee Cabanela Logo"
                  width={25}
                  height={25}
                />
              </div>

              {/* Navigation Menu - Desktop */}
              <nav className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-blue-600 dark:text-blue-400 hover:underline-offset-2 hover:text-blue-800 dark:hover:text-blue-300 transition  relative inline-block after:absolute after:left-1/2 after:-bottom-1 after:h-0.75 after:w-0 after:-translate-x-1/2 after:bg-blue-600 dark:after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Icons - Right (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/jaypeecabanela/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-cyan-400 transition hover:scale-110"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/promptJaypee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-cyan-400 transition hover:scale-110"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/jaypee.cabanela"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/75 hover:scale-105 active:scale-95 transition duration-300 transform"
              >
                Contact me
              </a>
            </div>

            {/* Hamburger Button - Mobile only */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block h-0.5 w-6 bg-gray-800 dark:bg-white transition duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-800 dark:bg-white transition duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-800 dark:bg-white transition duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition text-lg font-medium"
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://www.linkedin.com/in/jaypeecabanela/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                aria-label="LinkedIn"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-cyan-400 transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/promptJaypee"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                aria-label="GitHub"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-cyan-400 transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>

            <a
              href="https://www.facebook.com/jaypee.cabanela"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 px-6 py-3 text-center bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/75 active:scale-95 transition duration-300"
            >
              Contact me
            </a>
          </nav>
        </div>
      </header>

      <main className="w-full min-h-screen bg-gray-50 dark:bg-linear-to-br dark:from-gray-900 dark:via-black dark:to-gray-900 pt-12">
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col items-center justify-center gap-12 px-6 lg:px-20 py-20 min-h-screen"
        >
          {/* Center Content */}
          <div className="flex flex-col justify-center text-center text-black dark:text-white max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {typedText}
              {cursorVisible ? <span className="text-white">|</span> : ""}
            </h1>

            <p className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
              Front-end Web Developer | UI/UX Designer
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Passionate front-end web developer skilled in React, Next.js, and
              Tailwind CSS, focused on creating responsive, user-friendly
              websites with clean code and exceptional design.
            </p>

            <div className="mb-8">
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center">
              <a
                href="#contacts"
                className="px-8 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/75 hover:scale-105 active:scale-95 transition duration-300 transform"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-blue-500 text-gray-700 dark:text-gray-400 font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/75 hover:bg-blue-100 dark:hover:bg-blue-500 dark:hover:bg-opacity-20 hover:scale-105 active:scale-95 hover:border-blue-400 dark:hover:border-cyan-400 transition duration-300 transform inline-block"
              >
                View Projects
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="w-full py-20 px-6 lg:px-20 bg-gray-50 dark:bg-linear-to-br dark:from-gray-900 dark:via-black dark:to-gray-900"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold mb-12 text-center bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-50 dark:bg-linear-to-br dark:from-gray-800 dark:to-gray-900 rounded-lg overflow-hidden border border-blue-300 dark:border-blue-500 dark:border-opacity-30 hover:border-blue-400 dark:hover:border-cyan-400 transition duration-300 hover:shadow-2xl hover:shadow-blue-500/50 dark:hover:shadow-blue-500/50 p-6"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-cyan-300 transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-600 dark:bg-opacity-30 text-blue-800 dark:text-blue-300 rounded-full text-sm border border-blue-300 dark:border-blue-500 dark:border-opacity-50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 px-4 py-2 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/75 hover:scale-105 active:scale-95 transition duration-300 transform inline-block"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contacts"
          className="w-full py-20 px-6 lg:px-20 bg-gray-50 dark:bg-linear-to-br dark:from-black dark:via-gray-900 dark:to-black"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-center bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-center text-lg mb-12">
              Have a project in mind or want to collaborate? I&apos;d love to
              hear from you. Reach out and let&apos;s create something amazing
              together!
            </p>

            <div className="w-full px-25 gap-4 justify-center">
              {/* Contact Form */}
              <div className="bg-gray-50 dark:bg-linear-to-br dark:from-gray-800 dark:to-gray-900 rounded-lg border border-blue-300 dark:border-blue-500 dark:border-opacity-30 p-8 hover:border-blue-400 dark:hover:border-cyan-400 transition duration-300 hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-blue-500/50">
                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label className="block text-black dark:text-white font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white dark:bg-gray-900 border border-blue-300 dark:border-blue-500 dark:border-opacity-30 rounded-lg px-4 py-2 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/50 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-black dark:text-white font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-white dark:bg-gray-900 border border-blue-300 dark:border-blue-500 dark:border-opacity-30 rounded-lg px-4 py-2 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/50 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-black dark:text-white font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Your message here..."
                      rows={4}
                      className="w-full bg-white dark:bg-gray-900 border border-blue-300 dark:border-blue-500 dark:border-opacity-30 rounded-lg px-4 py-2 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/50 transition resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/75 hover:scale-105 active:scale-95 transition duration-300 transform"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="border-t border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-black dark:bg-opacity-50 py-12 px-6 text-center">
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
            Lets connect and bring your web projects to life!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/jaypeecabanela/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline-offset-2 hover:text-blue-800 dark:hover:text-blue-300 transition  relative inline-block after:absolute after:left-1/2 after:-bottom-1 after:h-0.75 after:w-0 after:-translate-x-1/2 after:bg-blue-600 dark:after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/promptJaypee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline-offset-2 hover:text-blue-800 dark:hover:text-blue-300 transition  relative inline-block after:absolute after:left-1/2 after:-bottom-1 after:h-0.75 after:w-0 after:-translate-x-1/2 after:bg-blue-600 dark:after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              GitHub
            </a>
            <a
              href="#contacts"
              className="text-blue-600 dark:text-blue-400 hover:underline-offset-2 hover:text-blue-800 dark:hover:text-blue-300 transition  relative inline-block after:absolute after:left-1/2 after:-bottom-1 after:h-0.75 after:w-0 after:-translate-x-1/2 after:bg-blue-600 dark:after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Email
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
