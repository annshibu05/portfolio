//import React from 'react';
import { GraduationCap, FileText, Download } from 'lucide-react';

export default function Academics() {
  return (
    <section className="py-20 bg-gray-900" id="academics">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <GraduationCap className="w-6 h-6 text-cyan-400" />
          <h2 className="text-3xl font-bold text-white font-mono">Resume</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Resume */}
          <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300">
            <FileText className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Resume</h3>
            <p className="text-gray-400 mb-4">Download my detailed resume</p>
            <a 
              href="/portfolio/documents/resume.pdf" 
              download="resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* 10th Marks Card */}
          {/* <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">10th Standard</h3>
            <p className="text-gray-400 mb-4">View marks card</p>
            <a 
              href="portfolio/documents/10th-marks-card.pdf" 
              download="10th-marks-card.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Marks Card
            </a>
          </div> */}

          {/* 12th Marks Card
          <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">12th Standard</h3>
            <p className="text-gray-400 mb-4">View marks card</p>
            <a 
              href="portfolio/documents/12th-marks-card.pdf" 
              download="12th-marks-card.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Marks Card
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
