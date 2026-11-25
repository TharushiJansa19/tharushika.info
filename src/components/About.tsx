import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiLayers, FiUsers, FiTrendingUp } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
}

const highlights = [
  {
    icon: FiCode,
    title: 'Clean, maintainable UI',
    desc: 'Component-driven React & TypeScript codebases built to scale and stay readable.',
  },
  {
    icon: FiLayers,
    title: 'Full-stack curiosity',
    desc: 'Comfortable across React, React Native, C#/.NET and SQL — frontend-first, backend-fluent.',
  },
  {
    icon: FiUsers,
    title: 'Agile collaborator',
    desc: 'Sprint planning, peer code review, and close work with design & QA teams.',
  },
  {
    icon: FiTrendingUp,
    title: 'Always leveling up',
    desc: 'Currently deepening AWS, cloud and serverless skills alongside freelance projects.',
  },
]

function Portrait() {
  const [failed, setFailed] = useState(false)

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={0.5}
      variants={fadeUp}
      className="relative mx-auto w-full max-w-[280px] lg:mx-0"
    >
      <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/30 via-accent-violet/20 to-accent-pink/20 opacity-60 blur-xl" />
      <div className="card relative aspect-[4/5] overflow-hidden !rounded-[1.75rem] p-0">
        {!failed ? (
          <img
            src={profile.photo}
            onError={() => setFailed(true)}
            alt={profile.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 via-accent-violet/15 to-accent-pink/10">
            <span className="font-display text-6xl font-bold text-white/80">TJ</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative border-t border-white/5 bg-base-900 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <p className="chip mb-4">01 · About Me</p>
          <h2 className="section-heading">
            Turning ideas into <span className="text-gradient">polished interfaces</span>
          </h2>
        </motion.div>

        <div className="mb-14 grid gap-10 lg:grid-cols-[280px_1fr] lg:items-center">
          <Portrait />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            variants={fadeUp}
            className="space-y-5 text-slate-400 leading-relaxed"
          >
            <p>{profile.about}</p>
            <p>
              My path started in Sri Lanka with a Diploma in Information Technology, continued through a
              BEng (Hons) in Software Engineering at the University of Westminster, UK, and has taken me
              through product teams building for global fashion brands, fintech mobile apps, and now
              independent freelance projects out of Brisbane.
            </p>
            <p>{profile.workStyle}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i + 1}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="card p-5 transition-shadow hover:shadow-lg hover:shadow-accent/5"
            >
              <item.icon className="mb-3 text-2xl text-accent" />
              <h3 className="mb-1.5 font-display text-sm font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
