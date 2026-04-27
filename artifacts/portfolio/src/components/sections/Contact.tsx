import { profileData } from "@/data/profile";
import { Mail, MapPin, ExternalLink, Github, Linkedin, Phone, Download } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <footer id="contact" className="bg-card border-t border-border pt-20 pb-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold tracking-tight mb-4"
            >
              Let's Build the Future of Data
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-8 max-w-md"
            >
              Looking for a Data Scientist, Analyst, or Engineer? Let's connect and discuss how my skills can bring value to your team.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href={`mailto:${profileData.contact.email}`}
                className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium bg-primary text-primary-foreground rounded-lg shadow-lg hover:bg-primary/90 transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Say Hello
              </a>
              <a
                href={`${import.meta.env.BASE_URL}${profileData.resumeUrl}`}
                download="Mohamed_Sameh_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium border border-border bg-background text-foreground rounded-lg hover:bg-secondary transition-colors"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </motion.div>
          </div>

          <div className="md:w-1/3 flex flex-col justify-center space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-muted-foreground">{profileData.location}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-lg">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <a href={`mailto:${profileData.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                  {profileData.contact.email} <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-lg">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <a href={`tel:${profileData.contact.phoneRaw}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {profileData.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
               <a 
                href={profileData.contact.github} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-background border border-border rounded-full text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href={profileData.contact.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-background border border-border rounded-full text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mohamed Sameh. All rights reserved.</p>
          <div className="flex gap-6">
             <span className="font-mono">Sys.Status: Online</span>
             <span className="font-mono">Loc: EG</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
