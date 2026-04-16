
import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, Phone } from 'lucide-react';
import { WhatsAppBrandIcon } from './Icons.tsx';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 border-t border-blue-500/5 bg-[#0a101f] scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-12 md:gap-20">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 md:mb-10 leading-tight">Start Your <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">Journey</span>.</h2>
              <p className="text-slate-400 mb-10 md:mb-14 text-lg md:text-xl font-medium leading-relaxed">
                Ready to take your project to the next level? Let's build something extraordinary together.
              </p>
            </motion.div>

            <div className="space-y-8 md:space-y-10">
              <div className="group">
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black text-slate-600 mb-3">Direct Communication</p>
                <a href="mailto:hello@ashokkompelly.com" className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-blue-500 transition-colors flex items-center gap-3">
                  <Mail size={24} className="text-blue-500" />
                  ashokkompelly9@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black text-slate-600 mb-4">Digital Presence</p>
                <div className="flex gap-4 md:gap-5">
                  <a href="https://linkedin.com/in/ashokkompelly" className="w-12 h-12 md:w-14 md:h-14 bento-card flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all"><Linkedin size={22} /></a>
                  <a href="https://github.com/ashokkompelly" className="w-12 h-12 md:w-14 md:h-14 bento-card flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all"><Github size={22} /></a>
                  <a href="https://wa.me/917799324999" className="w-12 h-12 md:w-14 md:h-14 bento-card flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all"><WhatsAppBrandIcon size={22} /></a>
                  <a href="tel:+917799324999" className="w-12 h-12 md:w-14 md:h-14 bento-card flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all"><Phone size={22} /></a>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bento-card p-8 md:p-12 bg-surface/50"
          >
            <form className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="relative group">
                  <input type="text" className="w-full bg-transparent border-b border-blue-500/10 py-4 md:py-5 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600 font-semibold text-sm md:text-base" placeholder="Your Full Name" />
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-focus-within:w-full"></div>
                </div>
                <div className="relative group">
                  <input type="email" className="w-full bg-transparent border-b border-blue-500/10 py-4 md:py-5 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600 font-semibold text-sm md:text-base" placeholder="Email Address" />
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-focus-within:w-full"></div>
                </div>
              </div>
              <div className="relative group pt-4">
                <textarea rows={4} className="w-full bg-transparent border-b border-blue-500/10 py-4 md:py-5 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder:text-slate-600 font-semibold text-sm md:text-base" placeholder="Brief project summary..."></textarea>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-focus-within:w-full"></div>
              </div>
              <div className="pt-6 md:pt-8">
                <button className="btn-primary w-full py-4 md:py-5 text-lg md:text-xl tracking-widest uppercase flex items-center justify-center gap-3">
                  Transmit Inquiry
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
