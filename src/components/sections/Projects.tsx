import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, MapPin, CreditCard, Workflow, Lock, Mic, Film, BarChart3, Wind, Database } from "lucide-react";

const projects = [
  {
    title: "Transcripto.ai",
    description:
      "AI-powered meeting assistant that transcribes, summarizes, extracts insights, and visualizes conversations. Built at Luddy Hackathon 2025.",
    highlights: ["Real-time transcription", "Sentiment Analysis", "Visual Insights"],
    tech: ["React", "Python", "OpenAI GPT-4", "Whisper", "AssemblyAI"],
    icon: Mic,
    color: "from-pink-500 to-rose-500",
    githubUrl: "https://github.com/msdatalytics/TranscriptoAI",
  },
  {
    title: "Hollywood Profitable Stories",
    description:
      "Visualizing Hollywood’s most profitable stories using Tableau. Analyzes 74 films across 13 studios and 6 genres to identify profitability trends.",
    highlights: ["Tableau Dashboard", "Profitability Analysis", "Data Storytelling"],
    tech: ["Tableau", "Data Visualization", "Excel"],
    icon: Film,
    color: "from-purple-500 to-pink-500",
    githubUrl: "https://github.com/msdatalytics/hollywood-profitable-stories",
  },
  {
    title: "US Sales Dashboard",
    description:
      "Interactive Power BI dashboard analyzing US sales performance across regions, categories, and shipping modes to identify growth opportunities.",
    highlights: ["Regional Analysis", "Sales Trends", "Geospatial Insights"],
    tech: ["Power BI", "DAX", "Microsoft Bing Maps"],
    icon: BarChart3,
    color: "from-blue-600 to-indigo-600",
    githubUrl: "https://github.com/msdatalytics/US-Sales-Dashboard",
  },
  {
    title: "Air Quality & Respiratory Health",
    description:
      "Interactive dashboard analyzing the relationship between air quality (AQI) and respiratory health outcomes across U.S. states and counties.",
    highlights: ["AQI Visualization", "Health Correlation", "Geospatial Analysis"],
    tech: ["Tableau", "EPA Data", "Census Data"],
    icon: Wind,
    color: "from-green-500 to-emerald-500",
    githubUrl: "https://github.com/msdatalytics/air-quality-respiratory-health",
  },
  {
    title: "Indiana Innocence Project Database",
    description:
      "Prepared a 2,000+ case file database for the Indiana Innocence Project using SQL and Power BI. Streamlined case selection by 35% and delivered actionable insights.",
    highlights: ["2,000+ case files", "35% faster selection", "Actionable Insights"],
    tech: ["SQL", "Power BI"],
    icon: Database,
    color: "from-cyan-500 to-blue-500",
    isNDA: true,
    githubUrl: "",
  },
  {
    title: "Traffic Sign Detection & Mapping",
    description:
      "AI-based traffic sign detection model using YOLOv8 and OpenCV. Mapped results with GPS metadata to create ArcGIS shapefiles for roadway analytics.",
    highlights: ["1,400+ signs detected", "40+ miles processed", "GPS-tagged detections"],
    tech: ["Python", "YOLOv8", "OpenCV", "ArcGIS", "GeoPandas"],
    icon: MapPin,
    color: "from-orange-500 to-red-500",
    isNDA: true,
    githubUrl: "",
  },
  {
    title: "IndyGo Ridership Dashboard",
    description:
      "Interactive Power BI dashboard analyzing 500K+ transit records to identify ridership trends and optimize scheduling.",
    highlights: ["500K+ records", "30% planning accuracy improvement"],
    tech: ["Power BI", "DAX", "SQL"],
    icon: Eye,
    color: "from-blue-500 to-cyan-500",
    githubUrl: "https://github.com/msdatalytics/indygo-ridership-dashboard",
  },
  {
    title: "AmEx Default Prediction",
    description:
      "Machine learning model for predicting credit defaults with 30% accuracy improvement and 50% pipeline runtime reduction.",
    highlights: ["40% processing time reduction", "SHAP analysis", "ROC/AUC optimization"],
    tech: ["Python", "Pandas", "SQL", "Scikit-learn"],
    icon: CreditCard,
    color: "from-emerald-500 to-teal-500",
    githubUrl: "https://github.com/msdatalytics/AmEx-Default-Prediction",
  },
  {
    title: "Smart Approval System",
    description:
      "Automated ERP workflows with recalibrated SQL queries, improving financial data processing efficiency and reducing storage costs.",
    highlights: ["35% faster reporting", "12% storage cost reduction"],
    tech: ["SQL", "ERP Automation", "AWS S3"],
    icon: Workflow,
    color: "from-violet-500 to-purple-500",
    isNDA: true,
    githubUrl: "",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title font-heading">Featured Projects</h2>
            <p className="section-subtitle mx-auto">
              A selection of data science and machine learning projects that showcase
              my technical skills and problem-solving approach
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-primary/50 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Header */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                <div className="p-8">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white`}>
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {project.isNDA ? (
                      <Button variant="outline" size="sm" className="flex-1 opacity-70 cursor-not-allowed" disabled>
                        <Lock className="w-4 h-4 mr-2" />
                        NDA Protected
                      </Button>
                    ) : (
                      <Button variant="default" size="sm" className="flex-1" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
