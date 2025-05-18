//import React from 'react';
import { Cpu } from 'lucide-react';

const skills = {
  'Programming Languages': ['C++', 'Java', 'C', 'JavaScript','PHP', 'VHDL', 'SQL'],
  'Web Technologies': ['React', 'Node.js', 'HTML5', 'CSS3'],
  'AI & ML': ['PyTorch', 'OpenCV', 'NumPy', 'Pandas'],
  'Tools & Platforms': ['Git', 'Linux', 'VS Code'],
};

export default function Skills() {
  return (
    <section className="py-20 bg-gray-800" id="skills">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <Cpu className="w-6 h-6 text-cyan-400" />
          <h2 className="text-3xl font-bold text-white font-mono">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-6 bg-gray-900 rounded-xl">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}