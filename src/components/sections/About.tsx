import { GraduationCap, MapPin, Briefcase, Coffee, BookOpen, Plane, BarChart3 } from "lucide-react";

const interests = [
  { icon: Coffee, label: "Coffee" },
  { icon: BookOpen, label: "Learning" },
  { icon: Plane, label: "Travel" },
  { icon: BarChart3, label: "Data" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title font-heading">About Me</h2>
            <p className="section-subtitle mx-auto">
              Data Scientist with a passion for transforming complex data into
              meaningful stories and actionable insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: "100ms" }}>


              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-medium text-foreground">MS Data Science</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Indiana, USA</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium text-foreground">3 Years</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GPA</p>
                    <p className="font-medium text-foreground">3.9 / 4.0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Interests & Visual */}
            {/* Education Highlight */}
            <div className="glass-card rounded-2xl p-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <h3 className="font-heading text-xl font-semibold mb-6 text-foreground">
                Education
              </h3>
              <div className="space-y-4">
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary" />
                  <p className="font-medium text-foreground">
                    Master's in Data Science
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Indiana University Bloomington
                  </p>
                  <p className="text-primary text-sm font-medium">2024 - 2026</p>
                </div>
                <div className="relative pl-6 border-l-2 border-muted">
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-muted-foreground" />
                  <p className="font-medium text-foreground">
                    MBA in Information Systems
                  </p>
                  <p className="text-muted-foreground text-sm">
                    NMIMS
                  </p>
                  <p className="text-muted-foreground text-sm">2022 - 2024</p>
                </div>
                <div className="relative pl-6 border-l-2 border-muted">
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-muted-foreground" />
                  <p className="font-medium text-foreground">
                    B.Tech in Computer Engineering
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Nirma University, India
                  </p>
                  <p className="text-muted-foreground text-sm">2018 - 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
