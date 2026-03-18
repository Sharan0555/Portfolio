import { motion } from "framer-motion";
import {
  FiArrowUpRight,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <section id="home" className="relative border-b border-warm-100 bg-paper">
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-10">
        <nav className="flex items-center justify-between text-sm">
          <div className="hidden items-center gap-10 text-xs font-semibold uppercase tracking-[0.25em] text-warm-500 md:flex">
            <span className="font-display text-lg font-semibold text-ink normal-case tracking-normal">
              Sharan <span className="text-amber-600">Patil</span>
            </span>
          </div>
          <div className="hidden items-center gap-10 text-xs font-semibold uppercase tracking-[0.25em] text-warm-500 md:flex">
            <a className="transition hover:text-ink" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-ink" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-ink" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-ink" href="#education">
              Education
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-navy-600"
            >
              Hire Me
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between md:hidden">
            <span className="font-display text-xl font-semibold text-ink">
              Sharan <span className="text-amber-600">Patil</span>
            </span>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-ink px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
            >
              Hire Me
            </a>
          </div>
        </nav>

        <div className="mt-16 grid items-start gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="status-pill"
            >
              <span className="status-dot" />
              Open to opportunities
            </motion.p>
            <motion.h1
              custom={0.1}
              variants={fadeUp}
              className="text-4xl font-display font-semibold leading-tight text-ink md:text-6xl"
            >
              Sharan Mahantesh Patil
            </motion.h1>
            <motion.p
              custom={0.15}
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600 md:text-base"
            >
              Full Stack Developer & AI Engineer
            </motion.p>
            <motion.p
              custom={0.2}
              variants={fadeUp}
              className="text-base text-warm-500 md:text-lg"
            >
              Final-year Computer Engineering student at A.G. Patil Institute of
              Technology, building intelligent full-stack web applications with
              Python, Django, and React. Passionate about AI/ML and solving
              real-world problems through data-driven solutions.
            </motion.p>

            <motion.div custom={0.3} variants={fadeUp}>
              <a href="#projects" className="btn-primary">
                View Projects
                <FiArrowUpRight className="ml-2" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="card p-6">
              <p className="eyebrow">Graduating</p>
              <p className="mt-3 text-3xl font-display font-semibold text-ink">
                2026
              </p>
              <p className="mt-1 text-sm text-warm-500">
                B.Tech Computer Engg.
              </p>
            </div>
            <div className="card p-6">
              <p className="eyebrow">Currently at</p>
              <p className="mt-3 text-xl font-display font-semibold text-ink">
                Pentagon Space
              </p>
              <p className="mt-1 text-sm text-warm-500">
                Full Stack Intern · Bangalore
              </p>
            </div>
            <div className="card p-6">
              <p className="eyebrow">AI Projects</p>
              <p className="mt-3 text-3xl font-display font-semibold text-ink">
                2+
              </p>
              <p className="mt-1 text-sm text-warm-500">
                Published Research · 2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
