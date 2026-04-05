import { useState, FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Wifi, Mail, Clock, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
  angebot: string
  datenschutz: boolean
}

const initialForm: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
  angebot: '',
  datenschutz: false,
}

const angebote = [
  'Einzelberatung (Online)',
  'Paarberatung (Online)',
  'Systemisches Coaching (Online)',
  'Systemische Aufstellung (Vor Ort)',
  'Kostenloses Erstgespräch',
  'Anderes',
]

const info = [
  {
    icon: <Wifi size={18} />,
    title: 'Online-Beratung',
    text: 'Alle Einzelberatungen finden bequem per Video-Call statt – flexibel und vertraulich.',
  },
  {
    icon: <Clock size={18} />,
    title: 'Antwortzeit',
    text: 'Ich antworte in der Regel innerhalb von 1–2 Werktagen auf Ihre Anfrage.',
  },
  {
    icon: <Mail size={18} />,
    title: 'Erstgespräch',
    text: 'Das kostenlose Kennenlerngespräch (30 Min.) ist unverbindlich und ohne Verpflichtung.',
  },
]

export default function Kontakt() {
  const [searchParams] = useSearchParams()
  const preselectedAngebot = searchParams.get('angebot') ?? ''

  const [form, setForm] = useState<FormData>({ ...initialForm, angebot: preselectedAngebot })
  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    if (!form.name.trim()) newErrors.name = 'Bitte geben Sie Ihren Namen an.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
    if (!form.message.trim() || form.message.length < 20)
      newErrors.message = 'Bitte schreiben Sie mindestens 20 Zeichen.'
    if (!form.datenschutz) newErrors.datenschutz = 'Bitte stimmen Sie der Datenschutzerklärung zu.'
    return newErrors
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setState('loading')
    await new Promise((r) => setTimeout(r, 1800))
    setState('success')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const fieldBase =
    'w-full bg-transparent border-0 border-b border-text-main-light/20 py-4 px-1 focus:ring-0 focus:border-primary transition-all text-base placeholder:text-text-muted-light/50 outline-none'

  return (
    <div className="pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <FadeIn>
            <div className="text-xs font-semibold tracking-wider text-text-muted-light uppercase mb-6">
              Kontakt
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-5xl md:text-6xl italic text-text-main-light leading-tight mb-6">
              Nehmen Sie den ersten Schritt.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-text-muted-light leading-relaxed">
              Schreiben Sie mir – ich freue mich auf Ihre Nachricht und melde mich
              in der Regel innerhalb von 1–2 Werktagen.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-16 items-start">
          {/* ── FORM ── */}
          <FadeIn delay={0.15}>
            <AnimatePresence mode="wait">
              {state === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-primary rounded-[30px] p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={28} className="text-white" />
                  </div>
                  <h2 className="font-display text-3xl italic text-white mb-4">
                    Ihre Nachricht ist angekommen!
                  </h2>
                  <p className="text-base text-white/60 leading-relaxed mb-8 max-w-md mx-auto">
                    Herzlichen Dank für Ihre Anfrage. Ich melde mich bald bei Ihnen –
                    meist innerhalb von 1–2 Werktagen.
                  </p>
                  <button
                    onClick={() => { setState('idle'); setForm(initialForm) }}
                    className="text-sm text-white/80 hover:text-white transition-colors animated-link"
                  >
                    Weitere Nachricht senden
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="bg-surface-light p-8 md:p-12 rounded-[30px] shadow-sm space-y-8"
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-xs font-semibold text-text-muted-light uppercase tracking-wider px-1 block">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ihr vollständiger Name"
                        className={`${fieldBase} ${errors.name ? 'border-red-400' : ''}`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 flex items-center gap-1.5 px-1">
                          <AlertCircle size={11} /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs font-semibold text-text-muted-light uppercase tracking-wider px-1 block">
                        E-Mail *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="ihre@email.de"
                        className={`${fieldBase} ${errors.email ? 'border-red-400' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 flex items-center gap-1.5 px-1">
                          <AlertCircle size={11} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Angebot */}
                  <div className="space-y-1">
                    <label htmlFor="angebot" className="text-xs font-semibold text-text-muted-light uppercase tracking-wider px-1 block">
                      Ich interessiere mich für
                    </label>
                    <select
                      id="angebot"
                      name="angebot"
                      value={form.angebot}
                      onChange={handleChange}
                      className={`${fieldBase} cursor-pointer appearance-none`}
                    >
                      <option value="">Bitte wählen (optional)</option>
                      {angebote.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-xs font-semibold text-text-muted-light uppercase tracking-wider px-1 block">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Was bewegt Sie? Schreiben Sie so viel oder so wenig, wie Sie möchten."
                      className={`${fieldBase} resize-none leading-relaxed ${errors.message ? 'border-red-400' : ''}`}
                    />
                    <div className="flex items-center justify-between px-1">
                      {errors.message ? (
                        <p className="text-xs text-red-500 flex items-center gap-1.5">
                          <AlertCircle size={11} /> {errors.message}
                        </p>
                      ) : <span />}
                      <span className={`text-xs ${form.message.length < 20 ? 'text-text-muted-light/40' : 'text-primary/60'}`}>
                        {form.message.length} Zeichen
                      </span>
                    </div>
                  </div>

                  {/* Datenschutz */}
                  <div className="space-y-1">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative mt-0.5 flex-shrink-0">
                        <input
                          type="checkbox"
                          name="datenschutz"
                          checked={form.datenschutz}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                          form.datenschutz
                            ? 'bg-primary border-primary'
                            : errors.datenschutz
                            ? 'border-red-400'
                            : 'border-text-main-light/30 group-hover:border-primary/50'
                        }`}>
                          {form.datenschutz && (
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-sm text-text-muted-light leading-relaxed">
                        Ich habe die{' '}
                        <a href="#" className="text-primary hover:underline">Datenschutzerklärung</a>{' '}
                        gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu. *
                      </span>
                    </label>
                    {errors.datenschutz && (
                      <p className="text-xs text-red-500 flex items-center gap-1.5 ml-8">
                        <AlertCircle size={11} /> {errors.datenschutz}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={state === 'loading'}
                    className="group w-full flex items-center justify-center gap-2.5 px-7 py-4 bg-primary text-white font-medium rounded-full hover:bg-opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed uppercase tracking-wider text-sm"
                  >
                    {state === 'loading' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Wird gesendet…
                      </>
                    ) : (
                      <>
                        Nachricht senden
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-text-muted-light/60 text-center">
                    Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeIn>

          {/* ── SIDEBAR ── */}
          <div className="space-y-5">
            {info.map((item, i) => (
              <FadeIn key={item.title} delay={0.2 + i * 0.1} direction="left">
                <div className="flex gap-4 p-6 rounded-[30px] shadow-sm hover:shadow-md transition-shadow duration-300 group bg-surface-light">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-main-light mb-1">{item.title}</h3>
                    <p className="text-sm text-text-muted-light leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}

            {/* Testimonial */}
            <FadeIn delay={0.5} direction="left">
              <div className="bg-surface-light rounded-[30px] p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#8ba38d">
                      <path d="M7 1L8.5 5H13L9.5 7.5L11 12L7 9.5L3 12L4.5 7.5L1 5H5.5L7 1Z"/>
                    </svg>
                  ))}
                </div>
                <p className="font-display italic text-sm text-text-muted-light leading-relaxed mb-4">
                  „Die Online-Sessions mit Nele haben mir mehr gegeben als alles, was ich
                  davor probiert hatte. Ich habe endlich verstanden, warum ich immer wieder
                  in dieselben Muster falle."
                </p>
                <p className="text-xs text-text-muted-light font-medium">
                  – Klientin, 34 J., Einzelberatung
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}
