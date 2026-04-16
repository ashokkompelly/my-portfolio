
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Experience from './components/Experience.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import AiAssistant from './components/AiAssistant.tsx';
import { WhatsAppBrandIcon } from './components/Icons.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Interactive Elements */}
      <AiAssistant />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/910000000000?text=Hi%20Ashok,%20I'd%20like%20to%20discuss%20a%20project%20with%20you." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-[60] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl shadow-green-500/40 hover:scale-110 transition-transform group"
        title="Chat on WhatsApp"
      >
        <WhatsAppBrandIcon size={30} />
        <span className="absolute right-full mr-4 bg-[#25D366] text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Project Inquiry? Chat now!
        </span>
      </a>
      
      {/* Scroll indicator */}
      <div className="fixed left-6 bottom-6 hidden lg:flex flex-col items-center gap-4 z-40">
        <div className="w-[1px] h-24 bg-gradient-to-t from-indigo-500 to-transparent"></div>
        <p className="text-[10px] text-indigo-400 uppercase tracking-[0.2em] font-bold [writing-mode:vertical-lr] mb-2">Scroll Explorer</p>
      </div>
    </div>
  );
};

export default App;
