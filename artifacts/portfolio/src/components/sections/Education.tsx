import { motion } from "framer-motion";
import { educationData, experienceHighlights } from "@/data/education";
import { GraduationCap, Briefcase, ChevronRight } from "lucide-react";

export function Education() {
  return (
    <section id="experience" className="py-24 bg-secondary/20 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Experience Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <Briefcase className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Experience Highlights</h2>
            </div>
            
            <div className="space-y-8">
              {experienceHighlights.map((highlight, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="mt-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            {/* Decorative data viz block */}
            <div className="mt-12 p-6 border border-border rounded-xl bg-card">
              <div className="text-sm font-mono text-muted-foreground mb-4">{'<PerformanceMetrics />'}</div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Data Pipelines Built</span>
                    <span className="text-primary font-mono">100%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary" 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Model Optimization</span>
                    <span className="text-primary font-mono">100%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-accent" 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Education & Training</h2>
            </div>
            
            <div className="relative border-l border-border/50 ml-4 space-y-12 pb-4">
              {educationData.map((edu, index) => (
                <div key={edu.id} className="relative pl-8">
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary ring-4 ring-background"></div>
                  
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <span className="text-primary font-medium my-1">{edu.institution}</span>
                    {edu.period && (
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1">
                        {edu.period}
                      </span>
                    )}
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
