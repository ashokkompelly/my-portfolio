
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { WhatsAppBrandIcon } from './Icons.tsx';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-40 overflow-hidden px-6 scroll-mt-24">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full text-center"
      >
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 md:px-5 py-2 rounded-full mb-8 md:mb-10">
          <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 md:h-2.5 md:w-2 md:w-2.5 bg-blue-500"></span>
          </span>
          <span className="text-[9px] md:text-[11px] uppercase tracking-[0.25em] font-extrabold text-blue-400">Available for Freelance</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold text-white leading-[1.1] mb-8 md:mb-10 tracking-tight">
          Turning Ideas into <span className="text-blue-500">Interactive</span> Realities.
        </h1>
        
        <p className="text-slate-400 text-base md:text-2xl mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed font-medium px-4 md:px-0">
          I'm Ashok Kompelly, a Fullstack Developer & Team Lead with 10+ years of experience and 100+ projects delivered.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
          <a href="#projects" className="btn-primary w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-4">
            View My Projects
          </a>
          <a href="#contact" className="text-white text-base md:text-lg font-bold flex items-center gap-3 group hover:text-blue-400 transition-colors">
            Get in Touch
            <ArrowRight size={20} className="text-blue-500 group-hover:translate-x-1.5 transition-transform" />
          </a>
          {/* <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-green-500 transition-colors font-bold text-sm md:text-base">
            <WhatsAppBrandIcon size={20} />
            WhatsApp
          </a> */}
        </div>
      </motion.div>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-blue-500 to-transparent"
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
