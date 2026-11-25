import { motion } from 'framer-motion'
import { FiAward, FiBookOpen } from 'react-icons/fi'
import { certifications, education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="relative border-t border-white/5 bg-base-900 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="chip mb-4">05 · Education</p>
          <h2 className="section-heading">
            Foundations &amp; <span className="text-gradient">continuous learning</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="card p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <FiBookOpen size={18} />
              </span>
              <h3 className="font-display text-base font-semibold text-white">Education</h3>
            </div>
            <ul className="space-y-5">
              {education.map((edu) => (
                <li key={edu.title} className="border-l-2 border-accent/30 pl-4">
                  <p className="font-mono text-xs text-accent">{edu.period}</p>
                  <p className="font-semibold text-white">{edu.title}</p>
                  {edu.place && <p className="text-sm text-slate-400">{edu.place}</p>}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-violet/10 text-accent-violet">
                <FiAward size={18} />
              </span>
              <h3 className="font-display text-base font-semibold text-white">Certifications</h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
