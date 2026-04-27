import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowDown, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profile";
import heroBgUrl from "@/assets/hero-bg.png";

export function Hero() {
  return (
    <section 
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBgUrl} 
          alt="Abstract Data Connections" 
          className="w-full h-full object-cover opacity-15 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background"></div>
        {/* Subtle animated gradient orbs */}
        <div className="absolute top-[20%] left-[10%] w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6"
        >
          <div className="space-y-2">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary font-mono text-sm md:text-base tracking-wider uppercase"
            >
              System Online // Ready
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground"
            >
              {profileData.name}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-2 text-xl md:text-3xl font-medium text-muted-foreground"
            >
              {profileData.roles.map((role, i) => (
                <span key={role} className="flex items-center">
                  <span className="text-foreground">{role}</span>
                  {i < profileData.roles.length - 1 && (
                    <span className="mx-3 text-primary/50">|</span>
                  )}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground font-mono"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" /> {profileData.location}
            </span>
            <a href={`mailto:${profileData.contact.email}`} className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="h-4 w-4 text-primary" /> {profileData.contact.email}
            </a>
            <a href={`tel:${profileData.contact.phoneRaw}`} className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="h-4 w-4 text-primary" /> {profileData.contact.phone}
            </a>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            {profileData.objective}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Button size="lg" className="h-12 px-8 shadow-lg shadow-primary/20" asChild>
              <a href="#projects">
                View My Work
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8" asChild>
              <a
                href={`${import.meta.env.BASE_URL}${profileData.resumeUrl}`}
                download="Mohamed_Sameh_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center space-x-5 pt-8"
          >
            <a href={profileData.contact.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={profileData.contact.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={`mailto:${profileData.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Visual / Accent area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block h-[600px] w-full"
        >
          {/* Abstract geometric element or 3D placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative w-[400px] h-[400px]">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_20s_linear_infinite]"></div>
                {/* Inner ring */}
                <div className="absolute inset-8 rounded-full border border-accent/40 animate-[spin_15s_linear_infinite_reverse]"></div>
                {/* Center node */}
                <div className="absolute inset-0 m-auto w-32 h-32 bg-background border border-primary/50 shadow-[0_0_50px_rgba(var(--primary),0.3)] rounded-full flex items-center justify-center overflow-hidden">
                  <div className="text-primary font-mono text-xs text-center leading-tight">
                    <span className="block opacity-50">SYS</span>
                    <span className="block font-bold">DATA</span>
                    <span className="block opacity-50">NODE</span>
                  </div>
                </div>
                
                {/* Data points */}
                <div className="absolute top-1/4 left-0 w-3 h-3 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(var(--accent),0.8)]"></div>
                <div className="absolute bottom-1/4 right-0 w-4 h-4 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(var(--primary),0.8)]" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -top-4 right-1/4 w-2 h-2 bg-destructive rounded-full animate-pulse shadow-[0_0_10px_rgba(var(--destructive),0.8)]" style={{ animationDelay: '0.5s' }}></div>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
