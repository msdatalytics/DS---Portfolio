import { Code, Database, BarChart3, Cloud, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Data Analysis & Visualization",
    icon: BarChart3,
    skills: ["Power BI (DAX, Power Query)", "Tableau", "Microsoft Excel (Advanced)", "Data Cleaning", "KPI Development", "Data Storytelling"],
  },
  {
    title: "Databases & Data Warehousing",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Oracle Database", "Snowflake", "MongoDB (NoSQL)", "Data Modeling"],
  },
  {
    title: "Data Engineering & Big Data",
    icon: Cloud,
    skills: ["ETL / ELT Pipelines", "PySpark", "Databricks", "Apache Airflow", "dbt", "Workflow Orchestration"],
  },
  {
    title: "Machine Learning & Advanced Analytics",
    icon: Brain,
    skills: ["Supervised & Unsupervised Learning", "Regression, Classification, Clustering", "Feature Engineering", "Model Evaluation", "A/B Testing", "scikit-learn"],
  },
  {
    title: "ERP, BI & Business Systems",
    icon: Wrench,
    skills: ["Oracle Cloud ERP", "OTBI", "BI Publisher", "BIP APIs", "SAP (Exposure)", "Supply Chain Analytics"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS (EC2, S3, RDS)", "Git & GitHub", "CI/CD Basics", "Docker (Basic)"],
  },
  {
    title: "Business & Analytical Skills",
    icon: BarChart3,
    skills: ["Requirements Gathering", "Stakeholder Communication", "Business Process Analysis", "Process Optimization", "Agile / Scrum"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title font-heading">Skills & Expertise</h2>
            <p className="section-subtitle mx-auto">
              A comprehensive toolkit for data science, analytics, and business intelligence
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-primary/50 group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};
