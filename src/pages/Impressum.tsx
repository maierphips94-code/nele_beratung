import FadeIn from '../components/FadeIn'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="py-8 border-b border-text-main-light/10 last:border-0">
      <h2 className="font-display text-2xl italic text-text-main-light mb-4">{title}</h2>
      <div className="space-y-3 text-sm text-text-muted-light leading-relaxed">{children}</div>
    </div>
  )
}

export default function Impressum() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">

        <FadeIn>
          <div className="text-xs font-semibold tracking-wider text-text-muted-light uppercase mb-6">
            Rechtliches
          </div>
          <h1 className="font-display text-4xl md:text-5xl italic text-text-main-light leading-tight mb-12">
            Impressum
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Section title="Angaben gemäß § 5 TMG">
            <p className="font-medium text-text-main-light">
              Nele Stein<br />
              Systemische Beraterin
            </p>
            <p>
              [STRASSE UND HAUSNUMMER]<br />
              [PLZ] München<br />
              Deutschland
            </p>
          </Section>

          <Section title="Kontakt">
            <p>
              E-Mail: [E-MAIL-ADRESSE]<br />
              Telefon: [TELEFONNUMMER]
            </p>
          </Section>

          <Section title="Berufsrechtliche Angaben">
            <p>
              Berufsbezeichnung: Systemische Beraterin
            </p>
            <p>
              Zertifizierung: Deutsche Gesellschaft für Systemische Therapie,
              Beratung und Familientherapie (DGSF)
            </p>
            <p>
              Es gelten die berufsrechtlichen Regelungen der DGSF.
              Diese sind einsehbar unter:{' '}
              <a
                href="https://www.dgsf.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.dgsf.org
              </a>
            </p>
          </Section>

          <Section title="Hinweis zur systemischen Beratung">
            <p>
              Systemische Beratung ist keine Psychotherapie im Sinne des
              Psychotherapeutengesetzes (PsychThG) und ersetzt diese nicht.
              Bei psychischen Erkrankungen, die einer ärztlichen oder
              psychotherapeutischen Behandlung bedürfen, empfehle ich ausdrücklich
              die Konsultation entsprechend qualifizierter Fachkräfte.
            </p>
          </Section>

          <Section title="Haftung für Inhalte">
            <p>
              Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen
              zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
              Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
              von entsprechenden Rechtsverletzungen werde ich diese Inhalte
              umgehend entfernen.
            </p>
          </Section>

          <Section title="Haftung für Links">
            <p>
              Mein Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
              Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
              verantwortlich.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
              Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt
              der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
              werde ich derartige Links umgehend entfernen.
            </p>
          </Section>

          <Section title="Urheberrecht">
            <p>
              Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der
              jeweiligen Autorin. Downloads und Kopien dieser Seite sind nur für den
              privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </Section>
        </FadeIn>

      </div>
    </div>
  )
}
