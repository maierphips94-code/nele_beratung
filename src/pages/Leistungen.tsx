import { Link } from 'react-router-dom'
import { ArrowRight, Wifi, Leaf, MapPin, Building2 } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const services = [
  {
    id: 'einzelberatung',
    title: 'Einzelberatung',
    badges: [
      { label: 'Online', icon: 'wifi' },
      { label: 'Vor Ort', icon: 'leaf' },
    ],
    tagline: 'Ihr persönlicher Raum für Klarheit und Wachstum',
    description:
      'In der systemischen Einzelberatung steht Ihre ganz persönliche Situation im Mittelpunkt. Gemeinsam schauen wir auf das, was Sie beschäftigt – Lebensfragen, Krisen, Entscheidungen, innere Blockaden oder der Wunsch nach Veränderung.',
    details: [
      'Sitzungen à 50 Minuten – online oder in der Natur (Spaziergang o. Ä.)',
      'Vertraulicher und geschützter Rahmen',
    ],
    price: { amount: '90 €', unit: 'pro Sitzung (50 Min.)', note: 'Erstgespräch kostenlos' },
    contactParam: 'Einzelberatung (Online)',
    image: './service-cards/einzelberatung.jpg',
  },
  {
    id: 'paarberatung',
    title: 'Paarberatung',
    badges: [{ label: 'Online', icon: 'wifi' }, { label: 'Vor Ort', icon: 'mappin' }],
    tagline: 'Füreinander und miteinander – neu verstehen',
    description:
      'Paarbeziehungen durchlaufen Phasen. Manchmal dreht man sich im Kreis, spricht aneinander vorbei oder hat das Gefühl, den anderen nicht mehr zu erreichen. Die systemische Paarberatung schafft Raum, um gehört zu werden – beide.',
    details: [
      'Beide Partner nehmen gemeinsam teil',
      'Bei Bedarf auch Einzelsitzungen möglich',
      'Auch bei Familienplanung oder Trennungsentscheidungen begleitend',
    ],
    price: { amount: '150 € / 190 €', unit: 'pro Sitzung (90 / 120 Min.)', note: 'Erstgespräch kostenlos' },
    contactParam: 'Paarberatung (Online)',
    image: './service-cards/paarberatung.jpg',
  },
  {
    id: 'coaching',
    title: 'Systemisches Coaching',
    badges: [{ label: 'Online', icon: 'wifi' }, { label: 'Vor Ort', icon: 'mappin' }],
    tagline: 'Orientierung für berufliche und persönliche Weichenstellungen',
    description:
      'Coaching richtet sich an Menschen, die an einem Scheideweg stehen: ein neuer Job, ein Karrierewechsel, eine schwierige Führungsrolle oder die Frage nach dem eigenen Weg. Systemisches Coaching hilft Ihnen, Ihre eigene Antwort zu finden.',
    details: [
      'Einzel- und Team-Sessions möglich',
      'Zielfokussiert, ressourcenorientiert',
      'Auch für Führungskräfte und Teams',
    ],
    price: { amount: '110 €', unit: 'pro Sitzung (75 Min.)', note: 'Erstgespräch kostenlos' },
    contactParam: 'Systemisches Coaching (Online)',
    image: './service-cards/coaching.jpg',
  },
]

export default function Leistungen() {
  return (
    <div className="pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <FadeIn>
            <div className="text-xs font-semibold tracking-wider text-text-muted-light uppercase mb-6">
              Leistungen
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl italic text-text-main-light leading-tight mb-6">
              Was ich anbiete
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-text-muted-light leading-relaxed">
              Alle Beratungsformate sind online verfügbar und flexibel terminierbar.
              Die systemische Aufstellung führe ich ausschließlich bei Ihnen vor Ort durch.
            </p>
          </FadeIn>
        </div>

        {/* Services – alternating image left/right */}
        <div className="space-y-8">
          {services.map((service, i) => {
            const imageLeft = i % 2 === 0
            const iconMap: Record<string, React.ElementType> = { wifi: Wifi, leaf: Leaf, mappin: MapPin }

            return (
              <FadeIn key={service.id} delay={0.05}>
                <div
                  id={service.id}
                  className="grid lg:grid-cols-2 rounded-[30px] overflow-hidden shadow-sm min-h-[480px]"
                >
                  {/* Image panel */}
                  <div className={`relative min-h-[260px] lg:min-h-0 ${imageLeft ? 'lg:order-first' : 'lg:order-last'}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Subtle gradient overlay at bottom for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-text-main-light/30 to-transparent" />
                  </div>

                  {/* Content panel */}
                  <div className={`bg-surface-light p-6 sm:p-10 flex flex-col ${imageLeft ? 'lg:order-last' : 'lg:order-first'}`}>
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.badges.map((badge) => {
                        const Icon = iconMap[badge.icon] ?? Wifi
                        return (
                          <div
                            key={badge.label}
                            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold ${
                              badge.icon === 'wifi'
                                ? 'bg-primary/10 text-primary'
                                : 'bg-text-main-light/10 text-text-main-light'
                            }`}
                          >
                            <Icon size={11} />
                            {badge.label}
                          </div>
                        )
                      })}
                      <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                        {service.price.note}
                      </div>
                    </div>

                    {/* Title + tagline */}
                    <h2 className="font-display text-3xl md:text-4xl italic text-text-main-light leading-tight mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm text-text-muted-light mb-5">{service.tagline}</p>

                    {/* Description */}
                    <p className="text-base text-text-muted-light leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm text-text-muted-light">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="flex items-baseline gap-3 py-4 border-t border-b border-text-main-light/10 mb-6">
                      <span className="font-display text-2xl italic text-text-main-light whitespace-nowrap">{service.price.amount}</span>
                      <span className="text-sm text-text-muted-light">{service.price.unit}</span>
                    </div>

                    {/* CTA – always at bottom */}
                    <div className="mt-auto">
                      <Link
                        to={`/kontakt?angebot=${encodeURIComponent(service.contactParam)}`}
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-medium rounded-full hover:bg-opacity-90 transition-all"
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

        {/* Preishinweise + Räumlichkeiten-Hinweis */}
        <FadeIn delay={0.1}>
          <div className="mt-10 text-center space-y-16">
            <p className="text-xs text-text-muted-light/70 leading-relaxed">
              Alle Preise zzgl. der gesetzlichen Mehrwertsteuer.
            </p>
            <p className="text-base text-text-muted-light leading-relaxed">
              <span className="flex justify-center mb-4">
                <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 size={20} className="text-primary" />
                </span>
              </span>
              <span className="block font-medium text-text-main-light mb-1">Vor-Ort-Termine ohne eigene Räumlichkeiten?</span>
              Für Paarberatungen und Systemisches Coaching kann auf Anfrage ein professioneller Meetingraum hinzugebucht werden.<br />
              Die Raumkosten werden transparent und vorab mit Ihnen abgestimmt.
            </p>
          </div>
        </FadeIn>

        {/* Divider */}
        <div className="mt-16 flex justify-center">
          <div className="w-16 h-px bg-text-main-light/15" />
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-16 text-center">
            <p className="text-base text-text-muted-light mb-6">
              Nicht sicher, welches Format zu Ihnen passt? Im kostenlosen Erstgespräch finden wir es gemeinsam heraus.
            </p>
            <Link
              to="/kontakt"
              className="group inline-flex w-full sm:w-auto justify-center items-center gap-2.5 px-6 sm:px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-opacity-90 transition-all uppercase tracking-wider text-xs sm:text-sm"
            >
              Kostenloses Erstgespräch anfragen
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>


      </div>
    </div>
  )
}
