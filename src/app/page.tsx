import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const categories = [
  { icon: "🍦", label: "Copas Heladas", sub: "54 sabores de gelato" },
  { icon: "🍰", label: "Postres", sub: "Pastelería artesanal" },
  { icon: "🥪", label: "Salados", sub: "Sándwiches y milanesas" },
  { icon: "☕", label: "Cafetería", sub: "Blend italiano propio" },
  { icon: "🥤", label: "Jugos y Batidos", sub: "Naturales al momento" },
];

const locales = [
  {
    name: "Casa Central",
    address: "Av. San Martín esq. Andrade",
    city: "Asunción",
    tel: "(021) 729-4444",
  },
  {
    name: "Shopping del Sol",
    address: "Patio de Comidas — Planta Alta",
    city: "Asunción",
    tel: null,
  },
  {
    name: "Pedro Juan Caballero",
    address: "Shopping China — Ruta V y Av. Internacional",
    city: "Pedro Juan Caballero",
    tel: "(0981) 409-683",
  },
  {
    name: "Salto del Guairá",
    address: "Shopping China — Av. Paraguay esq. PJC",
    city: "Salto del Guairá",
    tel: "(0981) 828-969",
  },
];

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-green-deep px-6 text-center">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-green-mid/20" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-mid/15" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <p className="mb-4 text-xs tracking-[0.4em] uppercase text-cream-light/50">
              desde 1989
            </p>
            <h1
              className="text-7xl font-light tracking-[0.15em] text-cream-light md:text-9xl"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              quattro d
            </h1>
            <p
              className="mt-4 text-xl italic text-cream-light/60"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              fantasia nel dessert
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream-light/50">
              Más de 35 años ofreciendo gelato italiano auténtico y los mejores
              sabores de Paraguay.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/menu"
                className="rounded-full bg-cream-light px-8 py-3 text-sm font-medium tracking-wide text-green-deep transition-all hover:bg-cream hover:shadow-lg"
              >
                Ver Menú
              </Link>
              <Link
                href="/locales"
                className="rounded-full border border-cream-light/30 px-8 py-3 text-sm font-medium tracking-wide text-cream-light/80 transition-all hover:border-cream-light hover:text-cream-light"
              >
                Nuestros Locales
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-cream-light/30">
            <span className="text-xs tracking-widest uppercase">Explorar</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <path
                d="M8 4 L8 20 M3 15 L8 20 L13 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-cream-light py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-green-mid">
                Lo que ofrecemos
              </p>
              <h2
                className="mt-2 text-3xl font-light text-text-dark md:text-4xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Una experiencia completa
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {categories.map((c) => (
                <Link
                  key={c.label}
                  href="/menu"
                  className="group flex flex-col items-center gap-3 rounded-2xl bg-cream p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md hover:bg-green-pale"
                >
                  <span className="text-3xl">{c.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-text-dark group-hover:text-green-deep">
                      {c.label}
                    </p>
                    <p className="mt-0.5 text-xs text-text-mid/60">{c.sub}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage banner */}
        <section className="bg-green-deep py-20 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-cream-light/40">
              Nuestra historia
            </p>
            <blockquote
              className="mt-6 text-2xl italic leading-relaxed text-cream-light/90 md:text-3xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              "Desde nuestros inicios, hemos utilizado ingredientes únicos y
              naturales buscando siempre sorprenderlos con sabores nuevos,
              manteniendo la calidad que caracteriza a nuestra marca."
            </blockquote>
            <p className="mt-6 text-sm tracking-widest uppercase text-cream-light/40">
              — quattro d, Asunción, 1989
            </p>
            <Link
              href="/nosotros"
              className="mt-8 inline-block text-sm tracking-wide text-cream-light/60 underline underline-offset-4 hover:text-cream-light transition-colors"
            >
              Conocé nuestra historia →
            </Link>
          </div>
        </section>

        {/* Locales preview */}
        <section className="bg-cream py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-green-mid">
                Te esperamos
              </p>
              <h2
                className="mt-2 text-3xl font-light text-text-dark md:text-4xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Nuestros locales
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {locales.map((l) => (
                <div
                  key={l.name}
                  className="rounded-2xl border border-green-pale bg-cream-light p-6 transition-all hover:border-green-light hover:shadow-sm"
                >
                  <div className="mb-3 h-1 w-8 rounded-full bg-green-deep" />
                  <p className="font-medium text-text-dark">{l.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-mid/70">
                    {l.address}
                  </p>
                  <p className="text-sm text-text-mid/70">{l.city}</p>
                  {l.tel && (
                    <a
                      href={`tel:${l.tel}`}
                      className="mt-3 block text-xs text-green-mid hover:text-green-deep transition-colors"
                    >
                      {l.tel}
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/locales"
                className="inline-block rounded-full border border-green-deep px-8 py-3 text-sm font-medium tracking-wide text-green-deep transition-all hover:bg-green-deep hover:text-cream-light"
              >
                Ver todos los locales
              </Link>
            </div>
          </div>
        </section>

        {/* Delivery */}
        <section className="bg-cream-light border-t border-green-pale py-16 px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-green-mid">
              Pedí desde casa
            </p>
            <h2
              className="mt-2 text-2xl font-light text-text-dark"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Delivery disponible
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full bg-green-deep px-6 py-3 text-sm font-medium text-cream-light">
                📞 7294444
              </div>
              <div className="flex items-center gap-2 rounded-full bg-cream border border-green-pale px-6 py-3 text-sm font-medium text-text-dark">
                📱 (0974) 600-129
              </div>
              <div className="flex items-center gap-2 rounded-full bg-cream border border-green-pale px-6 py-3 text-sm font-medium text-text-dark">
                🛵 Monchi
              </div>
              <div className="flex items-center gap-2 rounded-full bg-cream border border-green-pale px-6 py-3 text-sm font-medium text-text-dark">
                🛵 PedidosYa
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
