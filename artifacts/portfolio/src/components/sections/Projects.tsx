import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CandlestickChart, Layers, FileSearch, ShieldCheck, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ElementType> = {
  trading: CandlestickChart,
  segmentation: Layers,
  ocr: FileSearch,
  auth: ShieldCheck,
};

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
          <div className="h-[1px] flex-1 bg-border ml-4 max-w-[200px]"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            const Icon = iconMap[project.iconType] || CandlestickChart;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index === 0 ? "lg:col-span-2" : ""}
              >
                <Card className="h-full flex flex-col group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-border overflow-hidden">
                  {/* Subtle top border highlight on hover */}
                  <div className="h-1 w-full bg-border group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-500"></div>

                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-secondary rounded-xl text-primary group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-8 h-8" />
                      </div>
                      <Button variant="ghost" size="sm" asChild className="opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex">
                        <a href={project.githubUrl} target="_blank" rel="noreferrer">
                          View Repo <ArrowUpRight className="ml-1 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardContent>

                  <CardFooter className="pt-6 border-t border-border/50 bg-secondary/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <Badge key={tech} variant="outline" className="bg-background">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" asChild className="shrink-0">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
