import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const valores = [
  {
    title: "Cuidado",
    desc: "Cuidamos cada detalle para asegurar una experiencia única y placentera.",
  },
  {
    title: "Calidad",
    desc: "Utilizamos únicamente materia prima de la mejor calidad, proveniente de proveedores especializados.",
  },
  {
    title: "Equipo",
    desc: "Nos esforzamos por mantener un ambiente de trabajo ameno y motivador para nuestro staff.",
  },
  {
    title: "Innovación",
    desc: "Buscamos innovarnos permanentemente para continuar atrayendo el interés de nuestros clientes, manteniendo nuestras tradiciones.",
  },
];

export default function Nosotros() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-green-deep px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-cream-light/40">
            desde 1989
          </p>
          <h1
            className="mt-3 text-4xl font-light text-cream-light md:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nosotros
          </h1>
          <p className="mt-4 text-base italic text-cream-light/50" style={{ fontFamily: "var(--font-playfair)" }}>
            fantasia nel dessert
          </p>
        </section>

        {/* Historia */}
        <section className="bg-cream-light px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-green-mid">
              Historia
            </p>
            <h2
              className="mt-3 text-3xl font-light text-text-dark"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Más de 35 años en Paraguay
            </h2>

            <div className="mt-10 space-y-6 text-base leading-8 text-text-mid">
              <p>
                <span className="font-semibold text-green-deep">quattro d</span>{" "}
                desembarcó en Paraguay en la primavera de 1989, con la apertura
                de nuestro tradicional local en la esquina de San Martín y
                Andrade, el 27 de octubre de ese año. Poco tiempo después,
                inauguramos un local sobre la calle Palma, marcando presencia en
                el centro de Asunción. Luego decidimos trasladar nuestro local
                del centro a la calle Alberdi.
              </p>
              <p>
                En nuestros primeros pasos empezamos ofreciendo gelato y postres
                al mercado paraguayo, dando vida a nuestro slogan{" "}
                <em className="italic text-green-mid" style={{ fontFamily: "var(--font-playfair)" }}>
                  "fantasia nel dessert"
                </em>.
              </p>
              <p>
                A lo largo de los años, enfrentamos varios desafíos, logrando
                sobrellevarlos gracias a la fidelidad de nuestros clientes y a
                la capacidad que ha demostrado tener nuestra marca de adaptarse
                para evolucionar y ofrecer los mejores y más variados productos
                y servicios.
              </p>
              <p>
                Desde nuestros inicios, hemos utilizado ingredientes únicos y
                naturales buscando siempre sorprenderlos a ustedes, nuestros
                clientes, con sabores nuevos, manteniendo la calidad que
                caracteriza a nuestra marca.
              </p>
              <p>
                Fue éste deseo de sorprender y satisfacer que nos llevó a
                incorporar platos salados en nuestro menú original de helados,
                postres y cafés, prestando la misma atención a la materia prima
                utilizada en la elaboración de nuestros platos.
              </p>
              <p>
                La marca{" "}
                <span className="font-semibold text-green-deep">quattro d</span>{" "}
                se encuentra en permanente evolución gracias a la comunicación
                que mantenemos con nuestros clientes, y la importancia que damos
                a este intercambio. Esto nos ha permitido identificar las
                preferencias de nuestros consumidores y adecuarnos a éstas para
                brindar una completa satisfacción.
              </p>
              <p>
                Hoy, contamos con locales en Asunción y nos enorgullecemos de
                estar presentes en dos de las principales ciudades del interior:
                Pedro Juan Caballero y Salto del Guairá.
              </p>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="bg-cream py-20 px-6">
          <div className="mx-auto max-w-5xl grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Misión */}
            <div className="rounded-2xl bg-green-deep p-10 text-cream-light">
              <p className="text-xs uppercase tracking-[0.3em] text-cream-light/40">
                Misión
              </p>
              <p
                className="mt-4 text-2xl font-light leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Lo que nos mueve
              </p>
              <p className="mt-6 text-sm leading-7 text-cream-light/75">
                Ofrecer productos elaborados con materia prima de primerísima
                calidad al mercado paraguayo, por medio de un excelente servicio
                proveído por un equipo de personas comprometidas con la marca y
                lo que la misma representa, cerrando así un círculo de servicio
                que se encuentra en constante movimiento para satisfacer a sus
                clientes.
              </p>
            </div>

            {/* Visión */}
            <div className="rounded-2xl border-2 border-green-deep p-10 bg-cream-light">
              <p className="text-xs uppercase tracking-[0.3em] text-green-mid">
                Visión
              </p>
              <p
                className="mt-4 text-2xl font-light leading-tight text-text-dark"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                A dónde vamos
              </p>
              <p className="mt-6 text-sm leading-7 text-text-mid">
                Convertirnos en un sinónimo de calidad y un principal destino
                gastronómico en el país, donde se viva una experiencia de la
                "A" a la "Z", disfrutando de los mejores productos y recibiendo
                la mejor atención de un staff altamente capacitado y
                comprometido con la marca.
              </p>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="bg-cream-light py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-green-mid">
                Valores
              </p>
              <h2
                className="mt-2 text-3xl font-light text-text-dark"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Lo que nos define
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {valores.map((v, i) => (
                <div
                  key={v.title}
                  className="rounded-2xl bg-cream p-8 border border-green-pale"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-deep text-cream-light text-lg font-light"
                    style={{ fontFamily: "var(--font-playfair)" }}>
                    {i + 1}
                  </div>
                  <p className="font-semibold text-text-dark">{v.title}</p>
                  <p className="mt-2 text-sm leading-6 text-text-mid/70">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
