import { ArrowRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const posts = [
  {
    slug: 'was-bedeutet-systemisch',
    image: 'https://images.unsplash.com/photo-1545987796-200677ee1011?w=600&q=80&auto=format&fit=crop',
    category: 'Grundlagen',
    date: '12. Februar 2025',
    readTime: '5 Min.',
    title: 'Was bedeutet eigentlich „systemisch"?',
    excerpt:
      'Der Begriff taucht überall auf – aber was steckt wirklich dahinter? Eine Einführung in die Grundideen systemischen Denkens und warum sie den Unterschied machen.',
  },
  {
    slug: 'erste-beratungssitzung',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80&auto=format&fit=crop',
    category: 'Beratung',
    date: '28. Februar 2025',
    readTime: '4 Min.',
    title: 'Was passiert in der ersten Beratungssitzung?',
    excerpt:
      'Viele Menschen wissen nicht, was sie erwartet. Ich erkläre, wie ein Erstgespräch abläuft, worüber wir sprechen und wie Sie sich vorbereiten können – oder eben nicht.',
  },
  {
    slug: 'aufstellung-erklaert',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&auto=format&fit=crop',
    category: 'Methoden',
    date: '14. März 2025',
    readTime: '7 Min.',
    title: 'Familienaufstellung: Mythos und Wirklichkeit',
    excerpt:
      'Aufstellungen gelten manchmal als mystisch oder esoterisch. Was dahinter steckt, wie die Methode wissenschaftlich einzuordnen ist und für wen sie geeignet sein kann.',
  },
  {
    slug: 'paarberatung-wann',
    image: 'https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?w=600&q=80&auto=format&fit=crop',
    category: 'Beziehung',
    date: '25. März 2025',
    readTime: '5 Min.',
    title: 'Wann ist Paarberatung sinnvoll – und wann nicht?',
    excerpt:
      'Nicht jede Krise braucht externe Begleitung. Aber manchmal ist professionelle Unterstützung der schnellste Weg zurück zur Verbindung. Wie Sie den Unterschied erkennen.',
  },
  {
    slug: 'fuehrung-und-system',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80&auto=format&fit=crop',
    category: 'Unternehmen',
    date: '8. April 2025',
    readTime: '6 Min.',
    title: 'Führung als Systemgestaltung',
    excerpt:
      'Wer führt, gestaltet unweigerlich das System um sich herum. Systemisches Coaching hilft Führungskräften, diese Wirkung bewusst wahrzunehmen und gezielt einzusetzen.',
  },
  {
    slug: 'ressourcen-aktivieren',
    image: 'https://images.unsplash.com/photo-1504194104404-433180773017?w=600&q=80&auto=format&fit=crop',
    category: 'Grundlagen',
    date: '22. April 2025',
    readTime: '4 Min.',
    title: 'Ressourcenorientierung: Die Stärken ins Zentrum rücken',
    excerpt:
      'Systemische Beratung fragt nicht primär nach Problemen, sondern nach dem, was bereits funktioniert. Warum dieser Perspektivwechsel so wirkungsvoll ist.',
  },
]

export default function Blog() {
  return (
    <div className="pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <FadeIn>
            <div className="text-xs font-semibold tracking-wider text-text-muted-light uppercase mb-6">
              Blog
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl italic text-text-main-light leading-tight mb-6">
              Gedanken zur systemischen Arbeit
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-text-muted-light leading-relaxed">
              Einblicke, Methoden und Reflexionen aus meiner Beratungspraxis.
            </p>
          </FadeIn>
        </div>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.07} className="h-full">
              <div className="group bg-surface-light rounded-[30px] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-muted-light">{post.readTime} Lesezeit</span>
                  </div>

                  <h2 className="font-display text-xl italic text-text-main-light leading-snug mb-2">
                    {post.title}
                  </h2>

                  <p className="text-sm text-text-muted-light leading-relaxed line-clamp-3 flex-grow mb-5">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-text-main-light/10">
                    <span className="text-xs text-text-muted-light">{post.date}</span>
                    <span className="text-sm text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                      Weiterlesen
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-16 text-center text-sm text-text-muted-light">
            Neue Beiträge erscheinen regelmäßig. Schauen Sie gerne wieder vorbei.
          </p>
        </FadeIn>
      </div>
    </div>
  )
}
