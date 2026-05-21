import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const locales = [
  {
    id: 1,
    name: "Casa Central",
    subtitle: "Av. San Martín esq. Andrade",
    address: "Av. San Martín esq. Andrade",
    city: "Asunción, Paraguay",
    tel: "+595 21 7294444",
    telDisplay: "(021) 729-4444",
    horario: "Dom–Jue 9:00 – 00:30 · Vie–Sáb 9:00 – 2:00",
    maps: "https://maps.google.com/?q=quattro+d+san+martin+andrade+asuncion+paraguay",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.55!2d-57.576414!3d-25.293418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzM2LjMiUyA1N8KwMzQnMzUuMSJX!5e0!3m2!1ses!2spy!4v1234567890",
    note: "Nuestro local original, desde 1989.",
    featured: true,
  },
  {
    id: 2,
    name: "Shopping del Sol",
    subtitle: "Patio de Comidas — Planta Alta",
    address: "Patio de Comidas, Planta Alta",
    city: "Asunción, Paraguay",
    tel: null,
    telDisplay: null,
    horario: "Según horario del shopping",
    maps: "https://maps.google.com/?q=shopping+del+sol+asuncion+paraguay",
    mapEmbed: null,
    note: "Amplio espacio con salón y terraza para 120 personas.",
    featured: false,
  },
  {
    id: 3,
    name: "Pedro Juan Caballero",
    subtitle: "Shopping China — Ruta V y Av. Internacional",
    address: "Shopping China, Ruta V y Avenida Internacional",
    city: "Pedro Juan Caballero, Paraguay",
    tel: "+595981409683",
    telDisplay: "(0981) 409-683",
    horario: "Según horario del shopping",
    maps: "https://maps.google.com/?q=shopping+china+pedro+juan+caballero+paraguay",
    mapEmbed: null,
    note: "Presente en el interior del país.",
    featured: false,
  },
  {
    id: 4,
    name: "Salto del Guairá",
    subtitle: "Shopping China — Av. Paraguay esq. PJC",
    address: "Shopping China, Avenida Paraguay esq. Pedro Juan Caballero",
    city: "Salto del Guairá, Paraguay",
    tel: "+595981828969",
    telDisplay: "(0981) 828-969",
    horario: "Según horario del shopping",
    maps: "https://maps.google.com/?q=salto+del+guaira+paraguay",
    mapEmbed: null,
    note: "Presente en el interior del país.",
    featured: false,
  },
];

export default function Locales() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-green-deep px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-cream-light/40">
            quattro d
          </p>
          <h1
            className="mt-3 text-4xl font-light text-cream-light md:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nuestros Locales
          </h1>
          <p className="mt-4 text-sm text-cream-light/50">
            Asunción · Pedro Juan Caballero · Salto del Guairá
          </p>
        </section>

        {/* Locales */}
        <section className="bg-cream-light px-6 py-20">
          <div className="mx-auto max-w-5xl space-y-8">
            {locales.map((l) => (
              <div
                key={l.id}
                className={`rounded-2xl overflow-hidden border ${
                  l.featured
                    ? "border-green-mid shadow-md"
                    : "border-green-pale"
                } bg-cream`}
              >
                {l.featured && (
                  <div className="bg-green-deep px-8 py-2 text-xs uppercase tracking-widest text-cream-light/70">
                    Local original · Desde 1989
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Info */}
                  <div className="p-8">
                    <div className="mb-4 h-1 w-8 rounded-full bg-green-deep" />
                    <h2
                      className="text-2xl font-light text-text-dark"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {l.name}
                    </h2>
                    <p className="mt-1 text-sm text-green-mid">{l.subtitle}</p>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 text-green-mid">📍</span>
                        <div>
                          <p className="text-sm text-text-mid">{l.address}</p>
                          <p className="text-sm text-text-mid">{l.city}</p>
                        </div>
                      </div>

                      {l.telDisplay && (
                        <div className="flex items-center gap-3">
                          <span className="text-green-mid">📞</span>
                          <a
                            href={`tel:${l.tel}`}
                            className="text-sm text-text-mid hover:text-green-deep transition-colors"
                          >
                            {l.telDisplay}
                          </a>
                        </div>
                      )}

                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 text-green-mid">🕐</span>
                        <p className="text-sm text-text-mid">{l.horario}</p>
                      </div>
                    </div>

                    <p className="mt-6 text-xs italic text-text-mid/50">
                      {l.note}
                    </p>

                    <a
                      href={l.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-deep px-5 py-2 text-sm font-medium text-green-deep transition-all hover:bg-green-deep hover:text-cream-light"
                    >
                      Ver en Google Maps →
                    </a>
                  </div>

                  {/* Map or placeholder */}
                  <div className="bg-green-pale min-h-[220px] md:min-h-0 flex items-center justify-center">
                    {l.mapEmbed ? (
                      <iframe
                        src={l.mapEmbed}
                        width="100%"
                        height="100%"
                        style={{ minHeight: 220, border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Mapa ${l.name}`}
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-3 p-10 text-center">
                        <span className="text-4xl">📍</span>
                        <p className="text-sm text-green-deep/60">{l.city}</p>
                        <a
                          href={l.maps}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs underline underline-offset-4 text-green-mid hover:text-green-deep transition-colors"
                        >
                          Abrir en Google Maps
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery CTA */}
        <section className="bg-green-deep py-16 px-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-cream-light/40">
            No podés venir
          </p>
          <h2
            className="mt-3 text-2xl font-light text-cream-light"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Pedí a domicilio
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+595217294444"
              className="flex items-center gap-2 rounded-full bg-cream-light px-6 py-3 text-sm font-medium text-green-deep transition-all hover:bg-cream hover:shadow-lg"
            >
              📞 (021) 729-4444
            </a>
            <a
              href="https://wa.me/595974600129"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-cream-light/30 px-6 py-3 text-sm font-medium text-cream-light transition-all hover:border-cream-light"
            >
              📱 WhatsApp
            </a>
          </div>
          <p className="mt-4 text-xs text-cream-light/40">
            También en Monchi y PedidosYa
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
