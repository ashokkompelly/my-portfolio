
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed w-full z-50 top-0 md:top-8 px-0 md:px-6">
      <div className={`container mx-auto max-w-5xl transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-[#0f172a]/90 backdrop-blur-2xl py-4 md:py-3 px-6 md:px-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-b md:border border-blue-500/20 md:rounded-[2rem]' : 'bg-transparent py-6 md:py-4 px-6 md:px-2'}`}>
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-xl md:text-2xl font-display font-black text-white flex items-center gap-3"
          >
            <span className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg md:rounded-xl flex items-center justify-center text-[10px] md:text-xs shadow-lg shadow-blue-600/30">AK</span>
            <span className="tracking-tighter">Ashok.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[10px] text-slate-400 hover:text-blue-500 transition-colors font-black uppercase tracking-[0.3em]"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-[11px] font-extrabold uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 flex items-center gap-2"
            >
              Contact
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0f172a] border-b border-blue-500/20 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-slate-300 hover:text-blue-500 transition-colors font-bold uppercase tracking-[0.2em]"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-4 px-6 py-4 bg-blue-600 text-white rounded-xl text-center text-sm font-extrabold uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
