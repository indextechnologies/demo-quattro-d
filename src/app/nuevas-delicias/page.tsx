import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const novedades = [
  {
    tag: "Novedad",
    name: "Barra de Tragos",
    desc: "Tragos artesanales para el after office y reuniones con amigos. Coctelería premium disponible en nuestros locales seleccionados.",
    detail: "Disponible en Paseo La Galería y Shopping del Sol",
  },
  {
    tag: "Temporada",
    name: "Copa San Remo",
    desc: "Nuestra copa de temporada con sabores especialmente seleccionados para esta época del año. Disponible por tiempo limitado.",
    detail: "Disponible en todos los locales",
  },
  {
    tag: "Siempre",
    name: "Opciones Veganas",
    desc: "Gelato 100% vegetal elaborado con ingredientes naturales. Porque queremos que todos puedan disfrutar de quattro d.",
    detail: "Sin lácteos · Sin ingredientes animales",
  },
  {
    tag: "Siempre",
    name: "Opciones Diet",
    desc: "Alternativas bajas en azúcar que mantienen el sabor y la cremosidad de nuestro gelato artesanal italiano.",
    detail: "Bajo en azúcar · Sin renunciar al sabor",
  },
  {
    tag: "Nuevo",
    name: "Picadas & After Office",
    desc: "Tablas de fiambres, quesos y bocaditos para compartir. El lugar perfecto para terminar el día con lo que más te gusta.",
    detail: "Perfecto para grupos y reuniones",
  },
  {
    tag: "Temporada",
    name: "Jugos de Estación",
    desc: "Cada temporada seleccionamos las mejores frutas frescas del momento para crear combinaciones únicas y naturales.",
    detail: "Exprimidos al momento · Sin azúcar agregada",
  },
];

export default function NuevasDelicias() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden bg-green-deep px-6 py-24 text-center">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-green-mid/20" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-green-mid/15" />
          </div>
          <div className="relative z-10">
            <p className="text-sm tracking-[0.2em] text-green-light font-medium" style={{ fontFamily: "var(--font-inter)" }}>
              quattro d
            </p>
            <h1
              className="mt-3 text-4xl font-light text-cream-light md:text-6xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nuevas Delicias
            </h1>
            <p className="mt-4 max-w-lg mx-auto text-sm leading-relaxed text-cream-light/50">
              Siempre en movimiento. Seguimos sorprendiéndote con nuevos
              sabores, opciones y experiencias.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="bg-cream-light px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {novedades.map((n) => (
                <div
                  key={n.name}
                  className="group rounded-2xl bg-cream border border-green-pale p-8 transition-all hover:border-green-light hover:shadow-md hover:-translate-y-1"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="h-1 w-8 rounded-full bg-green-deep" />
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        n.tag === "Nuevo" || n.tag === "Novedad"
                          ? "bg-green-deep text-cream-light"
                          : n.tag === "Temporada"
                          ? "bg-green-pale text-green-deep"
                          : "bg-cream border border-green-pale text-text-mid"
                      }`}
                    >
                      {n.tag}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-light text-text-dark"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {n.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-text-mid/70">{n.desc}</p>
                  <p className="mt-4 text-xs tracking-wide text-green-mid">{n.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA redes */}
        <section className="bg-green-deep py-20 px-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-cream-light/40">
            Seguinos
          </p>
          <h2
            className="mt-3 text-3xl font-light text-cream-light"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Siempre hay algo nuevo
          </h2>
          <p className="mt-4 text-sm text-cream-light/50">
            Seguí nuestras redes para enterarte primero de todos los lanzamientos y promociones.
          </p>
          <a
            href="https://www.instagram.com/quattrodpy/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-cream-light px-8 py-3 text-sm font-medium tracking-wide text-green-deep transition-all hover:bg-cream hover:shadow-lg"
          >
            @quattrodpy en Instagram
          </a>
        </section>

        {/* CTA menu */}
        <section className="bg-cream-light border-t border-green-pale py-16 px-6 text-center">
          <p className="text-sm text-text-mid/60">
            ¿Querés ver todo lo que tenemos?
          </p>
          <Link
            href="/menu"
            className="mt-4 inline-block rounded-full border border-green-deep px-8 py-3 text-sm font-medium tracking-wide text-green-deep transition-all hover:bg-green-deep hover:text-cream-light"
          >
            Ver el menú completo
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
