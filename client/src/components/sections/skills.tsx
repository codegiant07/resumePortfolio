import { motion } from 'framer-motion';
import { SiPython, SiCplusplus, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiMysql, SiGit, SiHtml5, SiCss3, SiFlutter, SiOpenjdk } from 'react-icons/si';

export function Skills() {
  const skills = [
    { icon: SiOpenjdk, name: "Java", color: "text-red-500" },
    { icon: SiPython, name: "Python", color: "text-blue-500" },
    { icon: SiCplusplus, name: "C++", color: "text-purple-500" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-500" },
    { icon: SiReact, name: "React", color: "text-cyan-500" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
    { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
    { icon: SiGit, name: "Git", color: "text-red-600" },
    { icon: SiHtml5, name: "HTML5", color: "text-orange-600" },
    { icon: SiCss3, name: "CSS3", color: "text-blue-600" },
    { icon: SiFlutter, name: "Flutter", color: "text-indigo-500" },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="skills-title">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground">Technologies I work with</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="glass rounded-2xl p-6 text-center group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                data-testid={`skill-${skill.name.toLowerCase()}`}
              >
                <motion.div
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Icon className={`text-4xl ${skill.color} mb-4 mx-auto`} />
                  <h3 className="font-semibold text-sm">{skill.name}</h3>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
