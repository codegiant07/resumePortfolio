import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '@/hooks/use-scroll-spy';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(navItems.map(item => item.id));

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl font-bold gradient-text" data-testid="logo">RC</span>
            </motion.div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'nav-active text-white' 
                        : 'text-foreground hover:bg-primary/20'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-testid={`nav-link-${item.id}`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-primary focus:outline-none"
                whileTap={{ scale: 0.95 }}
                data-testid="mobile-menu-button"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <motion.div 
          className={`md:hidden glass ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          data-testid="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  activeSection === item.id 
                    ? 'nav-active text-white' 
                    : 'text-foreground hover:bg-primary/20'
                }`}
                whileHover={{ x: 10 }}
                data-testid={`mobile-nav-link-${item.id}`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
