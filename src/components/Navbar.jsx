import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        {/* Mobile menu button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
        {/* Menu */}
        <ul
          className={`flex-col lg:flex-row lg:flex items-center gap-6 lg:gap-8 mt-4 lg:mt-0 transition-all duration-300 ease-in-out bg-gray-900 lg:bg-transparent p-4 lg:p-0 absolute lg:static right-4 lg:right-auto top-16 lg:top-auto rounded-lg lg:rounded-none shadow-lg lg:shadow-none ${
            isOpen ? 'flex' : 'hidden'
          }`}
        >
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block text-lg lg:text-base font-medium transform hover:scale-110 hover:text-indigo-400 transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
