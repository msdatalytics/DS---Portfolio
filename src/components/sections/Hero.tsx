import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import { FloatingParticles } from "@/components/ui/FloatingParticles";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-muted-foreground text-lg mb-4 opacity-0 animate-fade-up">
            Hi there ✨, I'm
          </p>

          {/* Name */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up animation-delay-100">
            <span className="text-foreground">Sakshi </span>
            <span className="gradient-text">Ankleshwariya</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 opacity-0 animate-fade-up animation-delay-200">
            Data Scientist & BI Analyst turning data into actionable insights
          </p>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up animation-delay-300">
            Master's student at Indiana University Bloomington specializing in Machine Learning, 
            Data Visualization, and Business Intelligence. Passionate about building data-driven 
            solutions that create real impact.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-up animation-delay-400">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#contact">
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 opacity-0 animate-fade-up animation-delay-500">
            <a
              href="https://github.com/msdatalytics"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sakshi-ankleshwariya-48b86b19b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sakshibarot123@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animation-delay-500">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
