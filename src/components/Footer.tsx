//import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="https://github.com/annshibu05"
              target="_blank"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/anca-ann-shibu-191472210/?originalSubdomain=in"
              target="_blank"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ancashibu@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Anca Ann Shibu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
