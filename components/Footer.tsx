
import React from 'react';
import { motion } from 'motion/react';
import { WhatsAppBrandIcon } from './Icons.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-16 px-6 border-t border-white/5 bg-[#020617]">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-600 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-center md:text-left"
        >
          © {new Date().getFullYear()} Ashok Kompelly — Crafted with Precision
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex gap-6 md:gap-8"
        >
          <a href="#about" className="text-slate-600 hover:text-blue-500 text-[9px] md:text-[10px] uppercase tracking-widest font-bold transition-colors">About</a>
          <a href="#projects" className="text-slate-600 hover:text-blue-500 text-[9px] md:text-[10px] uppercase tracking-widest font-bold transition-colors">Projects</a>
          <a href="#contact" className="text-slate-600 hover:text-blue-500 text-[9px] md:text-[10px] uppercase tracking-widest font-bold transition-colors">Contact</a>
          <a href="#" className="text-slate-600 hover:text-blue-500 transition-colors"><WhatsAppBrandIcon size={16} /></a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
