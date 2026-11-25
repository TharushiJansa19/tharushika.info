import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi'
import { profile, projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-white/5 bg-base-950 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <p className="chip mb-4">04 · Projects</p>
            <h2 className="section-heading">
              Selected <span className="text-gradient">work &amp; experiments</span>
            </h2>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary !py-2.5"
          >
            <FiGithub /> View GitHub
          </a>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -8 }}
              className="card group relative flex flex-col overflow-hidden p-6 transition-shadow hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent-violet/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-accent/[0.06] group-hover:to-accent-violet/[0.06]" />

              <div className="relative mb-4 flex items-start justify-between">
                <h3 className="font-display text-lg font-semibold text-white">{project.name}</h3>
                {project.featured && (
                  <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wide text-accent">
                    <FiStar size={12} /> featured
                  </span>
                )}
              </div>

              <p className="relative mb-5 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="relative mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              {project.liveLinks && (
                <div className="relative mb-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                  {project.liveLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="chip transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      <FiExternalLink size={11} /> {link.label}
                    </a>
                  ))}
                </div>
              )}

              {(project.github || project.live || !project.liveLinks) && (
              <div className="relative mt-auto flex items-center gap-4 border-t border-white/10 pt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-slate-300 transition-colors hover:text-accent"
                  >
                    <FiGithub /> Code
                  </a>
                )}
                {!project.github && !project.live && !project.liveLinks && (
                  <span className="flex items-center gap-1.5 font-mono text-xs text-slate-600">
                    <FiGithub /> Private
                  </span>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-slate-300 transition-colors hover:text-accent"
                  >
                    <FiExternalLink /> Live site
                  </a>
                )}
              </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
