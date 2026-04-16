
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants.tsx';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 md:mb-6">Case Studies</h2>
            <p className="text-slate-500 max-w-2xl text-base md:text-lg leading-relaxed">A detailed look at the digital solutions I've architected and implemented.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bento-card overflow-hidden bg-surface/30"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 md:px-4 py-1 md:py-1.5 bg-blue-950/80 backdrop-blur-xl rounded-full text-[8px] md:text-[9px] text-blue-400 font-extrabold uppercase tracking-widest border border-blue-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 md:p-10">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 md:mb-4 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed font-medium">
                  {project.description}
                </p>
                <div className="flex items-center justify-between border-t border-blue-500/10 pt-6 md:pt-8">
                  <a href={project.link} className="text-white text-[10px] md:text-sm font-extrabold flex items-center gap-2 md:gap-3 group/link uppercase tracking-widest">
                    View Project
                    <ArrowRight size={16} className="text-blue-500 group-hover/link:translate-x-2 transition-transform" />
                  </a>
                  <div className="flex gap-4 md:gap-6">
                    <button className="text-slate-500 hover:text-white transition-colors">
                      <Github size={20} />
                    </button>
                    <button className="text-slate-500 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
