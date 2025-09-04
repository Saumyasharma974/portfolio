import React from 'react';

// Defined project details
const projects = [
  {
    title: 'STRUCT {STUDIES} - Student Management System',
    duration: 'Oct 2024 - Dec 2024',
    description:
      'A collaborative project for managing academic activities, including quizzes, video lectures, and chatbot interactions.',
    features: [
      'Chatbot interaction using natural language processing',
      'Quiz management system',
      'Video lecture streaming',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Vite', 'Tailwind CSS'],
    repo: 'https://github.com/jeetusingh247/student_management_project',
  },
  {
    title: 'Full-Stack MERN Blog App',
    duration: 'Nov 2024 - Dec 2024',
    description:
      'A collaborative blog application built with the MERN stack, featuring user authentication, CRUD operations, and responsive design.',
    features: [
      'User authentication (signup/login)',
      'Create, read, update, delete blog posts',
      'Responsive UI with Tailwind CSS',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Vite', 'Tailwind CSS'],
    repo: 'https://github.com/Saumyasharma974/blogApp-Full-stack-',
  },
  {
    title: 'Nitrinest - Fitness Website',
    duration: 'Jan 2025 - Mar 2025',
    description:
      'A fitness platform that calculates BMI and gives personalized meal/workout suggestions. Includes authentication, dashboard, and contact via NodeMailer.',
    features: [
      'User Authentication (Signup/Login/Logout)',
      'BMI calculation with suggestions',
      'Personalized Dashboard with time-based greeting and user name',
      'Meal and Workout Recommendations based on BMI',
      'Contact form using NodeMailer',
    ],
    tech: [
      'React.js',
      'Tailwind CSS',
      'Framer Motion',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'NodeMailer',
    ],
    repo: 'https://github.com/Saumyasharma974/nitrinest',
  },
  {
    title: 'AI-Powered Real-Time Collaboration App',
    duration: 'Apr 2025 - May 2025',
    description:
      'A real-time MERN chat app enhanced with AI support (Google Gemini) and in-browser code execution via WebContainer. Users can collaborate on projects, chat live, and invoke AI with `@ai`.',
    features: [
      'User Authentication (Login/Signup)',
      'Create and manage projects with collaborators',
      'Real-time chat with Socket.io',
      'Interact with AI using @ai (Google Gemini)',
      'In-browser code execution via WebContainer',
      'Optimized with Redis for performance',
    ],
    tech: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Redis',
      'Socket.io',
      'Google Gemini API',
      'WebContainer',
      'Tailwind CSS',
    ],
    repo: 'https://github.com/Saumyasharma974/ai-chat-app',
  },
  {
    title: 'AYAADA – AI-Powered Fashion Stylist',
    duration: 'Aug 2025',
    description:
      'Hackathon-winning AI-powered fashion search engine and stylist with text, image, and voice-based search, built using Gemini API.',
    features: [
      'Multimodal search (text, image, voice)',
      'Cross-brand product comparisons from Myntra, Meesho, etc.',
      'Static data pipeline for structured product cataloging',
      'Modern, responsive frontend using Radix UI and Tailwind CSS',
    ],
    tech: [
      'React',
      'TypeScript',
      'Radix UI',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Gemini API',
      'Google Generative AI',
    ],
    repo: 'https://github.com/Saumyasharma974/fasion-search-engine',
  },
  {
    title: 'AI-Powered SaaS Platform',
    duration: 'Jul 2025',
    description:
      'A SaaS platform integrating multiple AI APIs to assist users with code explanations, debugging, translations, text summarization, and image generation.',
    features: [
      'Code Explainer & Bug Fixer',
      'Text Summarizer & Translator',
      'AI-powered Image Generator using ClipDrop API',
      'Fast responses with Google Gemini API',
    ],
    tech: [
      'Node.js',
      'Express.js',
      'React',
      'Tailwind CSS',
      'Google Gemini API',
      'ClipDrop API',
    ],
    repo: 'https://github.com/Saumyasharma974/sas',
  },
  {
    title: 'SkillSwap – Mini Skill Exchange Platform',
    duration: 'Jun 2025',
    description:
      'A community-driven platform for users to exchange skills, manage requests, and provide feedback with role-based authentication.',
    features: [
      'User profiles with offered & wanted skills',
      'Swap requests (send/accept/reject)',
      'Admin dashboard for user & report management',
      'JWT authentication, Cloudinary uploads, and CSV reports',
    ],
    tech: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'JWT',
      'Cloudinary',
      'Tailwind CSS',
      'Chart.js',
      'Socket.io',
    ],
    repo: 'https://github.com/Saumyasharma974/swapskill',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
          My Projects
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{proj.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{proj.duration}</p>
                  <p className="text-base mb-4">{proj.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {proj.features.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium bg-indigo-600 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={proj.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center w-full py-3 rounded-full border border-indigo-600 hover:bg-indigo-600 hover:text-white transition font-semibold"
                  >
                    View GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
