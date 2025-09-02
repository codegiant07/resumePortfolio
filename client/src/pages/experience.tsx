import { motion } from 'framer-motion';
import { Navbar } from '@/components/navigation/navbar';
import { Experience as ExperienceSection } from '@/components/sections/experience';

export default function ExperiencePage() {
  return (
    <div className="dark min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ExperienceSection />
      </div>
      
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