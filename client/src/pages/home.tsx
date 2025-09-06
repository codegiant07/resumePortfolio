import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/navigation/navbar';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  useEffect(() => {
    // Add intersection observer for glass elements animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all glass elements for fade-in animations
    document.querySelectorAll('.glass').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="dark">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <motion.footer 
        className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        data-testid="footer"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">© 2024 Rajesh Chouhan. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Built with passion for technology and innovation</p>
        </div>
      </motion.footer>
    </div>
  );
}
