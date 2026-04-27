import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { photosData } from "@/data/photos";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function About() {
  const mainPhoto = photosData.find(p => p.id === "portrait-main");
  const otherPhotos = photosData.filter(p => p.id !== "portrait-main");

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Photo Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12 lg:w-1/3 shrink-0 flex flex-col gap-4"
          >
            <div className="relative group">
              {/* Decorative background box */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <Card className="relative overflow-hidden border-border bg-card shadow-xl transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-primary/10">
                <CardContent className="p-0">
                  {mainPhoto ? (
                    <img 
                      src={mainPhoto.url} 
                      alt={mainPhoto.alt}
                      className="w-full h-auto aspect-[3/4] object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-[500px] bg-muted flex items-center justify-center">
                      Photo Placeholder
                    </div>
                  )}
                  <div className="absolute inset-0 border-[1px] border-primary/20 rounded-xl m-4 pointer-events-none mix-blend-overlay"></div>
                </CardContent>
              </Card>

              {/* Little info badge overlapping photo */}
              <div className="absolute -bottom-6 -right-6 md:-right-10 bg-card border border-border shadow-lg p-6 rounded-xl flex items-center gap-4 z-10">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground uppercase tracking-wider font-mono">Location</span>
                  <span className="font-semibold text-lg">{profileData.location}</span>
                </div>
              </div>
            </div>

            {/* Scalable gallery for additional photos */}
            {otherPhotos.length > 0 && (
              <div className="grid grid-cols-2 gap-4 mt-8">
                {otherPhotos.map((photo, i) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="relative overflow-hidden rounded-xl border border-border aspect-square group"
                  >
                    <img 
                      src={photo.url} 
                      alt={photo.alt}
                      className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-7/12 lg:w-2/3 md:pt-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
              <div className="h-[1px] flex-1 bg-border ml-4"></div>
            </div>
            
            <div className="prose prose-lg dark:prose-invert prose-p:text-muted-foreground max-w-none mb-10">
              <p className="leading-relaxed text-lg">
                {profileData.summary}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="text-primary mr-2">/</span> Languages
                </h3>
                <div className="flex flex-col gap-3">
                  {profileData.languages.map(lang => (
                    <div key={lang.name} className="flex justify-between items-center border-b border-border/50 pb-2">
                      <span className="font-medium">{lang.name}</span>
                      <Badge variant="secondary" className="font-normal bg-secondary/50">{lang.proficiency}</Badge>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                 <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="text-primary mr-2">/</span> Profile Data
                </h3>
                <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-foreground w-20">VAR name</span> = "{profileData.fullName}";
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground w-20">VAR role</span> = "Data Specialist";
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground w-20">VAR loc</span>  = "{profileData.location}";
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground w-20">VAR status</span> = "Open to Work";
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
