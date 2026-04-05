import { Link } from 'react-router-dom'
import { ArrowRight, Wifi, MapPin } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const services = [
  {
    id: 'einzelberatung',
    title: 'Einzelberatung',
    badge: { label: 'Online', icon: 'wifi' },
    tagline: 'Ihr persönlicher Raum für Klarheit und Wachstum',
    description:
      'In der systemischen Einzelberatung steht Ihre ganz persönliche Situation im Mittelpunkt. Gemeinsam schauen wir auf das, was Sie beschäftigt – Lebensfragen, Krisen, Entscheidungen, innere Blockaden oder der Wunsch nach Veränderung.',
    details: [
      'Erstgespräch (30 Min.) kostenlos und unverbindlich',
      'Sitzungen à 60 Minuten via Video-Call',
      'Flexible Terminvereinbarung, auch abends',
      'Vertraulicher und geschützter Rahmen',
    ],
    price: { amount: '90 €', unit: 'pro Sitzung (60 Min.)', note: 'Erstgespräch kostenlos' },
    contactParam: 'Einzelberatung (Online)',
    image: './service-cards/einzelberatung.jpg',
  },
  {
    id: 'paarberatung',
    title: 'Paarberatung',
    badge: { label: 'Online', icon: 'wifi' },
    tagline: 'Füreinander und miteinander – neu verstehen',
    description:
      'Paarbeziehungen durchlaufen Phasen. Manchmal dreht man sich im Kreis, spricht aneinander vorbei oder hat das Gefühl, den anderen nicht mehr zu erreichen. Die systemische Paarberatung schafft Raum, um gehört zu werden – beide.',
    details: [
      'Sitzungen à 75–90 Minuten via Video-Call',
      'Beide Partner nehmen gemeinsam teil',
      'Neutrale, wertschätzende Moderation',
      'Auch bei Trennungsentscheidungen begleitend',
    ],
    price: { amount: '120 €', unit: 'pro Sitzung (75–90 Min.)', note: 'Erstgespräch kostenlos' },
    contactParam: 'Paarberatung (Online)',
    image: './service-cards/paarberatung.jpg',
  },
  {
    id: 'coaching',
    title: 'Systemisches Coaching',
    badge: { label: 'Online', icon: 'wifi' },
    tagline: 'Orientierung für berufliche und persönliche Weichenstellungen',
    description:
      'Coaching richtet sich an Menschen, die an einem Scheideweg stehen: ein neuer Job, ein Karrierewechsel, eine schwierige Führungsrolle oder die Frage nach dem eigenen Weg. Systemisches Coaching hilft Ihnen, Ihre eigene Antwort zu finden.',
    details: [
      'Einzel-Sessions oder Prozess-Pakete (4–6 Sitzungen)',
      'Sitzungen à 60 Minuten via Video-Call',
      'Zielfokussiert, ressourcenorientiert',
      'Auch für Führungskräfte und Teams',
    ],
    price: { amount: '110 €', unit: 'pro Sitzung (60 Min.)', note: 'Paketpreis auf Anfrage' },
    contactParam: 'Systemisches Coaching (Online)',
    image: './service-cards/coaching.jpg',
  },
  {
    id: 'aufstellung',
    title: 'Systemische Aufstellung',
    badge: { label: 'Vor Ort', icon: 'pin' },
    tagline: 'Familienaufstellung · Organisationsaufstellung · Gruppenformat',
    description:
      'Die systemische Aufstellung macht unsichtbare Dynamiken sichtbar – in der Familie, im Team oder in Organisationen. Durch die räumliche Darstellung von Beziehungen und Rollen entstehen Klarheit und neue Handlungsmöglichkeiten.',
    details: [
      'Familienaufstellung & Organisationsaufstellung',
      'Kleingruppen ab 4 Personen bis max. 16 Teilnehmende',
      'Halbtags- oder Tagesformat (bei Ihnen vor Ort)',
      'Für Privatpersonen, Familien und Unternehmen',
    ],
    price: { amount: 'ab 150 €', unit: 'pro Person (Halbtag)', note: 'Tagesformat auf Anfrage' },
    contactParam: 'Systemische Aufstellung',
    image: './service-cards/aufstellung.jpg',
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
            <h1 className="font-display text-5xl md:text-6xl italic text-text-main-light leading-tight mb-6">
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
            const BadgeIcon = service.badge.icon === 'wifi' ? Wifi : MapPin

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
                  <div className={`bg-surface-light p-10 flex flex-col ${imageLeft ? 'lg:order-last' : 'lg:order-first'}`}>
                    {/* Badge */}
                    <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 self-start ${
                      service.badge.icon === 'wifi'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-text-main-light/10 text-text-main-light'
                    }`}>
                      <BadgeIcon size={11} />
                      {service.badge.label}
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
                      <span className="font-display text-2xl italic text-text-main-light">{service.price.amount}</span>
                      <span className="text-sm text-text-muted-light">{service.price.unit}</span>
                      <span className="ml-auto text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {service.price.note}
                      </span>
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

        {/* Bottom CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-20 text-center">
            <p className="text-base text-text-muted-light mb-6">
              Nicht sicher, welches Format zu Ihnen passt? Im kostenlosen Erstgespräch finden wir es gemeinsam heraus.
            </p>
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-opacity-90 transition-all uppercase tracking-wider text-sm"
            >
              Kostenloses Erstgespräch anfragen
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center mt-6">
            <Link
              to="/fuer-unternehmen"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-text-muted-light text-sm font-medium rounded-full hover:border-primary hover:text-primary transition-all duration-300"
            >
              Gruppenformate für Unternehmen
              <ArrowRight size={13} />
            </Link>
          </div>
        </FadeIn>

      </div>
    </div>
  )
}
