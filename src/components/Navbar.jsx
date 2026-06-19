import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Logo } from './icons'
import { useMagnetic } from '../motion/useMagnetic'
import { useCurtain } from '../motion/Curtain'

const EDGE = 'clamp(22px,5vw,88px)'

// Dropdown menus, ported from the static nav.
const MENUS = {
  about: {
    label: 'About',
    to: { pathname: '/about' },
    items: [
      { t: 'Studio', d: 'Who we are and how we work', to: { pathname: '/about' } },
      { t: 'Why Us', d: 'Proven delivery and security', to: { pathname: '/about', hash: '#recognition' } },
    ],
  },
  services: {
    label: 'Services',
    to: { pathname: '/', hash: '#services' },
    items: [
      { t: 'Software + AI Integration', d: 'Fuse AI into the tools you run', to: { pathname: '/services/ai-integration' } },
      { t: 'Workflow Automation', d: 'Pipelines that act 24/7', to: { pathname: '/', hash: '#services' } },
      { t: 'AI-Powered Analytics', d: 'Decisions from raw data', to: { pathname: '/', hash: '#services' } },
    ],
  },
}

function Anchor({ to, className, children, ...rest }) {
  if (to.external) return <a href={to.external} className={className} {...rest}>{children}</a>
  return <Link to={to} className={className} {...rest}>{children}</Link>
}

function NavDropdown({ id, menu, open, onOpen, onClose, onToggle }) {
  return (
    <div className="relative" onMouseEnter={() => onOpen(id)} onMouseLeave={onClose}>
      <Anchor
        to={menu.to}
        data-cursor="↗"
        className="group inline-flex items-center gap-1.5 py-1.5 text-[16px] text-text transition-colors duration-200 hover:text-white"
        onClick={(e) => { e.preventDefault(); onToggle(id) }}
      >
        {menu.label}
        <span className={`text-mute transition-transform duration-300 ease-brand ${open ? 'rotate-45 text-text' : ''}`}>+</span>
      </Anchor>

      <div
        className={`absolute left-1/2 top-[calc(100%+16px)] w-[320px] -translate-x-1/2 rounded-2xl border border-line bg-surface p-2.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] transition-all duration-300 ease-brand ${
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        {menu.items.map((it) => (
          <Anchor
            key={it.t}
            to={it.to}
            data-cursor="↗"
            className="flex flex-col gap-0.5 rounded-xl px-4 py-3.5 transition-colors duration-200 hover:bg-surface-2"
          >
            <span className="text-[16px] font-medium text-text">{it.t}</span>
            <span className="text-[13px] text-mute">{it.d}</span>
          </Anchor>
        ))}
      </div>
    </div>
  )
}

const navLink = 'py-1.5 text-[16px] text-text transition-colors duration-200 hover:text-white'

export default function Navbar() {
  const [openDd, setOpenDd] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const hideT = useRef(null)
  const mag = useMagnetic(0.4)
  const { go } = useCurtain()

  const openMenu = (id) => { clearTimeout(hideT.current); setOpenDd(id) }
  const closeMenu = () => { hideT.current = setTimeout(() => setOpenDd(null), 140) }
  const toggleMenu = (id) => setOpenDd((cur) => (cur === id ? null : id))

  useEffect(() => {
    const onClick = (e) => { if (!e.target.closest('[data-nav-item]')) setOpenDd(null) }
    const onKey = (e) => { if (e.key === 'Escape') setOpenDd(null) }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-[100] pt-[22px]" style={{ paddingInline: EDGE }}>
      <div className="mx-auto flex max-w-[1680px] items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2.5" aria-label="Aetos AI home" data-cursor="↗">
          <Logo className="h-[32px] w-auto [&_path]:stroke-text" />
          <span className="text-[18px] font-medium tracking-[-0.01em]">Aetos<span className="text-accent">AI</span></span>
        </Link>

        <nav
          aria-label="Primary"
          data-nav-item
          className={[
            'items-center gap-[34px]',
            'min-[1081px]:flex min-[1081px]:static min-[1081px]:flex-row min-[1081px]:border-0 min-[1081px]:bg-transparent min-[1081px]:p-0',
            mobileOpen
              ? 'absolute left-[clamp(22px,5vw,88px)] right-[clamp(22px,5vw,88px)] top-[70px] flex flex-col items-start gap-2 rounded-2xl border border-line bg-surface px-[22px] py-[18px]'
              : 'hidden min-[1081px]:flex',
          ].join(' ')}
        >
          <NavDropdown id="about" menu={MENUS.about} open={openDd === 'about'} onOpen={openMenu} onClose={closeMenu} onToggle={toggleMenu} />
          <NavDropdown id="services" menu={MENUS.services} open={openDd === 'services'} onOpen={openMenu} onClose={closeMenu} onToggle={toggleMenu} />
          <Link to="/work" className={navLink} data-cursor="↗">Work</Link>
          <Link to={{ pathname: '/', hash: '#insights' }} className={navLink} data-cursor="↗">Insights</Link>
          <Link to="/contact" className={navLink} data-cursor="↗">Contact</Link>
        </nav>

        <button
          className="inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.14em] min-[1081px]:hidden"
          aria-label="Menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span>{mobileOpen ? 'Close' : 'Menu'}</span>
        </button>

        <motion.a
          ref={mag.ref}
          style={mag.style}
          onMouseMove={mag.onMouseMove}
          onMouseLeave={mag.onMouseLeave}
          href="/contact"
          onClick={(e) => { e.preventDefault(); go('/contact', 'Get in touch') }}
          data-cursor="↗"
          className="group hidden items-center gap-3 rounded-full border border-line-2 px-[22px] py-[13px] font-mono text-[12px] uppercase tracking-[0.14em] text-text transition-colors duration-300 ease-brand hover:border-text hover:bg-[rgba(237,233,225,0.06)] min-[1081px]:inline-flex"
        >
          Start Project
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 ease-brand group-hover:translate-x-1" />
        </motion.a>
      </div>
    </header>
  )
}
