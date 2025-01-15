//import React from 'react';
import { Code2, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" id="home">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/[0.02] blur-3xl"></div>
        <div className="floating-delayed absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white/[0.01] blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <Code2 className="w-16 h-16 mx-auto mb-6 text-white/80 floating" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/60">
              Anca Ann Shibu
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-mono">
            Aspiring Software Engineer | Tech Enthusiast
          </p>
          <Terminal className="w-8 h-8 mx-auto text-white/80 animate-pulse" />
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-1 h-8 bg-gradient-to-b from-white/40 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}