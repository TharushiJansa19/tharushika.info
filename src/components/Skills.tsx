import { motion } from 'framer-motion'
import { FiCode, FiCloud, FiUsers, FiCheckCircle } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import { skillGroups } from '../data/portfolioData'

const icons: Record<string, IconType> = {
  'Core Technologies': FiCode,
  'Cloud & Data': FiCloud,
  'Tools & Collaboration': FiUsers,
  'Testing & Quality': FiCheckCircle,
}

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-white/5 bg-base-950 py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:44px_44px] opacity-40 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="chip mb-4">02 · Skills</p>
          <h2 className="section-heading">
            A toolkit built for <span className="text-gradient">shipping real products</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.title] ?? FiCode
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="card p-6 transition-shadow hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="mb-5 flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-violet/10 text-accent">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">{group.title}</h3>
                    <p className="text-xs text-slate-500">{group.blurb}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => {
                    const isHighlight = group.highlight.includes(skill)
                    return (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.3, delay: 0.15 + si * 0.03 }}
                        className={
                          isHighlight
                            ? 'inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent to-accent-violet px-3 py-1 text-xs font-mono font-semibold text-base-950'
                            : 'chip'
                        }
                      >
                        {skill}
                      </motion.span>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
