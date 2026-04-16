import React from "react";
import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { EXPERIENCES } from "../constants";

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative py-20 md:py-24 bg-slate-900/30 scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-400 font-bold tracking-widest uppercase text-[10px] md:text-xs mb-2 block">
              History
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Professional Journey
            </h2>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto relative space-y-8 md:space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={18} />
              </div>
              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bento-card p-6 md:p-8 group-hover:border-blue-500/30 transition-all bg-surface/50">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-blue-400 text-[10px] md:text-xs uppercase tracking-widest">
                    {exp.period}
                  </div>
                </div>
                <div className="text-xl md:text-2xl font-bold text-white mb-1">
                  {exp.role}
                </div>
                <div className="text-base md:text-lg text-slate-300 font-medium mb-4">
                  {exp.company}
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-slate-400 text-xs md:text-sm flex gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
