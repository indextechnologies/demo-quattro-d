"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" as const } },
};
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

const marqueeItems = [
  "gelato italiano", "desde 1989", "fantasia nel dessert",
  "54 sabores", "hecho con amor", "calidad premium",
  "gelato italiano", "desde 1989", "fantasia nel dessert",
  "54 sabores", "hecho con amor", "calidad premium",
];

const stats = [
  { value: "1989", label: "Fundación" },
  { value: "35+", label: "Años de tradición" },
  { value: "54", label: "Sabores de gelato" },
  { value: "4", label: "Locales" },
];

const categorias = [
  { label: "Copas Heladas", sub: "54 sabores artesanales", img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=600&q=80" },
  { label: "Postres", sub: "Pastelería y dulces", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80" },
  { label: "Salados", sub: "Sándwiches y milanesas", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80" },
  { label: "Cafetería", sub: "Blend italiano propio", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80" },
  { label: "Jugos y Batidos", sub: "Naturales al momento", img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=600&q=80" },
];

const valores = [
  { num: "01", title: "Cuidado", desc: "Cada detalle importa. Cuidamos cada aspecto de tu experiencia para que sea única y placentera." },
  { num: "02", title: "Calidad", desc: "Materia prima de primerísima calidad, proveniente de proveedores especializados seleccionados." },
  { num: "03", title: "Equipo", desc: "Un staff comprometido y motivado, formado para brindarte la mejor atención en cada visita." },
  { num: "04", title: "Innovación", desc: "Evolución constante sin perder la esencia. Nuevos sabores, misma tradición desde 1989." },
];

const locales = [
  { num: "01", name: "Casa Central", address: "Av. San Martín esq. Andrade", city: "Asunción", tel: "(021) 729-4444", note: "Local original · Desde 1989" },
  { num: "02", name: "Shopping del Sol", address: "Patio de Comidas, Planta Alta", city: "Asunción", tel: null, note: "Salón y terraza · 120 personas" },
  { num: "03", name: "Pedro Juan Caballero", address: "Shopping China — Ruta V y Av. Internacional", city: "Pedro Juan Caballero", tel: "(0981) 409-683", note: "Interior del país" },
  { num: "04", name: "Salto del Guairá", address: "Shopping China — Av. Paraguay esq. PJC", city: "Salto del Guairá", tel: "(0981) 828-969", note: "Interior del país" },
];

const novedades = [
  { tag: "Novedad", name: "Barra de Tragos", desc: "Coctelería artesanal para el after office. Disponible en locales seleccionados.", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80" },
  { tag: "Temporada", name: "Copa San Remo", desc: "Sabores especiales de temporada, por tiempo limitado en todos los locales.", img: "https://images.unsplash.com/photo-1580915411954-282cb537dbe3?auto=format&fit=crop&w=700&q=80" },
  { tag: "Siempre", name: "Opciones Veganas", desc: "Gelato 100% vegetal. Porque tutti merecen disfrutar quattro d.", img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=700&q=80" },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <IntroAnimation />
      <Navbar />
      <main>

        {/* ── 1. HERO ── */}
        <section ref={heroRef} className="grain relative flex min-h-screen items-end overflow-hidden bg-green-deep">
          <motion.div className="absolute inset-0" style={{ y: heroY }}>
            <Image
              src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1800&q=90"
              alt="Gelato quattro d"
              fill priority
              className="object-cover object-center"
            />
          </motion.div>

          {/* Gradient overlay — darker at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

          {/* Decorative top-right circle */}
          <div className="pointer-events-none absolute top-24 right-16 h-64 w-64 rounded-full border border-white/5 hidden md:block" />
          <div className="pointer-events-none absolute top-32 right-24 h-44 w-44 rounded-full border border-white/5 hidden md:block" />

          <motion.div
            className="relative z-10 w-full px-8 pb-24 md:px-20 md:pb-32"
            style={{ opacity: heroOpacity }}
          >
            {/* Year badge */}
            <motion.div
              className="mb-6 inline-flex items-center gap-3"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.4, duration: 0.7 }}
            >
              <div className="h-px w-10 bg-white/40" />
              <span className="text-xs uppercase tracking-[0.4em] text-white/50">Paraguay · desde 1989</span>
              <div className="h-px w-10 bg-white/40" />
            </motion.div>

            {/* Main logo */}
            <motion.h1
              className="leading-none text-white"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 800, fontSize: "clamp(4rem, 13vw, 12rem)", letterSpacing: "-0.02em" }}
              initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.6, duration: 1, ease: "easeOut" }}
            >
              quattro d
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="mt-4 text-xl italic text-white/50 md:text-2xl"
              style={{ fontFamily: "var(--font-playfair)" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.0, duration: 0.8 }}
            >
              fantasia nel dessert
            </motion.p>

            {/* Divider */}
            <motion.div
              className="my-8 h-px w-24 bg-white/20"
              initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 4.2, duration: 0.6 }}
            />

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 4.3, duration: 0.7 }}
            >
              <Link href="/menu"
                className="group relative overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-green-deep transition-all hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Ver Menú</span>
              </Link>
              <Link href="/locales"
                className="rounded-full border border-white/25 px-8 py-3.5 text-sm font-medium tracking-wide text-white/80 backdrop-blur-sm transition-all hover:border-white/60 hover:text-white hover:bg-white/5"
              >
                Nuestros Locales
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 right-10 flex flex-col items-center gap-2 text-white/30"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.8, duration: 0.8 }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase rotate-90 mb-3">scroll</span>
            <motion.div
              className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent"
              animate={{ scaleY: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </section>

        {/* ── 2. MARQUEE ── */}
        <div className="overflow-hidden border-y border-green-deep/10 bg-green-deep py-4">
          <div className="marquee-track flex gap-10 whitespace-nowrap">
            {marqueeItems.map((item, i) => (
              <span key={i} className="flex items-center gap-10 text-xs uppercase tracking-[0.3em] text-cream-light/40">
                {item}
                <span className="text-green-light/40">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── 3. STATS ── */}
        <section className="bg-green-deep px-6 py-16">
          <motion.div
            className="mx-auto grid max-w-5xl grid-cols-2 gap-10 md:grid-cols-4"
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="group text-center">
                <p className="text-5xl font-light text-cream-light transition-colors group-hover:text-green-light md:text-6xl" style={{ fontFamily: "var(--font-playfair)" }}>
                  {s.value}
                </p>
                <div className="mx-auto my-3 h-px w-8 bg-green-light/30 transition-all group-hover:w-14 group-hover:bg-green-light/60" />
                <p className="text-xs uppercase tracking-widest text-cream-light/40">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── 4. HISTORIA ── */}
        <section className="bg-cream-light px-6 py-28 overflow-hidden">
          <div className="mx-auto max-w-6xl grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-green-mid" />
                <p className="text-xs uppercase tracking-[0.3em] text-green-mid">Nuestra Historia</p>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl font-light text-text-dark md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
                Más de 35 años<br />
                <span className="italic text-green-mid">en Paraguay</span>
              </motion.h2>
              <motion.div variants={fadeUp} className="mt-8 space-y-5 text-base leading-8 text-text-mid/80">
                <p>
                  <span className="font-semibold text-green-deep">quattro d</span> desembarcó en Paraguay en la primavera de 1989, con la apertura de su tradicional local en San Martín y Andrade, el 27 de octubre de ese año.
                </p>
                <p>
                  Comenzamos ofreciendo gelato y postres al mercado paraguayo, dando vida a nuestro slogan{" "}
                  <em className="italic text-green-mid" style={{ fontFamily: "var(--font-playfair)" }}>"fantasia nel dessert"</em>.
                </p>
                <p>
                  El deseo de sorprender nos llevó a incorporar platos salados, tragos y mucho más. Hoy, con 4 locales en Paraguay, seguimos siendo sinónimo de calidad y sabor.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
                <Link href="/nosotros" className="group flex items-center gap-2 text-sm font-medium text-green-deep hover:text-green-mid transition-colors">
                  <span className="underline underline-offset-4">Historia completa</span>
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Main image */}
              <div className="relative h-[520px] overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=800&q=80"
                  alt="Helado artesanal quattro d"
                  fill className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-deep/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-sm italic text-cream-light/80" style={{ fontFamily: "var(--font-playfair)" }}>
                    "Ingredientes únicos y naturales, sorprendiendo desde 1989."
                  </p>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-5 -left-5 rounded-2xl bg-green-deep p-6 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}
              >
                <p className="text-3xl font-light text-cream-light" style={{ fontFamily: "var(--font-playfair)" }}>35+</p>
                <p className="text-xs uppercase tracking-widest text-cream-light/50 mt-1">años de historia</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── 5. MENÚ PREVIEW ── */}
        <section className="bg-cream py-28 px-6 overflow-hidden">
          <div className="mx-auto max-w-6xl">
            <motion.div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div>
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-green-mid" />
                  <p className="text-xs uppercase tracking-[0.3em] text-green-mid">Lo que ofrecemos</p>
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-4xl font-light text-text-dark md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
                  Nuestro menú
                </motion.h2>
              </div>
              <motion.div variants={fadeIn}>
                <Link href="/menu" className="group flex items-center gap-2 text-sm font-medium text-green-mid hover:text-green-deep transition-colors">
                  <span>Menú completo</span>
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5"
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              {categorias.map((c) => (
                <motion.div key={c.label} variants={fadeUp} whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
                  <Link href="/menu" className="group block overflow-hidden rounded-2xl bg-cream-light shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-44 overflow-hidden">
                      <Image src={c.img} alt={c.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-4 border-t border-green-pale">
                      <p className="font-semibold text-text-dark text-sm">{c.label}</p>
                      <p className="mt-0.5 text-xs text-text-mid/50">{c.sub}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 6. MISIÓN & VISIÓN ── */}
        <section className="relative bg-green-deep px-6 py-28 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 right-0 h-px bg-cream-light" />
            <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full border border-cream-light" />
            <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full border border-cream-light" />
          </div>
          <div className="mx-auto max-w-6xl grid grid-cols-1 gap-16 md:grid-cols-2">
            {[
              { label: "Misión", text: "Ofrecer productos elaborados con materia prima de primerísima calidad al mercado paraguayo, por medio de un excelente servicio proveído por un equipo comprometido con la marca, cerrando así un círculo de servicio en constante movimiento para satisfacer a sus clientes." },
              { label: "Visión", text: 'Convertirnos en un sinónimo de calidad y un principal destino gastronómico en el país, donde se viva una experiencia de la "A" a la "Z", disfrutando de los mejores productos y recibiendo la mejor atención de un staff altamente capacitado y comprometido.' },
            ].map((item, i) => (
              <motion.div key={item.label}
                className="relative pl-8 border-l border-cream-light/15"
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, delay: i * 0.18 }}
              >
                <div className="absolute -left-1 top-0 h-2 w-2 rounded-full bg-green-light" />
                <p className="text-xs uppercase tracking-[0.35em] text-cream-light/35 mb-5">{item.label}</p>
                <p className="text-xl font-light leading-relaxed text-cream-light/85" style={{ fontFamily: "var(--font-playfair)" }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── 7. VALORES ── */}
        <section className="bg-cream-light py-28 px-6 overflow-hidden">
          <div className="mx-auto max-w-6xl">
            <motion.div className="mb-16" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-green-mid" />
                <p className="text-xs uppercase tracking-[0.3em] text-green-mid">Nuestros valores</p>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl font-light text-text-dark md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
                Lo que nos define
              </motion.h2>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              {valores.map((v) => (
                <motion.div key={v.title} variants={fadeUp}
                  whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(45,90,39,0.15)" }}
                  className="rounded-2xl bg-cream border border-green-pale p-8 transition-colors hover:border-green-light cursor-default"
                >
                  <p className="text-4xl font-light text-green-deep/10 mb-6 select-none" style={{ fontFamily: "var(--font-playfair)" }}>{v.num}</p>
                  <p className="font-semibold text-text-dark mb-3">{v.title}</p>
                  <p className="text-sm leading-6 text-text-mid/65">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 8. LOCALES ── */}
        <section className="bg-cream py-28 px-6">
          <div className="mx-auto max-w-6xl">
            <motion.div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div>
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-green-mid" />
                  <p className="text-xs uppercase tracking-[0.3em] text-green-mid">Te esperamos</p>
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-4xl font-light text-text-dark md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
                  Nuestros locales
                </motion.h2>
              </div>
              <motion.div variants={fadeIn}>
                <Link href="/locales" className="group flex items-center gap-2 text-sm font-medium text-green-mid hover:text-green-deep transition-colors">
                  <span>Ver todos</span>
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              {locales.map((l) => (
                <motion.div key={l.name} variants={fadeUp}
                  whileHover={{ y: -5 }} transition={{ duration: 0.2 }}
                  className="group rounded-2xl bg-cream-light border border-green-pale p-7 hover:border-green-mid hover:shadow-lg transition-all duration-300"
                >
                  <p className="text-xs text-green-deep/20 font-light mb-5 select-none" style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", lineHeight: 1 }}>{l.num}</p>
                  <div className="h-0.5 w-8 rounded-full bg-green-deep mb-5 transition-all duration-300 group-hover:w-14" />
                  <p className="font-semibold text-text-dark mb-2">{l.name}</p>
                  <p className="text-sm leading-relaxed text-text-mid/60">{l.address}</p>
                  <p className="text-sm text-text-mid/60">{l.city}</p>
                  {l.tel && <a href={`tel:${l.tel}`} className="mt-3 block text-xs text-green-mid hover:text-green-deep transition-colors">{l.tel}</a>}
                  <p className="mt-3 text-xs italic text-text-mid/35">{l.note}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 9. NUEVAS DELICIAS ── */}
        <section className="relative bg-green-deep py-28 px-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-cream-light" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full border border-cream-light" />
          </div>
          <div className="mx-auto max-w-6xl relative z-10">
            <motion.div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div>
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-green-light/50" />
                  <p className="text-xs uppercase tracking-[0.3em] text-cream-light/40">Siempre algo nuevo</p>
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-4xl font-light text-cream-light md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
                  Nuevas delicias
                </motion.h2>
              </div>
              <motion.div variants={fadeIn}>
                <Link href="/nuevas-delicias" className="text-sm font-medium text-cream-light/50 hover:text-cream-light underline underline-offset-4 transition-colors">
                  Ver todas →
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              {novedades.map((n) => (
                <motion.div key={n.name} variants={fadeUp} whileHover={{ y: -6 }} transition={{ duration: 0.25 }}
                  className="group cursor-pointer overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image src={n.img} alt={n.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-deep/80 via-green-deep/20 to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full bg-cream-light/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-green-deep">
                      {n.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="font-semibold text-cream-light mb-2">{n.name}</p>
                    <p className="text-sm leading-6 text-cream-light/50">{n.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 10. DELIVERY ── */}
        <section className="relative overflow-hidden bg-cream-light py-24 px-6 border-t border-green-pale">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-green-mid" />
                <p className="text-xs uppercase tracking-[0.3em] text-green-mid">Pedí desde casa</p>
                <div className="h-px w-8 bg-green-mid" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl font-light text-text-dark" style={{ fontFamily: "var(--font-playfair)" }}>
                Delivery disponible
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-sm text-text-mid/50">
                Por teléfono, WhatsApp o a través de las apps de delivery.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a href="tel:+595217294444"
                  className="flex items-center gap-2.5 rounded-full bg-green-deep px-7 py-3.5 text-sm font-semibold text-cream-light shadow-lg shadow-green-deep/20 hover:bg-green-mid transition-colors hover:-translate-y-0.5 duration-200"
                >
                  📞 (021) 729-4444
                </a>
                <a href="https://wa.me/595974600129" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-full bg-cream border border-green-pale px-7 py-3.5 text-sm font-medium text-text-dark hover:border-green-mid hover:-translate-y-0.5 transition-all duration-200"
                >
                  💬 WhatsApp
                </a>
                <span className="flex items-center gap-2.5 rounded-full bg-cream border border-green-pale px-7 py-3.5 text-sm font-medium text-text-dark">
                  🛵 Monchi · PedidosYa
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
