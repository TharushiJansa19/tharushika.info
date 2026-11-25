import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import { experiences } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-white/5 bg-base-900 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="chip mb-4">03 · Experience</p>
          <h2 className="section-heading">
            A journey through <span className="text-gradient">real engineering teams</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[13px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-violet/60 to-transparent sm:left-[17px]" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-10 sm:pl-14"
              >
                <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 bg-base-900 text-accent sm:h-9 sm:w-9">
                  <FiBriefcase size={14} />
                </span>

                <div className="card p-6">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-white">{exp.role}</h3>
                    <span className="chip !border-accent-violet/30 !text-accent-violet">{exp.period}</span>
                  </div>
                  <p className="mb-3 font-mono text-sm text-accent">{exp.company}</p>
                  <p className="mb-4 text-sm text-slate-400">{exp.summary}</p>

                  <ul className="mb-4 space-y-2">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-relaxed text-slate-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
