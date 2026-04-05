import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const serviceCards = [
  {
    title: 'Einzel- & Paarberatung',
    description:
      'Entdecken Sie die unbewussten Muster, die Ihre Entscheidungen prägen. Ein geschützter Raum für systemische Tiefe und authentische Veränderung.',
    image: './service-cards/einzelberatung.jpg',
    href: '/leistungen',
    arrowStyle: 'bg-primary/20 hover:bg-primary hover:text-white text-text-main-light',
  },
  {
    title: 'Systemisches Coaching',
    description:
      'Wir analysieren Ihre beruflichen und persönlichen Strukturen, um sicherzustellen, dass sie Ihre Energie nähren statt aufzehren.',
    image: './service-cards/coaching.jpg',
    href: '/leistungen#coaching',
    arrowStyle: 'bg-primary text-white hover:bg-opacity-90',
  },
  {
    title: 'Aufstellung & Teams',
    description:
      'Intensive Begleitformate an kraftvollen Orten – für echten Durchbruch und nachhaltige Erneuerung in Gruppen und Organisationen.',
    image: './service-cards/aufstellung.jpg',
    href: '/fuer-unternehmen',
    arrowStyle: 'bg-text-main-light text-white hover:opacity-90',
  },
]

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
        <div className="relative z-10 container mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1 mb-6 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold tracking-wider text-white uppercase"
            >
              Systemische Beratung & Coaching
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-6xl lg:text-7xl leading-tight mb-6 italic text-white"
            >
              Ihr Raum<br/>
              für echte<br/>
              Veränderung.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg text-white/70 mb-10 max-w-lg leading-relaxed"
            >
              Professionelle systemische Beratung für Einzelpersonen, Paare und Teams. Nele Stein begleitet Sie dabei, Klarheit zu gewinnen und authentische Veränderung zu gestalten.
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
              <div className="bg-primary/20 rounded-[30px] p-8 flex flex-col justify-center h-48">
                <span className="font-display text-4xl italic text-text-main-light mb-2">10+</span>
                <span className="text-xs font-semibold tracking-wider text-text-muted-light uppercase">Jahre Erfahrung</span>
              </div>
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
              Die Weisheit von Systemen, angewendet auf den menschlichen Geist.
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="space-y-6 text-text-muted-light leading-relaxed">
              <p>
                Ich glaube daran, dass kein Problem im Vakuum existiert. Indem wir die Wurzeln unserer Interaktionen betrachten – ob innere oder äußere – schaffen wir Veränderungen, die nicht nur wirksam, sondern nachhaltig sind.
              </p>
              <p>
                Als systemische Beraterin und Coach verbinde ich klinisch-psychologische Methodik mit tiefem Verständnis von Systemtheorie für eine wirklich einzigartige Beratungserfahrung.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-10">
              <Link
                to="/ueber-mich"
                className="bg-primary/20 text-text-main-light hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-full transition-all uppercase tracking-wider text-sm inline-block"
              >
                Mehr über mich
              </Link>
            </div>
          </FadeIn>
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
              <form
                className="flex flex-col sm:flex-row max-w-2xl mx-auto gap-4"
                onSubmit={(e) => { e.preventDefault(); window.location.href = '#/kontakt' }}
              >
                <input
                  className="flex-grow bg-white/50 border-none rounded-full px-6 py-3 text-text-main-light placeholder-text-main-light/60 focus:ring-2 focus:ring-text-main-light/20 outline-none backdrop-blur-sm"
                  placeholder="Ihre E-Mail-Adresse"
                  type="email"
                />
                <Link
                  to="/kontakt"
                  className="bg-white text-text-main-light font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all uppercase tracking-wider text-sm whitespace-nowrap shadow-md text-center"
                >
                  Gespräch anfragen
                </Link>
              </form>
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
