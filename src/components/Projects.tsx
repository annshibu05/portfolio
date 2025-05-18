//import React from 'react';
import { Code, Shield, Palette, BookOpen } from 'lucide-react';

const projects = [
  {
    title: 'AI - Powered Cross Platform Compliance Management System for CIS Benchmark Auditing',
    description: 'A cross-platform AI-driven system for automated CIS benchmark auditing on Windows 11 and Linux.',
    icon: Shield,
    tech: ['Python'],
  },
  {
    title: 'Image Colorization Model',
    description: 'Deep learning model that automatically colorizes black and white images using advanced neural networks.',
    icon: Palette,
    tech: ['Python', 'PyTorch', 'OpenCV'],
  },
  {
    title: 'Real-Time Chat Application',
    description: 'A multi-client Java chat app using sockets and Java Swings for real-time messaging.',
    icon: Palette,
    tech: ['Java', 'Java swings', 'Socket Programming'],
  },
  {
    title: 'Online Course Management System',
    description: 'Full-stack web application for managing online courses, assignments, and student progress.',
    icon: BookOpen,
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Task Manager',
    description: 'Implemented in C++ to manage users and tasks using a priority queue, with user suggestions based on task load and tracking of task completion times',
    icon: BookOpen,
    tech: ['C++', 'Data Structures'],
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <Code className="w-6 h-6 text-cyan-400" />
          <h2 className="text-3xl font-bold text-white font-mono">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300"
            >
              <project.icon className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-gray-900 text-cyan-400 rounded-full font-mono"
                  >
                    {tech}
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