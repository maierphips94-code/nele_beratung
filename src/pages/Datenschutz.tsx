import FadeIn from '../components/FadeIn'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="py-8 border-b border-text-main-light/10 last:border-0">
      <h2 className="font-display text-2xl italic text-text-main-light mb-4">{title}</h2>
      <div className="space-y-3 text-sm text-text-muted-light leading-relaxed">{children}</div>
    </div>
  )
}

export default function Datenschutz() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">

        <FadeIn>
          <div className="text-xs font-semibold tracking-wider text-text-muted-light uppercase mb-6">
            Rechtliches
          </div>
          <h1 className="font-display text-4xl md:text-5xl italic text-text-main-light leading-tight mb-4">
            Datenschutz&shy;erklärung
          </h1>
          <p className="text-text-muted-light mb-12">Stand: Mai 2025</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Section title="1. Verantwortliche Person">
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="font-medium text-text-main-light">
              Nele Stein – Systemische Beraterin<br />
              [STRASSE UND HAUSNUMMER]<br />
              [PLZ] München<br />
              E-Mail: [E-MAIL-ADRESSE]
            </p>
            <p>
              Bei Fragen zum Datenschutz können Sie sich jederzeit direkt an mich wenden.
            </p>
          </Section>

          <Section title="2. Grundsätze der Datenverarbeitung">
            <p>
              Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen –
              insbesondere im sensiblen Kontext einer Beratung. Diese Website erhebt
              nur die Daten, die für die Kontaktaufnahme und Leistungserbringung
              unbedingt erforderlich sind.
            </p>
            <p>
              Diese Website verwendet <strong className="text-text-main-light">keine Cookies</strong>,
              keine Tracking-Tools (kein Google Analytics, kein Facebook Pixel o. Ä.)
              und keine eingebetteten Inhalte von Drittanbietern.
            </p>
          </Section>

          <Section title="3. Kontaktformular">
            <p>
              Wenn Sie das Kontaktformular nutzen, werden die von Ihnen eingegebenen Daten
              (Name, E-Mail-Adresse, gewähltes Angebot, Nachricht) per verschlüsselter
              Verbindung (SSL/TLS) übertragen und anschließend direkt als E-Mail an mich
              weitergeleitet.
            </p>
            <p>
              <strong className="text-text-main-light">Es findet keine Speicherung in einer Datenbank statt.</strong>{' '}
              Die Daten verbleiben ausschließlich in meinem E-Mail-Postfach und werden
              nicht an Dritte weitergegeben.
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Durchführung
              vorvertraglicher Maßnahmen auf Anfrage der betroffenen Person).
            </p>
          </Section>

          <Section title="4. Beratungsgespräche (Online)">
            <p>
              Online-Beratungen finden per Video-Call statt. Bitte beachten Sie, dass
              ich die genutzten Videokonferenz-Dienste separat mit Ihnen abstimme und
              Ihnen vorab die Datenschutzinformationen des jeweiligen Anbieters mitteile.
              Die Wahl eines datenschutzkonformen Anbieters hat dabei höchste Priorität.
            </p>
            <p>
              Gespräche werden <strong className="text-text-main-light">nicht aufgezeichnet</strong>.
              Als systemische Beraterin unterliege ich der beruflichen Schweigepflicht.
              Alle im Rahmen der Beratung anvertrauten Informationen werden streng
              vertraulich behandelt.
            </p>
          </Section>

          <Section title="5. Hosting">
            <p>
              Diese Website wird bei Hostinger gehostet. Beim Aufruf der Seite verarbeitet
              der Server automatisch Server-Log-Dateien (IP-Adresse, Datum/Uhrzeit,
              aufgerufene Seite, Browsertyp). Diese Daten werden zur Gewährleistung
              des technischen Betriebs erhoben und nach spätestens 7 Tagen gelöscht.
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an einem sicheren und funktionsfähigen Webangebot).
            </p>
          </Section>

          <Section title="6. Ihre Rechte als betroffene Person">
            <p>Sie haben gegenüber mir folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
            <ul className="space-y-1.5 ml-4">
              {[
                'Recht auf Auskunft (Art. 15 DSGVO)',
                'Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
                'Recht auf Löschung (Art. 17 DSGVO)',
                'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)',
                'Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
                'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)',
              ].map((r) => (
                <li key={r} className="flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-2">
              Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte per E-Mail an mich.
              Zusätzlich haben Sie das Recht, sich bei der zuständigen Datenschutz-
              Aufsichtsbehörde zu beschweren. Für Bayern ist dies das Bayerische
              Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.
            </p>
          </Section>

          <Section title="7. Aktualität und Änderung dieser Erklärung">
            <p>
              Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung
              der Website oder aufgrund geänderter gesetzlicher Vorgaben kann es notwendig
              werden, diese Erklärung anzupassen. Die jeweils aktuelle Version ist auf
              dieser Seite abrufbar.
            </p>
          </Section>
        </FadeIn>

      </div>
    </div>
  )
}
