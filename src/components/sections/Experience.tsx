import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "GIS ML Intern",
    company: "Fenstermaker",
    location: "Lafayette, USA",
    period: "Sep 2025 - Dec 2025",
    description: [
      "Engineered a YOLOv8-based computer vision pipeline detecting 1,400+ MUTCD signs from roadway survey videos",
      "Processed 40+ miles of geospatial footage and integrated GPS-tagged detections into ArcGIS",
      "Orchestrated video-to-map workflows using GeoPandas/Pandas, reducing quality-check time by 50%",
    ],
    skills: ["YOLOv8", "Python", "OpenCV", "ArcGIS", "GeoPandas"],
  },
  {
    title: "Graduate Teaching Assistant",
    company: "Indiana University Bloomington",
    location: "Bloomington, USA",
    period: "Aug 2025 - Dec 2025",
    description: [
      "Guided 40+ graduate students through SQL, Arrow, Snowflake, and Neo4j coursework",
      "Delivered weekly workshops on Snowflake, MySQL optimization, and Neo4j",
    ],
    skills: ["SQL", "Snowflake", "Neo4j", "Teaching"],
  },
  {
    title: "Operational Support Intern",
    company: "Finetune",
    location: "Chicago, USA",
    period: "May 2025 - Aug 2025",
    description: [
      "Streamlined reporting for 50K+ utility records using Power BI, VBA, and Python",
      "Optimized workflow efficiency by 25% through pipeline enhancements and KPI redesign",
      "Developed DAX/Power Query dashboards that surfaced operational and spending insights",
    ],
    skills: ["Power BI", "VBA", "Python", "DAX", "Power Query"],
  },
  {
    title: "Research Assistant",
    company: "Indiana University Bloomington",
    location: "Bloomington, USA",
    period: "Jan 2025 - May 2025",
    description: [
      "Prepared a 2,000+ case file database for the Indiana Innocence Project using SQL and Power BI",
      "Streamlined case selection by 35% and delivered actionable insights",
    ],
    skills: ["SQL", "Power BI", "Data Analysis"],
  },
  {
    title: "Senior BI Analyst",
    company: "Mastek",
    location: "Ahmedabad, India",
    period: "Jan 2022 - Aug 2024",
    description: [
      "Built 17+ Oracle ERP dashboards with BI Publisher, OTBI, and VBA, cutting latency by 99%",
      "Automated cross-functional reporting workflows, reducing manual work by 60%",
      "Collaborated with finance/procurement teams to define KPIs and deliver executive insights",
    ],
    skills: ["Oracle ERP", "BI Publisher", "OTBI", "VBA", "Power BI"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="section-title font-heading">Work Experience</h2>
            <p className="section-subtitle mx-auto">
              A journey through data science, business intelligence, and machine learning
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 animate-fade-up ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-[7px] md:-translate-x-1/2 rounded-full bg-primary shadow-glow z-10" />

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                    <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.01] hover:border-primary/30">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-heading text-xl font-semibold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <p className="text-muted-foreground text-sm">{exp.location}</p>
                        </div>
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
