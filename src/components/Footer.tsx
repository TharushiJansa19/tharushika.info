import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-base-950 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.</p>
        <div className="flex items-center gap-5 text-lg">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  )
}
