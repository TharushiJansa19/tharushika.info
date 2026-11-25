import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative border-t border-white/5 bg-base-950 py-28">
      <div className="pointer-events-none absolute inset-0 bg-aurora opacity-60" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="chip mb-4">06 · Contact</p>
          <h2 className="section-heading">
            Let's build something <span className="text-gradient">great together</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Open to web developer roles and freelance collaborations. Reach out — I usually reply within a day.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="card flex items-center gap-4 p-5 transition-colors hover:border-accent/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                <FiMail size={18} />
              </span>
              <div>
                <p className="font-mono text-xs text-slate-500">Email</p>
                <p className="font-semibold text-white">{profile.email}</p>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="card flex items-center gap-4 p-5 transition-colors hover:border-accent/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                <FiLinkedin size={18} />
              </span>
              <div>
                <p className="font-mono text-xs text-slate-500">LinkedIn</p>
                <p className="font-semibold text-white">tharushika-jansa</p>
              </div>
            </a>

            <div className="card flex items-center gap-4 p-5 transition-colors hover:border-accent/40">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <div>
                <p className="font-mono text-xs text-slate-500">GitHub</p>
                <a href={profile.github} target="_blank" rel="noreferrer" className="font-semibold text-white hover:text-accent">
                  TharushiJansa19
                </a>
                <a
                  href={profile.oldGithub}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-xs text-slate-500 underline decoration-dotted underline-offset-2 hover:text-accent"
                >
                  older projects: TharushikaJanz
                </a>
              </div>
            </div>

            <div className="card flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                <FiMapPin size={18} />
              </span>
              <div>
                <p className="font-mono text-xs text-slate-500">Location</p>
                <p className="font-semibold text-white">{profile.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="card space-y-4 p-6"
          >
            <div>
              <label className="mb-1.5 block font-mono text-xs text-slate-500">Your name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                type="text"
                placeholder="Jane Doe"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-accent/50"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-xs text-slate-500">Your email</label>
              <input
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type="email"
                placeholder="jane@company.com"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-accent/50"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-xs text-slate-500">Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                placeholder="Let's talk about..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-accent/50"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              <FiSend /> Send message
            </button>
            <p className="text-center text-xs text-slate-600">Opens your email client with this message pre-filled.</p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
