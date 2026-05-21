import Link from "next/link";

const links = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/menu", label: "Menú" },
  { href: "/nuevas-delicias", label: "Nuevas Delicias" },
  { href: "/locales", label: "Locales" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-green-deep text-cream-light/80">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-2xl font-light tracking-[0.12em] text-cream-light" style={{ fontFamily: "var(--font-inter)" }}>
              quattro d
            </p>
            <p className="mt-1 text-xs tracking-[0.25em] uppercase text-cream-light/50">desde 1989</p>
            <p className="mt-3 text-sm italic text-cream-light/60" style={{ fontFamily: "var(--font-playfair)" }}>
              fantasia nel dessert
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cream-light/40">
              Navegación
            </p>
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors hover:text-cream-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cream-light/40">
              Contacto
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>San Martín esq. Andrade, Asunción</li>
              <li>
                <a href="tel:+59521729444" className="hover:text-cream-light transition-colors">
                  (021) 729-4444
                </a>
              </li>
              <li>
                <a href="mailto:contacto@quattrod.com.py" className="hover:text-cream-light transition-colors">
                  contacto@quattrod.com.py
                </a>
              </li>
              <li className="pt-1 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/quattrodpy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream-light transition-colors text-xs uppercase tracking-widest"
                >
                  @quattrodpy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream-light/10 pt-6 text-center text-xs text-cream-light/30">
          © {new Date().getFullYear()} quattro d. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
