import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'

const services = [
  {
    id: 'aufstellung',
    number: '01',
    badge: 'Vor Ort',
    title: 'Systemische Aufstellung in Gruppen',
    tagline: 'Verborgenes sichtbar machen – in der Gruppe',
    description:
      'Die systemische Aufstellung ist eine der kraftvollsten Methoden der systemischen Arbeit. In einem geschützten Gruppenrahmen werden Beziehungen, Dynamiken und Verstrickungen im Raum sichtbar gemacht – durch Stellvertreter oder Figuren.',
    details: [
      'Findet direkt bei Ihnen vor Ort statt (Unternehmen, Gemeinschaft, Praxis)',
      'Gruppen von 4–16 Personen',
      'Halbtags- oder Tagesformate möglich',
      'Für Organisationen, Teams und private Gruppen',
    ],
    contactParam: 'Unternehmen / Gruppen',
    image: './business/aufstellung.jpg',
  },
  {
    id: 'fuehrungscoaching',
    number: '02',
    badge: 'Online & Vor Ort',
    title: 'Systemisches Coaching für Führungskräfte',
    tagline: 'Klarheit in komplexen Führungssituationen',
    description:
      'Führungskräfte stehen vor besonderen Herausforderungen: Rollenkonflikte, Teamentwicklung, strategische Entscheidungen unter Unsicherheit. Systemisches Coaching gibt Ihnen die Struktur, die Sie brauchen – ohne fertige Antworten.',
    details: [
      'Einzel-Sessions oder Gruppen-Formate (4–8 Personen)',
      'Online oder direkt in Ihrem Unternehmen vor Ort',
      'Für Einzelpersonen oder ganze Führungsteams',
      'Dokumentierte Prozessbegleitung auf Wunsch',
    ],
    contactParam: 'Unternehmen / Gruppen',
    image: './business/coaching.jpg',
  },
]

const arguments_ = [
  {
    title: 'Dynamiken sehen',
    description:
      'Viele Probleme in Organisationen sind keine Personen-, sondern Systemprobleme. Systemische Arbeit macht Strukturen sichtbar.',
  },
  {
    title: 'Ressourcen aktivieren',
    description:
      'Jedes Team trägt Lösungen bereits in sich. Die Aufstellung hilft, diese ans Licht zu holen.',
  },
  {
    title: 'Nachhaltig wirken',
    description:
      'Keine Einmalmaßnahme: Systemische Interventionen verändern Muster, nicht nur Symptome.',
  },
]

