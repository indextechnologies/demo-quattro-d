"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tabs = [
  "Copas Heladas y Helados",
  "Postres",
  "Salados",
  "Cafetería",
  "Jugos y Batidos",
];

const menuData: Record<string, { name: string; desc: string }[]> = {
  "Copas Heladas y Helados": [
    { name: "Copa Clásica", desc: "2 bochas de tu sabor favorito, crema y toppings a elección." },
    { name: "Copa Quattro D", desc: "Nuestra copa insignia con 4 sabores especiales de la casa." },
    { name: "Copa San Remo", desc: "Oferta estacional con sabores seleccionados de temporada." },
    { name: "Copa Vegana", desc: "Gelato artesanal 100% vegetal, sin lácteos ni ingredientes animales." },
    { name: "Copa Diet", desc: "Opciones bajas en azúcar para quienes cuidan su alimentación." },
    { name: "Helado en Cucurucho", desc: "1 o 2 bochas a elección en cucurucho crocante." },
    { name: "54 Sabores", desc: "Elegí entre nuestra vitrina de 54 sabores de gelato italiano artesanal." },
  ],
  "Postres": [
    { name: "Tiramisú", desc: "Clásico italiano con queso mascarpone, café y cacao." },
    { name: "Cheesecake", desc: "Base de galletita con crema de queso y frutos rojos." },
    { name: "Milkshake", desc: "Batido cremoso con helado y leche, múltiples sabores." },
    { name: "Sundae", desc: "Helado con salsa caliente, nueces y crema batida." },
    { name: "Waffles con helado", desc: "Waffles crujientes acompañados con bocha de gelato y toppings." },
    { name: "Crepes dulces", desc: "Rellenos con frutas, dulce de leche o Nutella." },
  ],
  "Salados": [
    { name: "Sándwich de Lomito", desc: "Tierno lomito a la plancha con lechuga, tomate y mostaza en pan artesanal." },
    { name: "Milanesa Napolitana", desc: "Milanesa de ternera con salsa napolitana, jamón y queso gratinado." },
    { name: "Picada Quattro D", desc: "Tabla de fiambres, quesos, aceitunas y tostadas." },
    { name: "Tostado Especial", desc: "Pan tostado con relleno a elección: jamón, queso o mixto." },
    { name: "Ensalada Caesar", desc: "Lechuga romana, pollo grillado, crutones y aderezo Caesar." },
    { name: "Bocaditos", desc: "Selección de bocaditos salados ideales para compartir." },
  ],
  "Cafetería": [
    { name: "Espresso", desc: "Blend italiano propio, intenso y equilibrado." },
    { name: "Cappuccino", desc: "Espresso con leche vaporizada y espuma cremosa." },
    { name: "Latte", desc: "Espresso suave con abundante leche vaporizada." },
    { name: "Cortado", desc: "Espresso cortado con un toque de leche." },
    { name: "Café con leche", desc: "Clásico café con leche caliente en taza grande." },
    { name: "Chocolate caliente", desc: "Chocolate artesanal cremoso, perfecto para el frío." },
    { name: "Té selección", desc: "Variedad de tés importados servidos en tetera." },
  ],
  "Jugos y Batidos": [
    { name: "Jugo natural naranja", desc: "Exprimido al momento, sin azúcar agregada." },
    { name: "Jugo de frutas mixtas", desc: "Combinación de frutas de estación." },
    { name: "Limonada natural", desc: "Limón exprimido con agua mineral y hierbabuena." },
    { name: "Milkshake de frutilla", desc: "Batido cremoso con frutillas frescas y helado de vainilla." },
    { name: "Milkshake de chocolate", desc: "Intenso, cremoso y perfecto como postre líquido." },
    { name: "Smoothie verde", desc: "Espinaca, banana, manzana y jengibre. Energizante y natural." },
  ],
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

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
            Menú
          </h1>
          <p className="mt-4 text-sm text-cream-light/50">
            Ingredientes naturales · Recetas artesanales · Tradición desde 1989
          </p>
        </section>

        {/* Tabs */}
        <section className="bg-cream-light sticky top-[64px] z-40 border-b border-green-pale shadow-sm">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-all ${
                    activeTab === tab
                      ? "bg-green-deep text-cream-light"
                      : "text-text-mid hover:bg-green-pale hover:text-green-deep"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Items */}
        <section className="bg-cream-light px-6 py-16">
          <div className="mx-auto max-w-6xl">
            {activeTab === "Copas Heladas y Helados" && (
              <div className="mb-8 rounded-2xl bg-green-pale border border-green-light/20 px-8 py-5 text-sm text-green-deep">
                <span className="font-semibold">54 sabores de gelato</span> en vitrina · Opciones veganas y diet disponibles
              </div>
            )}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {menuData[activeTab].map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl bg-cream p-6 border border-green-pale transition-all hover:border-green-light hover:shadow-sm"
                >
                  <div className="mb-3 h-0.5 w-8 rounded-full bg-green-deep" />
                  <p className="font-medium text-text-dark">{item.name}</p>
                  <p className="mt-2 text-sm leading-6 text-text-mid/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Note */}
        <section className="bg-cream border-t border-green-pale px-6 py-12 text-center">
          <p className="text-sm text-text-mid/60">
            El menú puede variar según disponibilidad y temporada. Consultá en tu local más cercano.
          </p>
          <a
            href="tel:+595217294444"
            className="mt-4 inline-block text-sm font-medium text-green-mid hover:text-green-deep underline underline-offset-4 transition-colors"
          >
            (021) 729-4444
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
