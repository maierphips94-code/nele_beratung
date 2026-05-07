import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, Heart, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import FadeIn from '../components/FadeIn'

const ausbildungItems = [
  'Zertifizierte systemische Beraterin (DGSF)',
  'Studierte Sozialpädagogin B.A.',
  'Intensivpädagogische Arbeit mit Jugendlichen und Erwachsenen (> 5 Jahre)',
  'Amtsarbeit (> 2 Jahre)',
]

const methodenItems = [
  'Systemische Gesprächsführung & Zirkuläres Fragen',
  'Innere Anteile & Anteilsarbeit (IFS-informiert)',
  'Lösungsfokussierte Kurzzeitberatung',
  'Narrative Therapie',
  'Genogrammarbeit',
]

const werteItems = [
  'Allparteilichkeit und Neutralität',
  'Ressourcenorientierung',
  'Respekt vor Autonomie und Selbstbestimmung',
]

const principles = [
  {
    number: '01',
    title: 'Systemisch denken',
    text: 'Kein Mensch lebt im Vakuum. Das gesamte System wird betrachtet, Familie, Beziehungen, berufliche Kontexte.',
  },
  {
    number: '02',
    title: 'Ressourcenorientiert arbeiten',
    text: 'Jeder Mensch hat Fähigkeiten und Stärken die er/sie in sich trägt und gebraucht werden. Systemische Beratung macht diese (erneut) sichtbar.',
  },
  {
    number: '03',
    title: 'Mit echter Wärme begegnen',
    text: 'Professionalität und Menschlichkeit schließen sich nicht aus. Veränderung gelingt am besten in einem warmen, nicht wertenden Rahmen.',
  },
]

const rowVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

function CredentialList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
          <span className="text-sm text-text-muted-light leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function UeberMich() {
  const reduced = useReducedMotion() ?? false

  const numberVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : -6 },
    visible: {
      opacity: 0.2,
      y: 0,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: reduced ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const credentials = [
    { icon: <GraduationCap size={18} />, title: 'Ausbildung & Erfahrung', items: ausbildungItems, padding: 'pb-10 md:pb-0 md:pr-12' },
    { icon: <Sparkles size={18} />, title: 'Methoden', items: methodenItems, padding: 'py-10 md:py-0 md:px-12' },
    { icon: <Heart size={18} />, title: 'Werte', items: werteItems, padding: 'pt-10 md:pt-0 md:pl-12' },
  ]

  return (
    <div className="overflow-hidden">

      {/* ── HEADER ── */}
      <div className="pt-32 pb-12 container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: reduced ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-5xl italic text-text-main-light leading-tight"
        >
          Ich bin Nele.<br />
          Systemische Beraterin.
        </motion.h1>
      </div>

      {/* ── STORY ── */}
      <section className="pt-8 pb-24 md:pt-12 md:pb-32 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            <FadeIn direction="right">
              <div className="lg:sticky lg:top-32">
                <div className="overflow-hidden rounded-[20px]">
                  <motion.img
                    src="./nele_2.jpg"
                    alt="Nele Stein – Systemische Beraterin"
                    className="w-full aspect-[5/6] object-cover object-[50%_20%]"
                    loading="lazy"
                    whileHover={{ scale: reduced ? 1 : 1.03 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="lg:pt-14">
                <div className="space-y-6 text-lg text-text-muted-light leading-relaxed mb-12">
                  <p>
                    Was mich antreibt? Menschen dabei zu unterstützen, über sich hinauszuwachsen.
                    Seit über sieben Jahren arbeite ich intensiv mit Menschen und Familien in
                    verschiedensten Lebens- und Arbeitswelten zusammen. Diese vielfältige Erfahrung
                    im professionellen Miteinander bildet das Fundament meiner heutigen Beratung:
                    Ich begleite Sie dabei, destruktive Muster zu erkennen, zu durchbrechen und
                    Sie zu befähigen Ihre individuellen Stärken (wieder) voll zu nutzen.
                  </p>
                  <p>
                    Mein Ziel ist es sie zu ermutigen, Impulse mit in ihren Alltag zu geben und
                    Veränderungen im Positiven anzustoßen. Meinen Klienten begegne ich mit
                    Offenheit und Kreativität und Empathie – Qualitäten, die ich auch als
                    leidenschaftliche Reiterin schätze und die mir helfen, selbst in schwierigen
                    Situationen stets einen kühlen Kopf und eine positive Ausrichtung zu bewahren.
                  </p>
                </div>
                <Link
                  to="/kontakt"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-medium rounded-full hover:bg-opacity-90 active:scale-[0.97] transition-all duration-150"
                >
                  Kontakt aufnehmen
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── QUALIFIKATIONEN ── */}
      <section className="py-20 md:py-28 bg-surface-light">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl italic text-text-main-light mb-16">
              Ausbildung & Kompetenzen
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-[1fr_1px_1fr_1px_1fr]">
            {credentials.map((cred, i) => (
              <>
                {i > 0 && (
                  <div key={`sep-${i}`} className="hidden md:block bg-text-main-light/12" aria-hidden="true" />
                )}
                <FadeIn key={cred.title} delay={i * 0.1}>
                  <div className={`group ${cred.padding}`}>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center mb-6 transition-colors duration-200 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                      {cred.icon}
                    </div>
                    <h3 className="font-display text-xl italic text-text-main-light mb-5">
                      {cred.title}
                    </h3>
                    <CredentialList items={cred.items} />
                  </div>
                </FadeIn>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINZIPIEN ── */}
      <section className="py-24 md:py-32 bg-background-light">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl italic text-text-main-light mb-4">
              Drei Prinzipien, die meine Arbeit prägen
            </h2>
          </FadeIn>

          <div>
            {principles.map((p, i) => (
              <motion.div
                key={p.number}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.12 }}
                className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-12 py-10 border-b border-text-main-light/10 items-start"
              >
                <motion.span
                  variants={numberVariants}
                  className="font-display text-7xl md:text-8xl italic text-primary leading-none select-none"
                >
                  {p.number}
                </motion.span>

                <motion.div variants={textVariants} className="md:pt-3">
                  <h3 className="font-display text-2xl italic text-text-main-light mb-3">
                    {p.title}
                  </h3>
                  <p className="text-base text-text-muted-light leading-relaxed max-w-xl">
                    {p.text}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-surface-light">
        <FadeIn>
          <div className="container mx-auto px-6 text-center">
            <p className="text-base text-text-muted-light mb-6">
              Möchten Sie mich kennenlernen? Das kostenlose Erstgespräch ist der erste Schritt.
            </p>
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-opacity-90 active:scale-[0.97] transition-all duration-150 uppercase tracking-wider text-sm"
            >
              Kostenloses Erstgespräch anfragen
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </section>

    </div>
  )
}
