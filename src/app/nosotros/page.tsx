"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const valores = [
  { num: "01", title: "Cuidado", desc: "Cuidamos cada detalle para asegurar una experiencia única y placentera." },
  { num: "02", title: "Calidad", desc: "Utilizamos únicamente materia prima de la mejor calidad, proveniente de proveedores especializados." },
  { num: "03", title: "Equipo", desc: "Nos esforzamos por mantener un ambiente de trabajo ameno y motivador para nuestro staff." },
  { num: "04", title: "Innovación", desc: "Buscamos innovarnos permanentemente, manteniendo nuestras tradiciones mientras evolucionamos." },
];

const hitos = [
  { year: "1989", text: 'Apertura del primer local en San Martín esq. Andrade, Asunción. Nace el slogan "fantasia nel dessert".' },
  { year: "1990s", text: "Inauguración de un local sobre la calle Palma, marcando presencia en el centro de Asunción. Luego traslado a la calle Alberdi." },
  { year: "2000s", text: "Incorporación de platos salados al menú: sándwiches, milanesas y picadas. La marca evoluciona." },
  { year: "2010s", text: "Expansión al interior del país: Pedro Juan Caballero y Salto del Guairá." },
  { year: "Hoy", text: "4 locales en Paraguay, 54 sabores de gelato, opciones veganas y diet, y barra de tragos." },
];

export default function Nosotros() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <section className="relative flex h-[70vh] items-end overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1559181567-c3190ca9d222?auto=format&fit=crop&w=1800&q=85"
            alt="Gelato artesanal"
            fill priority className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-deep/95 via-green-deep/40 to-transparent" />
          <div className="relative z-10 px-8 pb-16 md:px-16">
            <p className="text-xs uppercase tracking-[0.4em] text-cream-light/50">desde 1989</p>
            <h1 className="mt-2 text-5xl font-light text-cream-light md:text-7xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Nosotros
            </h1>
            <p className="mt-3 text-base italic text-cream-light/50" style={{ fontFamily: "var(--font-playfair)" }}>
              fantasia nel dessert
            </p>
          </div>
        </section>

        {/* Historia intro */}
        <section className="bg-cream-light px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-green-mid">Historia</motion.p>
              <motion.h2 variants={fadeUp} className="mt-3 text-4xl font-light text-text-dark" style={{ fontFamily: "var(--font-playfair)" }}>
                Más de 35 años<br />sorprendiendo a Paraguay
              </motion.h2>
              <motion.div variants={fadeUp} className="mt-10 space-y-6 text-base leading-8 text-text-mid">
                <p>
                  <span className="font-semibold text-green-deep">quattro d</span> desembarcó en Paraguay en la primavera de 1989, con la apertura de nuestro tradicional local en la esquina de San Martín y Andrade, el 27 de octubre de ese año.
                </p>
                <p>
                  En nuestros primeros pasos empezamos ofreciendo gelato y postres al mercado paraguayo, dando vida a nuestro slogan <em className="italic text-green-mid" style={{ fontFamily: "var(--font-playfair)" }}>"fantasia nel dessert"</em>.
                </p>
                <p>
                  A lo largo de los años, enfrentamos varios desafíos, logrando sobrellevarlos gracias a la fidelidad de nuestros clientes y a la capacidad de nuestra marca de adaptarse para evolucionar y ofrecer los mejores y más variados productos.
                </p>
                <p>
                  Fue el deseo de sorprender y satisfacer lo que nos llevó a incorporar platos salados en nuestro menú original de helados, postres y cafés, prestando la misma atención a la materia prima utilizada.
                </p>
                <p>
                  La marca se encuentra en permanente evolución gracias a la comunicación que mantenemos con nuestros clientes. Hoy contamos con locales en Asunción y nos enorgullecemos de estar presentes en Pedro Juan Caballero y Salto del Guairá.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-cream py-24 px-6">
          <div className="mx-auto max-w-4xl">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-green-mid">Cronología</motion.p>
              <motion.h2 variants={fadeUp} className="mt-3 mb-14 text-4xl font-light text-text-dark" style={{ fontFamily: "var(--font-playfair)" }}>
                Nuestra trayectoria
              </motion.h2>
            </motion.div>
            <div className="relative border-l-2 border-green-pale pl-10 space-y-12">
              {hitos.map((h, i) => (
                <motion.div key={h.year}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-green-deep bg-cream" />
                  <p className="text-xs uppercase tracking-widest text-green-mid font-medium">{h.year}</p>
                  <p className="mt-2 text-base leading-7 text-text-mid">{h.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Misión & Visión */}
        <section className="bg-green-deep py-24 px-6">
          <div className="mx-auto max-w-6xl grid grid-cols-1 gap-12 md:grid-cols-2">
            {[
              { label: "Misión", text: "Ofrecer productos elaborados con materia prima de primerísima calidad al mercado paraguayo, por medio de un excelente servicio proveído por un equipo de personas comprometidas con la marca, cerrando un círculo de servicio en constante movimiento para satisfacer a sus clientes." },
              { label: "Visión", text: 'Convertirnos en un sinónimo de calidad y un principal destino gastronómico en el país, donde se viva una experiencia de la "A" a la "Z", disfrutando de los mejores productos y recibiendo la mejor atención de un staff altamente capacitado y comprometido.' },
            ].map((item, i) => (
              <motion.div key={item.label} className="border-t border-cream-light/20 pt-10"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.15 }}
              >
                <p className="text-xs uppercase tracking-[0.35em] text-cream-light/40">{item.label}</p>
                <p className="mt-5 text-xl font-light leading-relaxed text-cream-light" style={{ fontFamily: "var(--font-playfair)" }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Valores */}
        <section className="bg-cream-light py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <motion.div className="mb-14" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-green-mid">Valores</motion.p>
              <motion.h2 variants={fadeUp} className="mt-3 text-4xl font-light text-text-dark" style={{ fontFamily: "var(--font-playfair)" }}>Lo que nos define</motion.h2>
            </motion.div>
            <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              {valores.map((v) => (
                <motion.div key={v.title} variants={fadeUp}
                  className="rounded-2xl bg-cream border border-green-pale p-8 hover:border-green-light hover:shadow-sm transition-all"
                >
                  <p className="text-3xl font-light text-green-deep/20" style={{ fontFamily: "var(--font-playfair)" }}>{v.num}</p>
                  <p className="mt-4 text-lg font-medium text-text-dark">{v.title}</p>
                  <p className="mt-2 text-sm leading-6 text-text-mid/70">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Imagen cierre */}
        <section className="relative h-72 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1580915411954-282cb537dbe3?auto=format&fit=crop&w=1800&q=80"
            alt="Gelato quattro d"
            fill className="object-cover"
          />
          <div className="absolute inset-0 bg-green-deep/70 flex items-center justify-center">
            <p className="text-3xl italic text-cream-light/90 text-center px-6" style={{ fontFamily: "var(--font-playfair)" }}>
              "Siempre hay una buena razón para saborear un quattro d."
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
