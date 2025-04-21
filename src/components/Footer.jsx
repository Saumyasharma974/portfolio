import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold mb-4">Developed by Saumya sharma</h3>

        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/yourgithub" // 🔁 Replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin" // 🔁 Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:youremail@example.com" // 🔁 Replace with your email
            className="hover:text-indigo-500 transition"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Nitrinest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
