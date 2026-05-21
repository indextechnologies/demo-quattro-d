"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  { value: "1989", label: "Año de fundación" },
  { value: "35+", label: "Años de tradición" },
  { value: "54", label: "Sabores de gelato" },
  { value: "4", label: "Locales en Paraguay" },
];

const categorias = [
  {
    icon: "🍦",
    label: "Copas Heladas",
    sub: "54 sabores artesanales",
    img: "https://images.unsplash.com/photo-1567206563174-f87ea81e14b3?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: "🍰",
    label: "Postres",
    sub: "Pastelería y dulces",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: "🥪",
    label: "Salados",
    sub: "Sándwiches y milanesas",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: "☕",
    label: "Cafetería",
    sub: "Blend italiano propio",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: "🥤",
    label: "Jugos y Batidos",
    sub: "Naturales al momento",
    img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=600&q=80",
  },
];

const valores = [
  {
    num: "01",
    title: "Cuidado",
    desc: "Cuidamos cada detalle para asegurar una experiencia única y placentera en cada visita.",
  },
  {
    num: "02",
    title: "Calidad",
    desc: "Utilizamos únicamente materia prima de la mejor calidad, proveniente de proveedores especializados.",
  },
  {
    num: "03",
    title: "Equipo",
    desc: "Nos esforzamos por mantener un ambiente de trabajo ameno y motivador para nuestro staff.",
  },
  {
    num: "04",
    title: "Innovación",
    desc: "Buscamos innovarnos permanentemente para atraer el interés de nuestros clientes, manteniendo nuestras tradiciones.",
  },
];

const locales = [
  {
    num: "01",
    name: "Casa Central",
    address: "Av. San Martín esq. Andrade",
    city: "Asunción, Paraguay",
    tel: "(021) 729-4444",
    note: "Nuestro local original desde 1989",
  },
  {
    num: "02",
    name: "Shopping del Sol",
    address: "Patio de Comidas, Planta Alta",
    city: "Asunción, Paraguay",
    tel: null,
    note: "Salón y terraza para 120 personas",
  },
  {
    num: "03",
    name: "Pedro Juan Caballero",
    address: "Shopping China — Ruta V y Av. Internacional",
    city: "Pedro Juan Caballero",
    tel: "(0981) 409-683",
    note: "Presente en el interior del país",
  },
  {
    num: "04",
    name: "Salto del Guairá",
    address: "Shopping China — Av. Paraguay esq. PJC",
    city: "Salto del Guairá",
    tel: "(0981) 828-969",
    note: "Presente en el interior del país",
  },
];

