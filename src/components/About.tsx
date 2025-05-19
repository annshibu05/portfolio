//import React from 'react';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gray-800" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Picture */}
          <div className="md:w-1/3">
            <div className="aspect-square rounded-full overflow-hidden bg-gray-700 relative shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src="/profile.jpg"
                alt="Profile Picture"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* About Me Section */}
          <div className="md:w-2/3">
            <div className="flex items-center gap-2 mb-6">
              <User className="w-6 h-6 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white font-mono">About Me</h2>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a third-year Computer Science and Engineering student at BMSIT&M with a strong passion for technology and innovation. Currently maintaining a CGPA of 9.03, I'm dedicated to pushing the boundaries of what's possible in Software Engineering.
            </p>
            <div className="p-4 bg-gray-900 rounded-lg border border-gray-700 shadow-md hover:shadow-cyan-400 transition-shadow duration-300">
              <p className="text-cyan-400 font-mono">Current Status:</p>
              <ul className="text-gray-300 mt-2 space-y-2">
                <li>🎓 3rd Year CSE Student</li>
                <li>📚 CGPA: 9.03</li>
                <li>🔍 Exploring Cloud Architecture & AI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
