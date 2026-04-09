import { motion } from "framer-motion";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";


const certifications = [
  {
    label: "TATA",
    title: "GenAI Powered Data Analytics Job Simulation",
    icon: "🏢",
    tone: "credential-icon--tata",
    ariaLabel: "TATA",
  },
  {
    label: "Deloitte",
    title: "Data Analytics Job Simulation",
    icon: "📊",
    tone: "credential-icon--deloitte",
    ariaLabel: "Deloitte",
  },
];

const education = [
  {
    degree: "B.Tech — Computer Engineering",
    school: "A.G. Patil Institute of Technology, Solapur",
    score: "6.0 CGPA",
    year: "2026",
  },
  {
    degree: "Class XII — MSBSHSE",
    school: "A.D. Joshi Junior College, Solapur",
    score: "81%",
    year: "2022",
  },
  {
    degree: "Class X — MSBSHSE",
    school: "Indian Model School, Akkalkot",
    score: "79%",
    year: "2020",
  },
];

const experiences = [
  {
    date: "Feb 2026 – Present",
    type: "Internship",
    role: "Python Full Stack Developer",
    org: "Pentagon Space · Bangalore, India",
    description:
      "Comprehensive training in Python Full Stack Development covering front-end and back-end technologies. Gained hands-on experience building dynamic web applications, working with relational databases, and implementing complete CRUD operations across the full web development lifecycle.",
    tags: ["Django", "ReactJS", "Bootstrap", "MySQL", "PostgreSQL"],
  },
  {
    date: "May 2025",
    type: "Volunteer",
    role: "Campus Ambassador",
    org: "GirlScript Summer of Code (GSSoC) 2025",
    description:
      "Promoted open-source development on campus, guided participants through collaborative coding initiatives, and supported community engagement to help students gain practical experience in open-source software development.",
    tags: ["Open Source", "Community Building", "Mentorship"],
  },
  {
    date: "Sep 2025",
    type: "Volunteer",
    role: "Management",
    org: "MSME Incubation Center · A.G. Patil Institute",
    description:
      "Oversaw programs empowering students and early-stage startups with mentorship, guidance, and resources to build sustainable ventures and improve educational outcomes through innovation.",
    tags: ["Startup Mentorship", "Program Management", "Education"],
  },
  {
    date: "Jun 2025",
    type: "Volunteer",
    role: "Management",
    org: "AGTECHON",
    description:
      "Contributed to organizing technology-driven educational initiatives, empowering learners with digital skills and practical knowledge in a tech-focused environment.",
    tags: ["Event Management", "Technology", "Education"],
  },
];

const About = () => {
  return (
    <section id="about" className="pb-24 pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-warm-500">
            <p>
              I am a Computer Engineering student and aspiring Full Stack
              Developer with a strong interest in AI-powered applications. I
              have experience building projects like AI Stock Price Prediction
              using Python, Django, and machine learning.
            </p>
            <p>
              Currently, I am pursuing a Python Full Stack internship, where I
              work on developing real-world web applications and APIs. I am
              passionate about solving problems and creating intelligent,
              data-driven solutions.
            </p>
          </div>
        </motion.div>

        <Skills compact />

        <div id="experience" className="mt-16 space-y-4">
          <div className="section-kicker">
            <span className="kicker-line" />
            <span>Work History</span>
          </div>
          <h2 className="section-title">Experience & Volunteering</h2>
        </div>

        <div className="timeline">
          {experiences.map((item) => (
            <div key={`${item.role}-${item.org}`} className="timeline-item">
              <div className="timeline-meta">
                <p className="timeline-date">{item.date}</p>
                <span className="timeline-pill">{item.type}</span>
              </div>
              <div>
                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-org">{item.org}</p>
                <p className="timeline-desc">{item.description}</p>
                <div className="timeline-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="timeline-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Projects compact />

        <div id="education" className="mt-16 space-y-4">
          <div className="section-kicker">
            <span className="kicker-line" />
            <span>Credentials</span>
          </div>
          <h2 className="section-title">Certifications & Education</h2>
        </div>

        <div className="credentials-grid">
          <div className="credentials-column">
            <div>
              <h3 className="credentials-heading">Certifications</h3>
              <div className="credentials-rule" />
            </div>
            {certifications.map((item) => {
              return (
                <div key={item.title} className="credential-card">
                  <div className={`credential-icon ${item.tone}`}>
                    <span role="img" aria-label={item.ariaLabel}>
                      {item.icon}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="credential-label">{item.label}</p>
                    <p className="credential-title">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="credentials-column">
            <div>
              <h3 className="credentials-heading">Education</h3>
              <div className="credentials-rule" />
            </div>
            {education.map((item) => (
              <div key={item.degree} className="education-card">
                <div className="education-row">
                  <div className="space-y-2">
                    <p className="education-degree">{item.degree}</p>
                    <p className="education-school">{item.school}</p>
                  </div>
                  <div className="space-y-2 text-right">
                    <p className="education-score">{item.score}</p>
                    <p className="education-year">{item.year}</p>
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

export default About;
