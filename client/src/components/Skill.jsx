import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaNpm } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiVite } from 'react-icons/si';

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <FaHtml5 className="text-5xl text-orange-500" />
            <p>HTML5</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaCss3Alt className="text-5xl text-blue-500" />
            <p>CSS3</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaJs className="text-5xl text-yellow-400" />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaReact className="text-5xl text-cyan-400" />
            <p>React</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaNodeJs className="text-5xl text-green-500" />
            <p>Node.js</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiExpress className="text-5xl text-gray-300" />
            <p>Express.js</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiMongodb className="text-5xl text-green-400" />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiTailwindcss className="text-5xl text-sky-400" />
            <p>Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiVite className="text-5xl text-purple-400" />
            <p>Vite</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaGitAlt className="text-5xl text-orange-600" />
            <p>Git</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaGithub className="text-5xl text-white" />
            <p>GitHub</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaNpm className="text-5xl text-red-500" />
            <p>NPM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
