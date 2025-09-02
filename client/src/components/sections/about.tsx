import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Award, Crown } from 'lucide-react';

export function About() {
  const achievements = [
    { icon: Trophy, text: "Solved 200+ Problems on LeetCode & GeeksforGeeks", color: "text-yellow-500" },
    { icon: Medal, text: "75% in IIT-JEE Mains 2020", color: "text-blue-500" },
    { icon: Star, text: "5 Star in C++ at HackerRank, 2 Star MySQL", color: "text-green-500" },
    { icon: Award, text: "Central Sector Scholarship - Top 10% CSE Students", color: "text-purple-500" },
    { icon: Crown, text: "3rd Rank at District Level - 10th Board Exam", color: "text-red-500" },
  ];

  const education = [
    {
      degree: "Bachelor of Technology - Computer Science & Engineering",
      institution: "Gyan Ganga College Of Technology, Jabalpur",
      details: "CGPA: 8.69 | July 2019 - May 2023",
      location: "Jabalpur, MP"
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Pt J L Nehru Hr. Sec. School, Chakki Khamariya",
      details: "88.4% | July 2018 - March 2019",
      location: "Seoni, MP"
    },
    {
      degree: "High School (10th)",
      institution: "Pt J L Nehru Hr. Sec. School, Chakki Khamariya",
      details: "94% | July 2016 - March 2017",
      location: "Seoni, MP"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="about-title">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Computer Science Engineering graduate from Gyan Ganga College of Technology, Jabalpur. 
            With a strong foundation in competitive programming and full-stack development, I love solving complex problems and building innovative solutions.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Education */}
            <div className="glass rounded-2xl p-8" data-testid="education-section">
              <h3 className="text-2xl font-bold mb-4 text-primary">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    data-testid={`education-item-${index}`}
                  >
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{edu.details}</span>
                      <span>{edu.location}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Achievements */}
            <div className="glass rounded-2xl p-8" data-testid="achievements-section">
              <h3 className="text-2xl font-bold mb-4 text-primary">Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      data-testid={`achievement-item-${index}`}
                    >
                      <Icon className={`mr-3 ${achievement.color}`} size={20} />
                      <span className="text-muted-foreground">{achievement.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Modern tech background */}
            <motion.div 
              className="glass rounded-2xl p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              data-testid="workspace-showcase"
            >
              <img 
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern coding setup with multiple monitors" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">My Workspace</h3>
                <p className="text-muted-foreground">
                  I believe in creating an environment that fosters creativity and productivity. 
                  My setup includes multiple monitors for efficient coding, comfortable ergonomics for long coding sessions, 
                  and all the tools needed to bring ideas to life.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
