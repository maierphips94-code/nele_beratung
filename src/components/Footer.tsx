import { Link } from 'react-router-dom'

const links = [
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Datenschutz', href: '#' },
  { label: 'Impressum', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-surface-light px-6 py-10 text-center">
      <div className="flex flex-col items-center leading-tight mb-8">
        <span className="font-display text-xl font-semibold tracking-wide text-text-main-light">
          Nele Stein
        </span>
        <span className="text-[10px] tracking-[0.12em] uppercase font-medium text-text-muted-light">
          Systemische Beratung & Coaching
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="text-xs font-semibold tracking-wider text-text-muted-light hover:text-primary transition-colors uppercase"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <p className="text-xs text-text-muted-light uppercase tracking-widest">
        © {new Date().getFullYear()} Nele Stein – Systemische Beratung & Coaching. Alle Rechte vorbehalten.
      </p>
    </footer>
  )
}
