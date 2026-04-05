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
        {/* ── INTRO ── */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <div>
            <FadeIn>
              <div className="text-xs font-semibold tracking-wider text-text-muted-light uppercase mb-6">
                Über mich
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-display text-6xl lg:text-7xl leading-tight italic text-text-main-light mb-6">
                Ich bin Nele.<br/>
                Systemische Beraterin.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-5 text-text-muted-light leading-relaxed text-lg mb-10">
                <p>
                  Ich begleite Menschen in Momenten, in denen sie sich selbst neu begegnen müssen –
                  nach einer Trennung, in einer Lebenskrise, beim Suchen nach dem eigenen Weg oder
                  einfach, wenn das Gefühl bleibt: „So kann es nicht weitergehen."
                </p>
                <p>
                  Ich habe Systemische Beratung und Familientherapie studiert und arbeite
                  seit über zehn Jahren in diesem Feld. Was mich antreibt: die Überzeugung, dass
                  jeder Mensch bereits alles in sich trägt, was er braucht.
                </p>
                <p>
                  Meine Beratungen finden ausschließlich online statt. Systemische Aufstellungen
                  in Gruppen führe ich vor Ort bei Ihnen durch.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Link
                to="/kontakt"
                className="bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full transition-all uppercase tracking-wider text-sm inline-block"
              >
                Kontakt aufnehmen
              </Link>
            </FadeIn>
          </div>

          {/* Portrait with offset box */}
          <FadeIn direction="left" delay={0.2}>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-primary/20 rounded-xl transform translate-x-6 translate-y-6" />
              <img
                src="./nele.jpeg"
                alt="Nele Stein – Systemische Beraterin und Coach"
                className="relative z-10 w-full h-[600px] object-cover object-top rounded-xl shadow-xl"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </section>

        {/* ── ZITAT ── */}
        <FadeIn>
          <div className="bg-surface-light rounded-xl p-12 md:p-16 text-center max-w-3xl mx-auto mb-28 shadow-sm">
            <p className="font-display text-3xl md:text-4xl italic text-text-main-light leading-relaxed mb-6">
              „Der Wandel beginnt nicht mit dem Verändern von Dingen, sondern mit dem Verstehen von Mustern."
            </p>
            <div className="h-px w-16 bg-primary mx-auto mb-4" />
            <span className="text-xs font-semibold tracking-wider text-text-muted-light uppercase">Nele Stein</span>
          </div>
        </FadeIn>

        {/* ── PRINZIPIEN ── */}
        <section className="mb-28">
          <FadeIn>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <div className="text-xs font-semibold tracking-wider text-text-muted-light uppercase mb-4">Mein Ansatz</div>
              <h2 className="font-display text-5xl italic text-text-main-light">
                Drei Prinzipien, die meine Arbeit prägen
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((p, i) => (
              <FadeIn key={p.number} delay={i * 0.1}>
                <div className="bg-surface-light rounded-[30px] p-10 h-full shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-display text-5xl italic text-primary/30 block mb-4">{p.number}</span>
                  <h3 className="font-display text-xl italic text-text-main-light mb-3">{p.title}</h3>
                  <p className="text-sm text-text-muted-light leading-relaxed">{p.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── QUALIFIKATIONEN ── */}
        <section className="mb-28">
          <FadeIn>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <div className="text-xs font-semibold tracking-wider text-text-muted-light uppercase mb-4">Qualifikationen</div>
              <h2 className="font-display text-5xl italic text-text-main-light">
                Ausbildung & Kompetenzen
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {credentials.map((cred, i) => (
              <FadeIn key={cred.title} delay={i * 0.1}>
                <div className="bg-surface-light rounded-[30px] p-10 h-full shadow-sm group hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {cred.icon}
                  </div>
                  <h3 className="font-display text-xl italic text-text-main-light mb-4">{cred.title}</h3>
                  <ul className="space-y-2.5">
                    {cred.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm text-text-muted-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── PERSÖNLICH ── */}
        <FadeIn>
          <div className="bg-primary rounded-xl px-8 py-16 md:px-16 mb-20 shadow-xl">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold tracking-wider text-text-main-light/60 uppercase mb-6">Persönlich</div>
              <p className="font-display text-3xl md:text-4xl italic text-text-main-light leading-relaxed">
                „Neben meiner Beratungsarbeit liebe ich lange Spaziergänge, Bücher über
                Systemtheorie und den Moment, wenn in einer Sitzung etwas klick macht –
                bei meinen Klientinnen und Klienten und manchmal auch bei mir."
              </p>
              <p className="text-text-main-light/50 text-sm mt-6">– Nele Stein</p>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <div className="text-center">
            <p className="text-text-muted-light mb-6">
              Möchten Sie mich kennenlernen? Das kostenlose Erstgespräch ist der erste Schritt.
            </p>
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full transition-all uppercase tracking-wider text-sm"
            >
              Kontakt aufnehmen
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
