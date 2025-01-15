//import React from 'react';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gray-800" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-700 relative">
            <img
              src="/profile.jpg"
              alt="Profile Picture"
              className="object-cover w-full h-full"
            />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-6">
              <User className="w-6 h-6 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white font-mono">About Me</h2>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a third-year Computer Science and Engineering student at BMSIT with a strong passion for technology and innovation. Currently maintaining a CGPA of 9.01, I'm dedicated to pushing the boundaries of what's possible in software engineering.
            </p>
            <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
              <p className="text-cyan-400 font-mono">Current Status:</p>
              <ul className="text-gray-300 mt-2 space-y-2">
                <li>🎓 3rd Year CSE Student</li>
                <li>📚 CGPA: 9.01</li>
                <li>🔍 Exploring Cloud Architecture & AI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}