export default function FuerUnternehmen() {
  return (
    <div className="overflow-hidden">

      {/* ── DARK HERO ── */}
      <section className="min-h-screen flex flex-col justify-between pt-32 pb-12 relative overflow-hidden">
        <img
          src="./nele_business.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.1]"
          style={{ filter: 'blur(3px)' }}
        />
        <div className="absolute inset-0 bg-[#1a1f1e]/75" />

        <div className="flex-grow flex items-center">
          <div className="relative container mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xs font-semibold tracking-wider text-white/50 uppercase mb-6 block"
              >
                Für Unternehmen & Organisationen
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-5xl md:text-6xl lg:text-7xl italic text-white leading-tight mb-8"
              >
                Systemische Arbeit für{' '}
                <span className="text-white/50">Organisationen.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-lg text-white/50 leading-relaxed max-w-xl"
              >
                Wenn Einzelgespräche nicht ausreichen – strukturierte Gruppenformate
                für Teams, Führungsebenen und Organisationen in Veränderungsprozessen.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-3 mt-12"
              >
                <Link
                  to="/kontakt?angebot=Unternehmen%20%2F%20Gruppen"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-[#1a1f1e] text-sm font-medium rounded-full hover:bg-opacity-90 transition-all"
                >
                  Unverbindlich anfragen
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#formate"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white/60 text-sm font-medium rounded-full hover:border-white/40 hover:text-white transition-all"
                >
                  Formate ansehen
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="relative flex justify-center pb-4"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1.5 text-white/30"
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <rect x="0.5" y="0.5" width="15" height="23" rx="7.5" stroke="currentColor" strokeOpacity="0.5"/>
              <motion.rect
                x="7" y="4" width="2" height="5" rx="1" fill="currentColor"
                animate={{ y: [4, 10, 4], opacity: [1, 0, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ── FORMATE ── */}
      <section id="formate" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <div className="text-xs font-semibold tracking-wider text-[#6b7280] uppercase mb-4">
                Formate
              </div>
              <h2 className="font-display text-4xl md:text-5xl italic text-[#1a1f1e]">
                Was ich für Ihr Team anbiete
              </h2>
            </div>
          </FadeIn>

          {/* Split-card layout – alternating */}
          <div className="space-y-8">
            {services.map((service, i) => {
              const imageLeft = i % 2 === 0
              return (
                <FadeIn key={service.id} delay={0.05}>
                  <div
                    id={service.id}
                    className="grid lg:grid-cols-2 rounded-[30px] overflow-hidden shadow-sm min-h-[420px]"
                  >
                    {/* Image panel */}
                    <div className={`relative min-h-[240px] lg:min-h-0 ${imageLeft ? 'lg:order-first' : 'lg:order-last'}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover saturate-[60%] brightness-95"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f1e]/20 to-transparent" />
                    </div>

                    {/* Content panel */}
                    <div className={`bg-[#f8f8f7] p-10 flex flex-col ${imageLeft ? 'lg:order-last' : 'lg:order-first'}`}>
                      {/* Number + badge */}
                      <div className="flex items-center gap-3 mb-5">
                        <span className="font-display text-4xl italic text-[#d1d5db] leading-none select-none">
                          {service.number}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-white border border-[#e5e7eb] text-[#6b7280] text-xs font-semibold rounded-full">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl md:text-3xl italic text-[#1a1f1e] leading-tight mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#6b7280] mb-5">{service.tagline}</p>

                      <p className="text-sm text-[#4b5563] leading-relaxed mb-5">
                        {service.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-2 mb-6">
                        {service.details.map((detail) => (
                          <div key={detail} className="flex items-start gap-2.5">
                            <CheckCircle2 size={13} className="text-[#9ca3af] flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-[#6b7280] leading-snug">{detail}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-3 py-4 border-t border-b border-[#e5e7eb] mb-6">
                        <span className="font-display text-xl italic text-[#1a1f1e]">Preis</span>
                        <span className="text-sm text-[#6b7280]">individuell nach Umfang</span>
                        <span className="ml-auto text-xs font-semibold text-[#6b7280] bg-white border border-[#e5e7eb] px-3 py-1 rounded-full">
                          auf Anfrage
                        </span>
                      </div>

                      {/* CTA */}
                      <div className="mt-auto">
                        <Link
                          to={`/kontakt?angebot=${encodeURIComponent(service.contactParam)}`}
                          className="group inline-flex items-center gap-2 px-6 py-3 bg-[#1a1f1e] text-white text-sm font-medium rounded-full hover:bg-[#2c3030] transition-all"
                        >
                          Anfrage stellen
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WARUM SYSTEMISCH ── */}
      <section className="py-24 bg-[#f8f8f7]">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <div className="text-xs font-semibold tracking-wider text-[#6b7280] uppercase mb-4">
                Der Ansatz
              </div>
              <h2 className="font-display text-4xl md:text-5xl italic text-[#1a1f1e]">
                Warum systemisch?
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {arguments_.map((arg, i) => (
              <FadeIn key={arg.title} delay={i * 0.1}>
                <div className="bg-white rounded-[30px] p-10 h-full group hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center text-[#6b7280] mb-6 group-hover:bg-[#1a1f1e] group-hover:text-white transition-all duration-300">
                    <span className="font-semibold text-sm">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-xl italic text-[#1a1f1e] mb-3">{arg.title}</h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{arg.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="bg-[#1a1f1e] rounded-xl px-8 py-14 md:px-16 shadow-xl text-center">
              <div className="max-w-2xl mx-auto">
                <div className="text-xs font-semibold tracking-wider text-white/40 uppercase mb-4">
                  Nächster Schritt
                </div>
                <h2 className="font-display text-4xl md:text-5xl italic text-white mb-5 leading-tight">
                  Interesse an einem Format für Ihr Team?
                </h2>
                <p className="text-base text-white/60 mb-10 leading-relaxed">
                  Jedes Unternehmen ist anders. Schreiben Sie mir kurz Ihr Anliegen –
                  ich melde mich für ein kostenfreies Vorgespräch.
                </p>
                <Link
                  to="/kontakt?angebot=Unternehmen%20%2F%20Gruppen"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-[#1a1f1e] font-medium rounded-full hover:bg-opacity-90 transition-all uppercase tracking-wider text-sm"
                >
                  Anfrage für Unternehmen
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
