// src/components/Hero.jsx
import React from 'react';
import { ReactTyped } from 'react-typed';  // ← named export in v2+

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4">
        {/* Text Content */}
        <div className="text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Hi, I&apos;m Saumya Sharma
          </h1>

          {/* Typing Effect */}
          <div className="text-lg sm:text-xl md:text-2xl mb-8">
            <ReactTyped
              strings={[
                'Web Developer',
                'MERN Stack Developer',
                'Full Stack Engineer',
                'React & Node.js Enthusiast',
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </div>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="inline-block px-8 py-4 text-lg font-semibold rounded-full bg-indigo-600 hover:bg-indigo-500 transform hover:scale-105 transition"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-lg font-semibold rounded-full border border-indigo-600 hover:bg-indigo-600 hover:text-white transform hover:scale-105 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-72 h-72 md:w-[28rem] md:h-[28rem]">
          <img
            src="/image.png"
            alt="Saumya"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
