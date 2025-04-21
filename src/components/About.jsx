import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center py-16"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 text-indigo-400">
          About Me
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed text-center text-gray-300">
          Hey there! I&apos;m <span className="text-indigo-400 font-semibold">Saumya Sharma</span>, a dedicated and creative <span className="text-indigo-300 font-medium">Full Stack Developer</span> specializing in the <span className="text-indigo-300">MERN Stack</span> (MongoDB, Express.js, React, Node.js).
          <br /><br />
          I thrive on building fast, scalable, and user-friendly web applications that solve real-world problems. With a strong passion for clean code and modern design, I bring both logic and aesthetics into every project I create.
          <br /><br />
          My toolkit includes <span className="text-indigo-300">React, Node.js, Tailwind CSS, MongoDB,</span> and a constant desire to improve and learn. Whether it's the front-end magic or back-end logic, I enjoy working across the stack to deliver seamless digital experiences.
          <br /><br />
          When I'm not coding, I’m exploring tech trends, contributing to personal projects, or mentoring others in the developer community.
        </p>
      </div>
    </section>
  );
}
