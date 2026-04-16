import React from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, Phone } from "lucide-react";
import { WhatsAppBrandIcon } from "./Icons.tsx";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 px-6 border-t border-blue-500/5 bg-[#0a101f] scroll-mt-24"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 md:mb-10 leading-tight">
              Start Your{" "}
              <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">
                Journey
              </span>
              .
            </h2>
            <p className="text-slate-400 mb-10 md:mb-14 text-lg md:text-xl font-medium leading-relaxed">
              Ready to take your project to the next level? Let's build
              something extraordinary together.
            </p>
          </motion.div>

          <div className="space-y-8 md:space-y-10 w-full md:w-auto">
            <div className="group">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black text-slate-600 mb-3 text-center md:text-left">
                Direct Communication
              </p>
              <a
                href="mailto:hello@ashokkompelly.com"
                className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-blue-500 transition-colors flex items-center justify-center md:justify-start gap-3"
              >
                <Mail size={24} className="text-blue-500" />
                ashokkompelly9@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black text-slate-600 mb-4 text-center md:text-left">
                Digital Presence
              </p>
              <div className="flex justify-center md:justify-start gap-4 md:gap-5">
                <a
                  href="https://linkedin.com/in/ashokkompelly"
                  className="w-12 h-12 md:w-14 md:h-14 bento-card flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://github.com/ashokkompelly"
                  className="w-12 h-12 md:w-14 md:h-14 bento-card flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://wa.me/917799324999"
                  className="w-12 h-12 md:w-14 md:h-14 bento-card flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all"
                >
                  <WhatsAppBrandIcon size={22} />
                </a>
                <a
                  href="tel:+917799324999"
                  className="w-12 h-12 md:w-14 md:h-14 bento-card flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all"
                >
                  <Phone size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
