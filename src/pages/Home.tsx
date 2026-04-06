import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, animate } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const testimonials = [
  {
    text: 'Die Sitzungen mit Nele haben mir geholfen, Muster in meinem Verhalten zu erkennen, die ich jahrelang nicht sehen konnte. Ich gehe gestärkt und mit neuer Klarheit aus jedem Gespräch heraus.',
    name: 'Katharina M.',
    role: 'Einzelberatung',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    text: 'Wir haben die Paarberatung in einer sehr schwierigen Phase begonnen. Nele hat uns einen Raum gegeben, in dem wir wirklich miteinander sprechen konnten – ohne Vorwürfe, mit echtem Gehör.',
    name: 'Thomas & Julia S.',
    role: 'Paarberatung',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    text: 'Das systemische Coaching hat mir bei einem wichtigen Karrierewechsel geholfen. Nele stellt die richtigen Fragen – unbequem, aber immer wertschätzend. Ich bin sehr dankbar.',
    name: 'Markus R.',
    role: 'Systemisches Coaching',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
  {
    text: 'Ich war skeptisch gegenüber Online-Beratung, aber die Atmosphäre war sofort vertrauensvoll. Nele schafft es, auch über den Bildschirm eine echte Verbindung herzustellen.',
    name: 'Sophie L.',
    role: 'Einzelberatung',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
]

const serviceCards = [
  {
    title: 'Einzelberatung',
    description:
      'Ein geschützter Raum, der nur Ihnen gehört. Wir erkunden gemeinsam, was Sie bewegt, bremst oder antreibt, um passgenaue Lösungen für Ihre aktuelle Lebenssituation zu gestalten.',
    image: './service-cards/einzelberatung.jpg',
    href: '/leistungen',
    arrowStyle: 'bg-primary/20 hover:bg-primary hover:text-white text-text-main-light',
  },
  {
    title: 'Paarberatung',
    description:
      'Ein vertrauensvolles Setting ermöglicht es Ihnen und ihre*m Partner*in in herausfordernden Zeiten, Ihre Beziehung aus neuen Perspektiven zu betrachten. So können destruktive Muster durchbrochen und eine neue Basis geschaffen werden.',
    image: './service-cards/paarberatung.jpg',
    href: '/leistungen',
    arrowStyle: 'bg-primary text-white hover:bg-opacity-90',
  },
  {
    title: 'Systemaufstellung Live',
    description:
      'Manchmal lassen sich festgefahrene Situationen allein durch Nachdenken nicht lösen. Systemaufstellung Live nutzt die Gruppe als kraftvolles Instrument, um verborgene Verstrickungen und Blockaden im Raum sichtbar zu machen.',
    image: './service-cards/aufstellung.jpg',
    href: '/leistungen',
    arrowStyle: 'bg-text-main-light text-white hover:opacity-90',
  },
]

function TestimonialsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dragWidth, setDragWidth] = useState(0)
  const x = useMotionValue(0)

  useEffect(() => {
    if (containerRef.current) {
      setDragWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth)
    }
  }, [])

  const scrollTo = (dir: 'left' | 'right') => {
    const containerWidth = containerRef.current?.offsetWidth || 0
    const currentX = x.get()
    let newX = dir === 'left' ? currentX + containerWidth * 0.75 : currentX - containerWidth * 0.75
    newX = Math.max(Math.min(newX, 0), -dragWidth)
    animate(x, newX, { type: 'spring', stiffness: 300, damping: 30 })
  }

  return (
    <div className="relative group/slider -mx-6 px-6">
      {/* Arrow left */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => scrollTo('left')}
          className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border border-text-main-light/10 shadow-lg flex items-center justify-center hover:scale-110 hover:border-primary hover:text-primary transition-all text-text-muted-light"
          aria-label="Zurück"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Arrow right */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => scrollTo('right')}
          className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border border-text-main-light/10 shadow-lg flex items-center justify-center hover:scale-110 hover:border-primary hover:text-primary transition-all text-text-muted-light"
          aria-label="Weiter"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Track */}
      <motion.div
        ref={containerRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing pt-8 pb-4"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -dragWidth }}
          dragElastic={0.08}
          style={{ x }}
          className="flex gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="min-w-[320px] max-w-[320px]"
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <motion.div
                className="relative h-[320px] overflow-hidden rounded-[30px] bg-white border border-text-main-light/8 shadow-sm p-8 flex flex-col justify-between"
                whileHover={{ boxShadow: '0 16px 40px -8px rgba(0,0,0,0.10)' }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-display text-base italic text-text-main-light leading-relaxed">
                  „{t.text}"
                </p>

                <div className="pt-4 border-t border-text-main-light/8 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0 border-2 border-white shadow-sm"
                  />
                  <div>
                    <p className="text-sm font-semibold text-text-main-light leading-tight">{t.name}</p>
                    <p className="text-xs text-text-muted-light uppercase tracking-wider mt-0.5">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image with blur */}
        <img
          src="./nele-gespraech.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ filter: 'blur(4px)' }}
          loading="eager"
        />
        {/* Dark overlay for white text readability */}
        <div className="absolute inset-0 bg-text-main-light/55" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-40">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="block mb-12 text-xs font-semibold tracking-wider text-white/70 uppercase"
            >
              Systemische Beratung & Coaching · München
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-6xl lg:text-7xl leading-tight mb-12 italic text-white"
            >
              Ihr Raum für<br/>
              echte Veränderung.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg text-white/70 mb-16 max-w-lg leading-relaxed"
            >
              Professionelle systemische Online-Beratung für Einzelpersonen, Paare und Teams. Gewinnen Sie Klarheit, Perspektiven und Selbstwirksamkeit – ganz persönlich.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Link
                to="/kontakt"
                className="bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full transition-all uppercase tracking-wider text-sm"
              >
                Kostenloses Erstgespräch
              </Link>
              <Link
                to="/leistungen"
                className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-white transition-colors"
              >
                Mein Angebot
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-surface-light py-24">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="font-display text-5xl mb-6 italic text-text-main-light">Meine Angebote</h2>
              <p className="text-text-muted-light leading-relaxed">
                Maßgeschneiderte Begleitung für Menschen, die systemische Harmonie in ihrem Leben und ihrer Arbeit suchen.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceCards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1}>
                <Link to={card.href} className="group relative rounded-[30px] overflow-hidden shadow-lg block h-[450px]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 saturate-[40%] brightness-90 group-hover:saturate-100 group-hover:brightness-100 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-4 bottom-4 glass-overlay rounded-[24px] p-6 flex flex-col justify-between h-[210px]">
                    <div>
                      <h3 className="font-display text-2xl mb-3 italic text-text-main-light">{card.title}</h3>
                      <p className="text-sm text-text-muted-light leading-relaxed line-clamp-3">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <span className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${card.arrowStyle}`}>
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* Links below cards */}
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                to="/leistungen"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-medium rounded-full hover:bg-opacity-90 transition-all uppercase tracking-wider"
              >
                Alle Leistungen
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/fuer-unternehmen"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-text-muted-light text-sm font-medium rounded-full hover:border-primary hover:text-primary transition-all uppercase tracking-wider"
              >
                Für Unternehmen
                <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ÜBER MICH ── */}
      <section className="container mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Staggered photo collage */}
        <FadeIn direction="right">
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Left column */}
            <div className="flex flex-col gap-6">
              <img
                src="./nele-gespraech.jpg"
                alt="Nele Stein im Gespräch"
                className="w-full h-64 object-cover rounded-[30px] shadow-md"
                loading="lazy"
              />
              <img
                src="https://www.radiogong.de/01_SHUTTERSTOCK/München/2711428/image-thumb__2711428__gallery-image/Isar%20im%20Sommer.037ee94f.jpg"
                alt="München – Isar im Sommer"
                className="w-full h-48 object-cover rounded-[30px] shadow-md"
                loading="lazy"
              />
            </div>
            {/* Right column – offset */}
            <div className="pt-12">
              <img
                src="./nele.jpeg"
                alt="Nele Stein – Systemische Beraterin"
                className="w-full h-[400px] object-cover object-top rounded-[30px] shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </FadeIn>

        {/* Text */}
        <div className="lg:pl-8">
          <FadeIn delay={0.1}>
            <div className="text-xs font-semibold tracking-wider text-text-muted-light uppercase mb-6">
              Über mich
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="font-display text-5xl mb-8 italic text-text-main-light leading-tight">
              Mit Empathie und Weitblick an Ihrer Seite.
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="space-y-6 text-text-muted-light leading-relaxed">
              <p>
                Was mich antreibt? Menschen dabei zu unterstützen, über sich hinauszuwachsen. Seit sieben Jahren arbeite ich intensiv mit Menschen in verschiedensten Lebens- und Arbeitswelten zusammen. Diese vielfältige Erfahrung im professionellen Miteinander bildet das Fundament meiner heutigen Beratung: Ich begleite Sie dabei, destruktive Muster zu durchbrechen und Ihre individuellen Stärken (wieder) voll zu entfalten.
              </p>
              <p>
                Ich verstehe mich als Ermutigerin und Impulsgeberin. Meinen Klienten begegne ich mit Offenheit und Kreativität – Qualitäten, die ich auch als leidenschaftliche Reiterin schätze und die mir helfen, selbst in schwierigen Situationen stets einen kühlen Kopf und eine positive Ausrichtung zu bewahren.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-10">
              <Link
                to="/ueber-mich"
                className="group inline-flex items-center gap-2 bg-primary/20 text-text-main-light hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-full transition-all uppercase tracking-wider text-sm"
              >
                Mehr über mich
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-surface-light pt-24 pb-36">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <div className="text-xs font-semibold tracking-wider text-text-muted-light uppercase mb-4">Stimmen</div>
              <h2 className="font-display text-5xl italic text-text-main-light">Was Klienten sagen</h2>
            </div>
          </FadeIn>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-surface-light">
        <div className="container mx-auto px-6 py-10">
          <FadeIn>
            <div className="bg-primary rounded-xl px-8 py-10 text-center shadow-xl">
              <h2 className="font-display text-4xl md:text-5xl mb-4 italic text-white">
                Beginnen Sie Ihre Veränderung.
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
                Bereit zu erkunden, wie systemische Beratung Ihre Welt verändern kann? Das kostenlose Erstgespräch (30 Min.) ist der erste Schritt.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-white text-text-main-light font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all uppercase tracking-wider text-sm shadow-md"
              >
                Gespräch anfragen
                <ArrowRight size={14} />
              </Link>
              <p className="text-xs text-white/60 uppercase tracking-widest mt-6 font-medium">
                Antwort innerhalb von 1–2 Werktagen
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
