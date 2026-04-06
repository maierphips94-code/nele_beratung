import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, Heart, Sparkles } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const credentials = [
  {
    icon: <GraduationCap size={18} />,
    title: 'Ausbildung',
    items: [
      'Zertifizierte systemische Beraterin (SG)',
      'Systemische Einzel- und Paartherapie',
      'Systemische Aufstellungsarbeit',
    ],
  },
  {
    icon: <Sparkles size={18} />,
    title: 'Methoden',
    items: [
      'Systemische Gesprächsführung',
      'Innere Anteile (IFS-informiert)',
      'Lösungsfokussierte Kurzzeitberatung',
      'Narrative Therapie',
    ],
  },
  {
    icon: <Heart size={18} />,
    title: 'Werte',
    items: [
      'Allparteilichkeit und Neutralität',
      'Ressourcenorientierung',
      'Respekt vor Autonomie und Selbstbestimmung',
    ],
  },
]

const principles = [
  {
    number: '01',
    title: 'Systemisch denken',
    text: 'Kein Mensch lebt im Vakuum. Ich betrachte immer das größere Bild: Familiensysteme, Beziehungsdynamiken, berufliche Kontexte.',
  },
  {
    number: '02',
    title: 'Ressourcenorientiert arbeiten',
    text: 'Ich glaube daran, dass jeder Mensch die Fähigkeiten und Stärken in sich trägt, die er braucht. Meine Aufgabe ist es, diese sichtbar zu machen.',
  },
  {
    number: '03',
    title: 'Mit echter Wärme begegnen',
    text: 'Professionalität und Menschlichkeit schließen sich nicht aus. Veränderung gelingt am besten in einem warmen, nicht wertenden Rahmen.',
  },
]

export default function UeberMich() {
  return (
    <div className="pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* ── HEADER ── */}
        <div className="max-w-2xl mb-20">
          <FadeIn>
            <div className="text-xs font-semibold tracking-wider text-text-muted-light uppercase mb-6">
              Über mich
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-5xl md:text-6xl italic text-text-main-light leading-tight mb-6">
              Ich bin Nele.<br />Systemische Beraterin.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-text-muted-light leading-relaxed">
              Ich begleite Menschen in Momenten, in denen sie sich selbst neu begegnen müssen –
              mit Empathie, Weitblick und dem tiefen Glauben an Ihre Fähigkeiten.
            </p>
          </FadeIn>
        </div>

        {/* ── INTRO BLOCK – Bild links, Text rechts ── */}
        <FadeIn delay={0.05}>
          <div className="grid lg:grid-cols-2 rounded-[30px] overflow-hidden shadow-sm min-h-[500px] mb-8">
            {/* Bild */}
            <div className="relative min-h-[300px] lg:min-h-0">
              <img
                src="./nele.jpeg"
                alt="Nele Stein – Systemische Beraterin und Coach"
                className="absolute inset-0 w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-main-light/20 to-transparent" />
            </div>

            {/* Text */}
            <div className="bg-surface-light p-10 flex flex-col justify-center">
              <div className="text-xs font-semibold tracking-wider text-text-muted-light uppercase mb-5">
                Meine Geschichte
              </div>
              <h2 className="font-display text-3xl md:text-4xl italic text-text-main-light leading-tight mb-5">
                Mit Empathie und Weitblick an Ihrer Seite.
              </h2>
              <div className="space-y-4 text-base text-text-muted-light leading-relaxed mb-8">
                <p>
                  Was mich antreibt? Menschen dabei zu unterstützen, über sich hinauszuwachsen. Seit sieben Jahren arbeite ich intensiv mit Menschen in verschiedensten Lebens- und Arbeitswelten zusammen. Diese vielfältige Erfahrung im professionellen Miteinander bildet das Fundament meiner heutigen Beratung: Ich begleite Sie dabei, destruktive Muster zu durchbrechen und Ihre individuellen Stärken (wieder) voll zu entfalten.
                </p>
                <p>
                  Ich verstehe mich als Ermutigerin und Impulsgeberin. Meinen Klienten begegne ich mit Offenheit und Kreativität – Qualitäten, die ich auch als leidenschaftliche Reiterin schätze und die mir helfen, selbst in schwierigen Situationen stets einen kühlen Kopf und eine positive Ausrichtung zu bewahren.
                </p>
              </div>
              <div>
                <Link
                  to="/kontakt"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-medium rounded-full hover:bg-opacity-90 transition-all"
                >
                  Kontakt aufnehmen
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── QUALIFIKATIONEN ── */}
        <FadeIn delay={0.1}>
          <div className="grid lg:grid-cols-2 rounded-[30px] overflow-hidden shadow-sm min-h-[400px] mb-8">
            {/* Text links */}
            <div className="bg-surface-light p-10 flex flex-col justify-center order-last lg:order-first">
              <div className="text-xs font-semibold tracking-wider text-text-muted-light uppercase mb-5">
                Qualifikationen
              </div>
              <h2 className="font-display text-3xl md:text-4xl italic text-text-main-light leading-tight mb-8">
                Ausbildung & Kompetenzen
              </h2>
              <div className="grid sm:grid-cols-3 gap-8">
                {credentials.map((cred) => (
                  <div key={cred.title}>
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                      {cred.icon}
                    </div>
                    <h3 className="font-display text-lg italic text-text-main-light mb-3">{cred.title}</h3>
                    <ul className="space-y-2">
                      {cred.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm text-text-muted-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Bild rechts */}
            <div className="relative min-h-[300px] lg:min-h-0">
              <img
                src="./nele-gespraech.jpg"
                alt="Nele Stein im Gespräch"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-main-light/20 to-transparent" />
            </div>
          </div>
        </FadeIn>

        {/* ── PRINZIPIEN ── */}
        <FadeIn delay={0.1}>
          <div className="rounded-[30px] bg-surface-light p-10 md:p-14 shadow-sm mb-8">
            <div className="text-xs font-semibold tracking-wider text-text-muted-light uppercase mb-5">Mein Ansatz</div>
            <h2 className="font-display text-3xl md:text-4xl italic text-text-main-light mb-12">
              Drei Prinzipien, die meine Arbeit prägen
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {principles.map((p) => (
                <div key={p.number}>
                  <span className="font-display text-5xl italic text-primary/20 block mb-4">{p.number}</span>
                  <h3 className="font-display text-xl italic text-text-main-light mb-3">{p.title}</h3>
                  <p className="text-sm text-text-muted-light leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ── ZITAT ── */}
        <FadeIn delay={0.1}>
          <div className="bg-primary rounded-[30px] px-10 py-14 md:px-16 shadow-xl mb-8">
            <div className="max-w-3xl">
              <p className="font-display text-3xl md:text-4xl italic text-white leading-relaxed mb-6">
                „Neben meiner Beratungsarbeit liebe ich lange Spaziergänge, Bücher über
                Systemtheorie und den Moment, wenn in einer Sitzung etwas klick macht –
                bei meinen Klientinnen und Klienten und manchmal auch bei mir."
              </p>
              <p className="text-white/50 text-sm">– Nele Stein</p>
            </div>
          </div>
        </FadeIn>

        {/* ── CTA ── */}
        <FadeIn delay={0.1}>
          <div className="text-center mt-12">
            <p className="text-base text-text-muted-light mb-6">
              Möchten Sie mich kennenlernen? Das kostenlose Erstgespräch ist der erste Schritt.
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

      </div>
    </div>
  )
}
