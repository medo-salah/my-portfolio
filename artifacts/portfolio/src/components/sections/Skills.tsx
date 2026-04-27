import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Terminal, Database, BrainCircuit, Activity } from "lucide-react";

const icons: Record<string, React.ElementType> = {
  "Programming & Data Tools": Terminal,
  "Data Science & ML": BrainCircuit,
  "Data Engineering": Database,
  "Core Competencies": Activity,
};

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">Technical Arsenal</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Skills & Tools</h2>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillsData.map((category) => {
            const Icon = icons[category.category] || Terminal;
            
            return (
              <motion.div key={category.category} variants={itemVariants}>
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-300">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {category.skills.map((skill) => (
                        <div 
                          key={skill}
                          className="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium text-foreground hover:bg-primary/5 hover:border-primary/20 hover:text-primary transition-all cursor-default"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
