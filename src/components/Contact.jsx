import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const contactItems = [
  {
    label: "Email",
    value: "Sharanpatil630@gmail.com",
    href: "mailto:Sharanpatil630@gmail.com",
    icon: FiMail,
    iconClass: "bg-navy-100 text-ink",
  },
  {
    label: "Phone",
    value: "+91 90490 61055",
    href: "tel:+919049061055",
    icon: FiPhone,
    iconClass: "bg-sage-100 text-sage-600",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sharan-patil123",
    href: "https://www.linkedin.com/in/sharan-patil123",
    icon: FiLinkedin,
    iconClass: "bg-amber-100 text-amber-600",
  },
  {
    label: "GitHub Repo",
    value: "github.com/Sharan0555/StockPricePrediction",
    href: "https://github.com/Sharan0555/StockPricePrediction",
    icon: FiGithub,
    iconClass: "bg-navy-100 text-ink",
  },
];

const Contact = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [emailConfig, setEmailConfig] = useState({
    publicKey: "",
    serviceId: "",
    templateId: "",
  });

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;

    const publicKey = root.dataset.emailjsPublicKey ?? "";
    const serviceId = root.dataset.emailjsServiceId ?? "";
    const templateId = root.dataset.emailjsTemplateId ?? "";

    setEmailConfig({ publicKey, serviceId, templateId });
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    if (!emailConfig.publicKey || !emailConfig.serviceId || !emailConfig.templateId) {
      setStatus({
        type: "error",
        message: "EmailJS is not configured yet. Add your keys in index.html.",
      });
      return;
    }

    try {
      setStatus({ type: "loading", message: "Sending message..." });
      await emailjs.send(emailConfig.serviceId, emailConfig.templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });
      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Let&apos;s Build Something</h2>
          <p className="section-subtitle">
            Ready to collaborate on AI-powered web experiences? Drop a message
            and I&apos;ll get back quickly.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card flex items-center gap-4 p-5"
                >
                  <span className={`rounded-full p-3 ${item.iconClass}`}>
                    <Icon />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-warm-500">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="card rounded-3xl p-8"
          >
            <div className="grid gap-6">
              <div>
                <label className="text-sm font-medium text-warm-500">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-warm-100 bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-ink/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-warm-500">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-warm-100 bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-ink/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-warm-500">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-warm-100 bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-ink/50"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                disabled={status.type === "loading"}
              >
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </button>
              {status.message && (
                <p
                  className={`text-sm ${
                    status.type === "success"
                      ? "text-emerald-600"
                      : status.type === "error"
                        ? "text-rose-600"
                        : "text-warm-500"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </motion.form>
        </div>

        <footer className="mt-16 border-t border-warm-100 pt-8 text-sm text-warm-500">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <span>
              © {currentYear} Sharan Patil. All rights reserved.
            </span>
            <div className="flex items-center gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-warm-100 p-2 text-ink transition hover:border-ink/40"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
