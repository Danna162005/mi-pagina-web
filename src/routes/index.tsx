import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

const WHATSAPP_NUMBER = '593998805732'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hola! Quiero información sobre los precios de STREAM STORE 🎬',
)}`

type PlanKey = '1mes' | '3meses' | '6meses' | 'combos'

const PLANS: Array<{
  key: PlanKey
  label: string
  short: string
  images: Array<string>
}> = [
  {
    key: '1mes',
    label: 'PRECIOS POR 1 MES',
    short: '1 MES',
    images: ['/precios/1mes.png'],
  },
  {
    key: '3meses',
    label: 'PRECIOS POR 3 MESES',
    short: '3 MESES',
    images: ['/precios/3meses.png'],
  },
  {
    key: '6meses',
    label: 'PRECIOS POR 6 MESES',
    short: '6 MESES',
    images: ['/precios/6meses.png'],
  },
  {
    key: 'combos',
    label: 'MEGA COMBOS',
    short: 'COMBOS',
    images: [
      '/precios/combo3.png',
      '/precios/combo4.png',
      '/precios/combo2.png',
      '/precios/combo1.png',
    ],
  },
]

function Home() {
  const [active, setActive] = useState<PlanKey>('1mes')
  const current = PLANS.find((p) => p.key === active)!

  return (
    <div className="min-h-screen bg-[#0a0a12] text-white relative overflow-x-hidden">
      {/* ambient background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute top-1/3 -left-20 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-[#0a0a12]/85 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-amber-400 flex items-center justify-center font-black text-sm shadow-lg shadow-purple-900/40">
              S
            </div>
            <div className="leading-tight">
              <p className="font-extrabold tracking-wide text-sm sm:text-base">
                STREAM<span className="text-fuchsia-400">STORE</span>
              </p>
              <p className="text-[10px] sm:text-xs text-white/50 -mt-0.5">
                Streaming al mejor precio
              </p>
            </div>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 rounded-full bg-[#25D366] text-black font-semibold text-xs px-3 py-1.5 shadow-md hover:brightness-110 transition"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Escríbenos
          </a>
        </div>
      </header>

      {/* Menu */}
      <nav className="max-w-3xl mx-auto px-3 pt-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PLANS.map((plan) => {
            const isActive = plan.key === active
            return (
              <button
                key={plan.key}
                onClick={() => setActive(plan.key)}
                className={`relative rounded-xl px-3 py-3 text-xs sm:text-sm font-bold uppercase tracking-tight transition-all border ${
                  isActive
                    ? 'bg-gradient-to-br from-purple-600 to-fuchsia-600 border-fuchsia-400/60 shadow-lg shadow-fuchsia-900/40 scale-[1.02]'
                    : 'bg-white/[0.04] border-white/10 text-white/70 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                {plan.short}
              </button>
            )
          })}
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-3 pb-32 pt-6">
        <div key={current.key} className="fade-in">
          <h1 className="text-center text-lg sm:text-2xl font-extrabold mb-4 tracking-wide">
            {current.label}
          </h1>

          {current.key === 'combos' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {current.images.map((src, i) => (
                <div
                  key={src}
                  className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-black/40"
                >
                  <img
                    src={src}
                    alt={`Mega Combo ${i + 1}`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-black/40 max-w-md mx-auto">
              <img
                src={current.images[0]}
                alt={current.label}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-black font-bold px-6 py-3 shadow-lg shadow-green-900/40 hover:brightness-110 transition"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Pedir por WhatsApp
          </a>
        </div>
      </main>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="whatsapp-pulse fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-black/50 active:scale-95 transition"
      >
        <WhatsAppIcon className="h-7 w-7 text-black" />
      </a>

      <footer className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Stream Store · Todos los precios y catálogos son referenciales
        a las imágenes publicadas.
      </footer>
    </div>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.34.658 4.523 1.8 6.383L4 29l7.83-1.76A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm0 21.75a9.68 9.68 0 0 1-4.94-1.36l-.354-.21-4.64 1.04 1.06-4.51-.23-.37A9.7 9.7 0 0 1 5.25 15c0-5.93 4.82-10.75 10.754-10.75S26.75 9.07 26.75 15 21.94 24.75 16.004 24.75zm5.53-7.32c-.303-.152-1.79-.883-2.07-.983-.28-.1-.483-.152-.686.152-.203.303-.79.983-.968 1.185-.178.202-.355.227-.658.076-.303-.152-1.28-.472-2.44-1.51-.902-.804-1.51-1.797-1.688-2.1-.178-.303-.02-.467.13-.62.152-.152.34-.395.51-.593.17-.198.226-.34.34-.567.113-.227.057-.42-.04-.593-.098-.172-.83-2-1.14-2.717-.303-.7-.612-.607-.84-.618l-.716-.013c-.227 0-.593.085-.812.34-.22.253-.833.815-.833 1.987 0 1.172.85 2.305.968 2.464.117.16 1.617 2.475 3.923 3.37 2.306.895 2.306.596 2.723.56.417-.037 1.347-.55 1.535-1.083.19-.532.19-.988.133-1.083-.057-.096-.303-.152-.606-.303z" />
    </svg>
  )
}
