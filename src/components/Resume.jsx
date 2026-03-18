import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const Resume = () => {
  return (
    <section id="resume" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="section-kicker">
            <span className="kicker-line" />
            <span>Resume</span>
          </div>
          <h2 className="section-title">Download My Resume</h2>
          <p className="section-subtitle">
            Click the button below to download my latest resume.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card p-8">
            <div className="space-y-3">
              <p className="eyebrow">PDF Format</p>
              <p className="text-lg font-medium text-ink">
                Sharan Resume .pdf
              </p>
              <p className="text-sm text-warm-500">
                Includes experience, education, and featured projects.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card flex flex-col justify-between p-8"
          >
            <div className="space-y-3">
              <p className="eyebrow">Download</p>
              <p className="text-sm text-warm-500">
                Get a copy of my resume for hiring and interview prep.
              </p>
            </div>

            <a
              href="/Sharan%20Resume%20.pdf"
              download="Sharan_Resume.pdf"
              className="btn-primary mt-6 w-full"
            >
              Download Resume
              <FiDownload className="ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

