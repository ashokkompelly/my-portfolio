/// <reference types="react" />
import React, { useState } from "react";
import { motion } from "motion/react";
import { SKILLS } from "../constants.tsx";
import { Skill } from "../types.ts";

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Skill["category"] | "all">("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "design", name: "Designing" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "cloud", name: "Cloud" },
    { id: "cms", name: "CMS" },
    { id: "seo", name: "SEO/Marketing" },
    { id: "versioning", name: "Version Control" },
    { id: "testing", name: "Testing" },
  ];

  const filteredSkills =
    activeTab === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeTab);

  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-6 border-y border-blue-500/5 bg-[#0a101f] scroll-mt-24"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-10 mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 md:mb-6">
              Expertise
            </h2>
            <p className="text-slate-500 max-w-md text-base md:text-lg leading-relaxed">
              The technology stack I use to bring modern digital products to
              life.
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl text-[9px] md:text-[11px] font-extrabold uppercase tracking-[0.15em] md:tracking-[0.2em] transition-all border ${
                  activeTab === cat.id
                    ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/20"
                    : "text-slate-500 hover:text-white bg-surface border-blue-500/10"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 md:p-8 bento-card flex flex-col items-center justify-center text-center group bg-surface/50"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-slate-500 group-hover:bg-blue-600/20 group-hover:border-blue-600/40 group-hover:text-blue-500 transition-all duration-300">
                <i className={`${skill.icon} text-xl md:text-2xl`}></i>
              </div>
              <h3 className="text-white text-xs md:text-sm font-extrabold tracking-tight mt-4 md:mt-5 group-hover:text-blue-400 transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
