import React from "react";
import { motion } from "motion/react";
import {
  Terminal,
  Link2,
  Github,
  Linkedin,
  Twitter,
  Zap,
  Smartphone,
  Headset,
} from "lucide-react";
import { WhatsAppBrandIcon } from "./Icons.tsx";
import { BIOGRAPHY } from "../constants.tsx";

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 px-6 scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 md:mb-6">
              About Me
            </h2>
            <div className="w-16 md:w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </motion.div>
          <p className="text-slate-500 max-w-md text-base md:text-lg font-medium leading-relaxed">
            Passionate about coding, problem-solving, and building the future of
            the web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bento-card p-8 md:p-12 flex flex-col justify-between border-blue-500/10"
          >
            <div>
              <Terminal className="text-blue-500 size-10 md:size-12 mb-6 md:mb-8" />
              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-semibold mb-6 md:mb-8">
                I specialize in crafting high-end, scalable web solutions that
                drive growth and engagement.
              </p>
              <p className="text-slate-400 leading-relaxed text-base md:text-lg">
                {BIOGRAPHY}
              </p>
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <div className="md:col-span-4 grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bento-card p-8 bg-blue-500/5 flex flex-col items-center justify-center text-center"
            >
              <span className="text-5xl md:text-6xl font-display font-bold text-blue-500 mb-2">
                10+
              </span>
              <p className="text-slate-400 uppercase tracking-widest font-extrabold text-[10px] md:text-[11px]">
                Years in Industry
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bento-card p-8 flex flex-col justify-center"
            >
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Link2 size={18} className="text-blue-500" />
                Find Me On
              </h3>
              <div className="flex justify-between items-center px-2">
                <a
                  href="https://github.com/ashokkompelly"
                  className="w-12 h-12 bento-card flex items-center justify-center text-slate-400 hover:text-blue-500 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/ashokkompelly"
                  className="w-12 h-12 bento-card flex items-center justify-center text-slate-400 hover:text-blue-500 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://wa.me/917799324999"
                  className="w-12 h-12 bento-card flex items-center justify-center text-slate-400 hover:text-blue-500 transition-colors"
                >
                  <WhatsAppBrandIcon size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Additional Features Row */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bento-card p-6 md:p-8 flex items-center gap-6"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500">
                <Zap size={24} />
              </div>
              <div>
                <p className="text-white font-bold text-sm md:text-base">
                  Fast Performance
                </p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">
                  Optimization Expert
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bento-card p-6 md:p-8 flex items-center gap-6"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500">
                <Smartphone size={24} />
              </div>
              <div>
                <p className="text-white font-bold text-sm md:text-base">
                  Responsive Design
                </p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">
                  Mobile First Approach
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bento-card p-6 md:p-8 flex items-center gap-6 border-blue-500/20 bg-blue-600/10"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Headset size={24} />
              </div>
              <div>
                <p className="text-white font-bold text-sm md:text-base">
                  Client Support
                </p>
                <p className="text-[10px] text-blue-400 font-bold uppercase tracking-wider mt-1">
                  Always Available
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
