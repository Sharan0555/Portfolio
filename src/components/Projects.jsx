import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";

const projects = [
  {
    title: "AI Stock Price Prediction",
    description:
      "An AI-powered forecasting system using machine learning algorithms to predict future stock prices. Analyzes historical market data and patterns to help investors make data-driven financial decisions.",
    tags: ["Python", "Machine Learning", "NumPy", "Data Analysis"],
    period: "Jun 2025 - Present",
    category: "AI / Machine Learning",
    status: "Ongoing",
    statusTone: "status-ongoing",
    statusDot: "bg-sage-600",
    icon: "📈",
    featured: true,
  },
  {
    title: "License Plate Recognition",
    description:
      "An automated vehicle identification system using image processing and ML to detect license plates from images and video feeds. Applications in traffic monitoring, security, and smart parking.",
    tags: ["Python", "Computer Vision", "Image Processing", "ML"],
    period: "Apr 2024 - Jun 2025",
    category: "Computer Vision",
    status: "Published",
    statusTone: "status-published",
    statusDot: "bg-amber-600",
    icon: "🚗",
    featured: false,
  },
];

const Projects = ({ compact = false }) => {
  const sectionClass = compact ? "mt-16" : "py-24";
  const containerClass = compact ? "px-0" : "mx-auto max-w-6xl px-6";

  return (
    <section id="projects" className={sectionClass}>
      <div className={containerClass}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="section-kicker">
            <span className="kicker-line" />
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => {
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`project-card ${project.featured ? "featured" : ""}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="project-icon">
                    <span aria-hidden="true">{project.icon}</span>
                  </div>
                  <span className="project-pill">{project.category}</span>
                </div>
                <h3 className="mt-6 text-2xl font-display font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-warm-500">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="card-divider" />
                <div className="project-footer">
                  <div className="flex items-center gap-2">
                    <FiCalendar />
                    <span>{project.period}</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 ${project.statusTone}`}
                  >
                    <span className={`status-dot ${project.statusDot}`} />
                    <span>{project.status}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
