import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="section-title font-heading">Let's Connect</h2>
            <p className="section-subtitle mx-auto">
              I'm always open to discussing new opportunities, collaborations,
              or just having a chat about data science
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-card rounded-2xl p-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
                <h3 className="font-heading text-xl font-semibold mb-6 text-foreground">
                  Get in Touch
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:sakshibarot123@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">sakshibarot123@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+19309044950"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">+1 (930) 904-4950</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">Bloomington, Indiana, USA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card rounded-2xl p-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
                <h3 className="font-heading text-xl font-semibold mb-6 text-foreground">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/msdatalytics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-secondary/50 hover:bg-foreground hover:text-background transition-all group"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sakshi-ankleshwariya-48b86b19b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all group"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
