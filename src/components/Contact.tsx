//import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-800" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <Mail className="w-6 h-6 text-cyan-400" />
          <h2 className="text-3xl font-bold text-white font-mono">Contact</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
          <form
  action="https://getform.io/f/bqoojokb"
  method="POST"
  className="space-y-6"
>
  <div>
    <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
    <input
      type="text"
      name="name"
      id="name"
      required
      className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-cyan-400 focus:outline-none"
    />
  </div>
  <div>
    <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
    <input
      type="email"
      name="email"
      id="email"
      required
      className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-cyan-400 focus:outline-none"
    />
  </div>
  <div>
    <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
    <textarea
      name="message"
      id="message"
      rows={4}
      required
      className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-cyan-400 focus:outline-none"
    ></textarea>
  </div>
  <button
    type="submit"
    className="flex items-center gap-2 px-6 py-3 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
  >
    <Send className="w-4 h-4" />
    Send Message
  </button>
</form>

          </div>

          {/* Connect with Me Section */}
          <div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
              <div className="flex flex-col space-y-4">
                {/* GitHub Link */}
                <a
                  href="https://github.com/annshibu05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                  <span>GitHub</span>
                </a>

                {/* LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/in/anca-ann-shibu-191472210/?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>LinkedIn</span>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
