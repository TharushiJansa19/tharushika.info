import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { profile } from '../data/portfolioData'

function BrandMark() {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <span className="text-gradient">TJ</span>
  }

  return (
    <span className="inline-block h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-violet p-[1.5px] align-middle">
      <img
        src={profile.photo}
        onError={() => setFailed(true)}
        alt={profile.name}
        className="h-full w-full rounded-full border border-base-950 object-cover"
      />
    </span>
  )
}

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-base-950/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2.5 font-display text-lg font-semibold text-white">
          <BrandMark />
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-slate-300 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={profile.resumeUrl} download className="hidden btn-secondary md:inline-flex !py-2 !px-5 text-xs">
          Résumé
        </a>

        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-white/10 bg-base-950/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-mono text-sm text-slate-300 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={profile.resumeUrl} download className="mt-2 inline-block btn-secondary !py-2 !px-5 text-xs">
                  Download Résumé
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
