"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contacto() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    mensaje: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-green-deep px-6 py-24 text-center">
          <p className="text-sm tracking-[0.2em] text-green-light font-medium" style={{ fontFamily: "var(--font-inter)" }}>
            quattro d
          </p>
          <h1
            className="mt-3 text-4xl font-light text-cream-light md:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Contacto
          </h1>
          <p className="mt-4 text-sm text-cream-light/50">
            Estamos para escucharte
          </p>
        </section>

        {/* Content */}
        <section className="bg-cream-light px-6 py-20">
          <div className="mx-auto max-w-5xl grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-green-mid">
                Escribinos
              </p>
              <h2
                className="mt-2 text-2xl font-light text-text-dark"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Envianos tu mensaje
              </h2>

              {sent ? (
                <div className="mt-8 rounded-2xl bg-green-pale border border-green-light/20 p-10 text-center">
                  <span className="text-4xl">🍦</span>
                  <p
                    className="mt-4 text-xl font-light text-text-dark"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    ¡Gracias por escribirnos!
                  </p>
                  <p className="mt-2 text-sm text-text-mid/70">
                    Nos pondremos en contacto a la brevedad.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ nombre: "", empresa: "", email: "", mensaje: "" });
                    }}
                    className="mt-6 text-sm text-green-mid underline underline-offset-4 hover:text-green-deep transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-xs font-medium uppercase tracking-widest text-text-mid/60 mb-1.5"
                    >
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-green-pale bg-cream px-4 py-3 text-sm text-text-dark outline-none transition-all focus:border-green-mid focus:ring-2 focus:ring-green-pale"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="empresa"
                      className="block text-xs font-medium uppercase tracking-widest text-text-mid/60 mb-1.5"
                    >
                      Empresa <span className="normal-case tracking-normal text-text-mid/40">(opcional)</span>
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      value={form.empresa}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-green-pale bg-cream px-4 py-3 text-sm text-text-dark outline-none transition-all focus:border-green-mid focus:ring-2 focus:ring-green-pale"
                      placeholder="Tu empresa"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium uppercase tracking-widest text-text-mid/60 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-green-pale bg-cream px-4 py-3 text-sm text-text-dark outline-none transition-all focus:border-green-mid focus:ring-2 focus:ring-green-pale"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-xs font-medium uppercase tracking-widest text-text-mid/60 mb-1.5"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={5}
                      value={form.mensaje}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-green-pale bg-cream px-4 py-3 text-sm text-text-dark outline-none transition-all focus:border-green-mid focus:ring-2 focus:ring-green-pale resize-none"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-green-deep px-6 py-3.5 text-sm font-medium tracking-wide text-cream-light transition-all hover:bg-green-mid hover:shadow-lg active:scale-[0.99]"
                  >
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-green-mid">
                  Información
                </p>
                <h2
                  className="mt-2 text-2xl font-light text-text-dark"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  También podés encontrarnos
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 rounded-2xl bg-cream border border-green-pale p-6">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-text-mid/50 mb-1">Dirección</p>
                    <p className="text-sm font-medium text-text-dark">San Martín esq. Andrade</p>
                    <p className="text-sm text-text-mid/70">Asunción, Paraguay</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-cream border border-green-pale p-6">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-text-mid/50 mb-1">Teléfono</p>
                    <a
                      href="tel:+595217294444"
                      className="text-sm font-medium text-text-dark hover:text-green-deep transition-colors"
                    >
                      (021) 729-4444
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-cream border border-green-pale p-6">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-text-mid/50 mb-1">Email</p>
                    <a
                      href="mailto:contacto@quattrod.com.py"
                      className="text-sm font-medium text-text-dark hover:text-green-deep transition-colors break-all"
                    >
                      contacto@quattrod.com.py
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-cream border border-green-pale p-6">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-text-mid/50 mb-1">Instagram</p>
                    <a
                      href="https://www.instagram.com/quattrodpy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-text-dark hover:text-green-deep transition-colors"
                    >
                      @quattrodpy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
