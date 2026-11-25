import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

const roles = ['Software Engineer', 'Frontend Developer', 'React Specialist', 'UI Craftsperson']

function useTypewriter(words: string[], speed = 90, pause = 1400) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => {
          setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)))
        },
        deleting ? speed / 2 : speed,
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-base-950 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-aurora" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      <div className="bg-noise pointer-events-none absolute inset-0" />

      <motion.div
        className="pointer-events-none absolute right-[8%] top-[22%] h-72 w-72 rounded-full bg-accent/20 blur-[100px]"
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute left-[6%] bottom-[10%] h-80 w-80 rounded-full bg-accent-violet/20 blur-[110px]"
        animate={{ y: [0, -28, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="chip mb-6 border-accent/30 text-accent"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Available for new opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
          >
            Hi, I'm{' '}
            <span className="text-gradient bg-[length:200%_auto] animate-gradient-x">
              {profile.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 h-9 font-mono text-lg text-slate-300 sm:text-xl"
          >
            <span className="text-accent">&gt;</span> {typed}
            <span className="ml-0.5 animate-blink text-accent">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center gap-5 text-xl text-slate-400"
          >
            <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent" aria-label="Email">
              <FiMail />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto w-full max-w-md animate-float"
        >
          <div className="card overflow-hidden shadow-2xl shadow-accent/5">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-2 font-mono text-xs text-slate-500">developer.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 text-left font-mono text-[13px] leading-relaxed text-slate-300">
<code>{`const engineer = {
  name: "Tharushika Jansa",
  role: "Software Engineer",
  stack: ["HTML/CSS", "JavaScript",
          "React", "Shopify"],
  focus: "design-accurate UI",
  status: "shipping features",
};

function buildSomethingGreat() {
  return engineer.stack
    .map(craft)
    .reduce(collaborate, product);
}`}</code>
            </pre>
          </div>

          <motion.div
            className="card absolute -bottom-8 -left-8 hidden w-44 p-4 sm:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="font-mono text-[11px] text-slate-500">experience</p>
            <p className="font-display text-2xl font-bold text-white">2+ yrs</p>
          </motion.div>

          <motion.div
            className="card absolute -right-6 -top-6 hidden w-40 p-4 sm:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="font-mono text-[11px] text-slate-500">focus</p>
            <p className="font-display text-lg font-bold text-white">React &amp; TS</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-accent"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  )
}