const novedades = [
  {
    tag: "Novedad",
    name: "Barra de Tragos",
    desc: "Coctelería artesanal para el after office y reuniones. Disponible en locales seleccionados.",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
  },
  {
    tag: "Temporada",
    name: "Copa San Remo",
    desc: "Sabores especiales de temporada, disponibles por tiempo limitado en todos los locales.",
    img: "https://images.unsplash.com/photo-1580915411954-282cb537dbe3?auto=format&fit=crop&w=600&q=80",
  },
  {
    tag: "Siempre",
    name: "Opciones Veganas",
    desc: "Gelato 100% vegetal con ingredientes naturales. Porque tutti merecen disfrutar quattro d.",
    img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <Navbar />
      <main>

        {/* ── 1. HERO ── */}
        <section className="relative flex min-h-screen items-end overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1800&q=85"
            alt="Gelato quattro d"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-deep/95 via-green-deep/50 to-transparent" />

          <div className="relative z-10 w-full px-6 pb-20 md:px-16 md:pb-28">
            <motion.p
              className="mb-3 text-xs uppercase tracking-[0.4em] text-cream-light/60"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.4, duration: 0.8 }}
            >
              desde 1989
            </motion.p>
            <motion.h1
              className="text-6xl font-light tracking-[0.12em] text-cream-light md:text-8xl lg:text-9xl"
              style={{ fontFamily: "var(--font-inter)" }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.6, duration: 0.9, ease: "easeOut" }}
            >
              quattro d
            </motion.h1>
            <motion.p
              className="mt-3 text-xl italic text-cream-light/60 md:text-2xl"
              style={{ fontFamily: "var(--font-playfair)" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.9, duration: 0.7 }}
            >
              fantasia nel dessert
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 4.2, duration: 0.6 }}
            >
              <Link href="/menu" className="rounded-full bg-cream-light px-8 py-3 text-sm font-medium tracking-wide text-green-deep transition-all hover:bg-cream hover:shadow-xl">
                Ver Menú
              </Link>
              <Link href="/locales" className="rounded-full border border-cream-light/30 px-8 py-3 text-sm font-medium tracking-wide text-cream-light transition-all hover:border-cream-light">
                Nuestros Locales
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── 2. STATS ── */}
        <section className="bg-green-deep px-6 py-12">
          <motion.div
            className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4"
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="text-center">
                <p className="text-4xl font-light tracking-tight text-cream-light md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
                  {s.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-cream-light/40">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── 3. HISTORIA ── */}
        <section className="bg-cream-light px-6 py-24">
          <div className="mx-auto max-w-6xl grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-green-mid">Nuestra Historia</motion.p>
              <motion.h2 variants={fadeUp} className="mt-3 text-4xl font-light text-text-dark md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
                Más de 35 años<br />en Paraguay
              </motion.h2>
              <motion.div variants={fadeUp} className="mt-8 space-y-5 text-base leading-8 text-text-mid">
                <p>
                  <span className="font-semibold text-green-deep">quattro d</span> desembarcó en Paraguay en la primavera de 1989, con la apertura de nuestro tradicional local en la esquina de San Martín y Andrade, el 27 de octubre de ese año.
                </p>
                <p>
                  En nuestros primeros pasos empezamos ofreciendo gelato y postres al mercado paraguayo, dando vida a nuestro slogan <em className="italic text-green-mid" style={{ fontFamily: "var(--font-playfair)" }}>"fantasia nel dessert"</em>.
                </p>
                <p>
                  Fue el deseo de sorprender y satisfacer lo que nos llevó a incorporar platos salados en nuestro menú, prestando la misma atención a la materia prima. Hoy contamos con 4 locales en Paraguay.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-8">
                <Link href="/nosotros" className="inline-flex items-center gap-2 text-sm font-medium text-green-deep underline underline-offset-4 hover:text-green-mid transition-colors">
                  Leer historia completa →
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative h-[500px] overflow-hidden rounded-3xl"
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=800&q=80"
                alt="Helado artesanal quattro d"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-deep/80 to-transparent p-8">
                <p className="text-sm italic text-cream-light/80" style={{ fontFamily: "var(--font-playfair)" }}>
                  "Ingredientes únicos y naturales, sorprendiendo desde 1989."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 4. MENÚ PREVIEW ── */}
        <section className="bg-cream py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <motion.div className="mb-14 text-center" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-green-mid">Lo que ofrecemos</motion.p>
              <motion.h2 variants={fadeUp} className="mt-3 text-4xl font-light text-text-dark" style={{ fontFamily: "var(--font-playfair)" }}>
                Nuestro menú
              </motion.h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5"
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              {categorias.map((c) => (
                <motion.div key={c.label} variants={fadeUp}>
                  <Link href="/menu" className="group block overflow-hidden rounded-2xl bg-cream-light transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative h-40 overflow-hidden">
                      <Image src={c.img} alt={c.label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-green-deep/20 group-hover:bg-green-deep/10 transition-colors" />
                    </div>
                    <div className="p-4">
                      <p className="font-medium text-text-dark">{c.label}</p>
                      <p className="mt-0.5 text-xs text-text-mid/60">{c.sub}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-10 text-center">
              <Link href="/menu" className="inline-block rounded-full border border-green-deep px-8 py-3 text-sm font-medium tracking-wide text-green-deep transition-all hover:bg-green-deep hover:text-cream-light">
                Ver menú completo
              </Link>
            </div>
          </div>
        </section>

        {/* ── 5. MISIÓN & VISIÓN ── */}
        <section className="bg-green-deep px-6 py-24">
          <div className="mx-auto max-w-6xl grid grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div
              className="border-t border-cream-light/20 pt-10"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-cream-light/40">Misión</p>
              <p className="mt-5 text-2xl font-light leading-relaxed text-cream-light" style={{ fontFamily: "var(--font-playfair)" }}>
                Ofrecer productos elaborados con materia prima de primerísima calidad al mercado paraguayo, por medio de un excelente servicio proveído por un equipo comprometido con la marca.
              </p>
            </motion.div>
            <motion.div
              className="border-t border-cream-light/20 pt-10"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-cream-light/40">Visión</p>
              <p className="mt-5 text-2xl font-light leading-relaxed text-cream-light" style={{ fontFamily: "var(--font-playfair)" }}>
                Convertirnos en un sinónimo de calidad y un principal destino gastronómico del país, donde se viva una experiencia de la "A" a la "Z".
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 6. VALORES ── */}
        <section className="bg-cream-light py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <motion.div className="mb-14" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-green-mid">Nuestros valores</motion.p>
              <motion.h2 variants={fadeUp} className="mt-3 text-4xl font-light text-text-dark" style={{ fontFamily: "var(--font-playfair)" }}>
                Lo que nos define
              </motion.h2>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              {valores.map((v) => (
                <motion.div key={v.title} variants={fadeUp} className="rounded-2xl bg-cream border border-green-pale p-8 hover:border-green-light hover:shadow-sm transition-all">
                  <p className="text-3xl font-light text-green-deep/20" style={{ fontFamily: "var(--font-playfair)" }}>{v.num}</p>
                  <p className="mt-4 text-lg font-medium text-text-dark">{v.title}</p>
                  <p className="mt-2 text-sm leading-6 text-text-mid/70">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 7. LOCALES ── */}
        <section className="bg-cream py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <motion.div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div>
                <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-green-mid">Te esperamos</motion.p>
                <motion.h2 variants={fadeUp} className="mt-3 text-4xl font-light text-text-dark" style={{ fontFamily: "var(--font-playfair)" }}>
                  Nuestros locales
                </motion.h2>
              </div>
              <motion.div variants={fadeUp}>
                <Link href="/locales" className="text-sm text-green-mid underline underline-offset-4 hover:text-green-deep transition-colors">
                  Ver todos →
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              {locales.map((l) => (
                <motion.div key={l.name} variants={fadeUp} className="rounded-2xl bg-cream-light border border-green-pale p-7 hover:border-green-light hover:shadow-sm transition-all">
                  <p className="text-xs font-light text-green-deep/30 mb-4" style={{ fontFamily: "var(--font-playfair)" }}>{l.num}</p>
                  <div className="h-0.5 w-8 rounded-full bg-green-deep mb-4" />
                  <p className="font-semibold text-text-dark">{l.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-mid/70">{l.address}</p>
                  <p className="text-sm text-text-mid/70">{l.city}</p>
                  {l.tel && <a href={`tel:${l.tel}`} className="mt-3 block text-xs text-green-mid hover:text-green-deep transition-colors">{l.tel}</a>}
                  <p className="mt-3 text-xs italic text-text-mid/40">{l.note}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 8. NUEVAS DELICIAS ── */}
        <section className="bg-green-deep py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <motion.div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div>
                <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-cream-light/40">Siempre algo nuevo</motion.p>
                <motion.h2 variants={fadeUp} className="mt-3 text-4xl font-light text-cream-light" style={{ fontFamily: "var(--font-playfair)" }}>
                  Nuevas delicias
                </motion.h2>
              </div>
              <motion.div variants={fadeUp}>
                <Link href="/nuevas-delicias" className="text-sm text-cream-light/60 underline underline-offset-4 hover:text-cream-light transition-colors">
                  Ver todas →
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              {novedades.map((n) => (
                <motion.div key={n.name} variants={fadeUp} className="group overflow-hidden rounded-2xl bg-green-mid/20">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={n.img} alt={n.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-green-deep/30" />
                    <span className="absolute top-4 left-4 rounded-full bg-cream-light/90 px-3 py-1 text-xs font-medium text-green-deep">
                      {n.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="font-medium text-cream-light">{n.name}</p>
                    <p className="mt-2 text-sm leading-6 text-cream-light/60">{n.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 9. DELIVERY ── */}
        <section className="bg-cream-light border-t border-green-pale py-20 px-6">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-green-mid">Pedí desde casa</motion.p>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-light text-text-dark" style={{ fontFamily: "var(--font-playfair)" }}>
              Delivery disponible
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm text-text-mid/60">
              Pedí por teléfono, WhatsApp o a través de las apps.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="tel:+595217294444" className="flex items-center gap-2 rounded-full bg-green-deep px-6 py-3 text-sm font-medium text-cream-light hover:bg-green-mid transition-colors">
                📞 (021) 729-4444
              </a>
              <a href="https://wa.me/595974600129" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-cream border border-green-pale px-6 py-3 text-sm font-medium text-text-dark hover:border-green-light transition-colors">
                💬 WhatsApp
              </a>
              <span className="flex items-center gap-2 rounded-full bg-cream border border-green-pale px-6 py-3 text-sm font-medium text-text-dark">
                🛵 Monchi · PedidosYa
              </span>
            </motion.div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </>
  );
}
