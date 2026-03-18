import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    icon: "💻",
    tone: "icon-box--blue",
    items: ["Python", "JavaScript", "SQL", "C", "C++", "Java"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    tone: "icon-box--green",
    items: [
      "Node.js",
      "Django",
      "Flask",
      "FastAPI",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    tone: "icon-box--amber",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind",
      "Bootstrap",
      "Git",
      "GitHub",
      "VS Code",
      "EmailJS",
      "Docker",
    ],
  },
];

const Skills = ({ compact = false }) => {
  const sectionClass = compact ? "mt-10" : "py-24";
  const containerClass = compact ? "px-0" : "mx-auto max-w-6xl px-6";

  return (
    <section id="skills" className={sectionClass}>
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
            <span>Technical Skills</span>
          </div>
          <h2 className="section-title">Core Competencies</h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-center gap-4">
                  <div className={`icon-box ${group.tone}`}>
                    <span role="img" aria-label={group.title}>
                      {group.icon}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
                    {group.title}
                  </h3>
                </div>
                <div className="card-divider" />
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <span key={skill} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
