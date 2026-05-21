"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/menu", label: "Menú" },
  { href: "/nuevas-delicias", label: "Nuevas Delicias" },
  { href: "/locales", label: "Locales" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome || open
          ? "bg-cream-light/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className={`text-xl font-light tracking-[0.12em] transition-colors ${
            scrolled || !isHome || open ? "text-green-deep" : "text-cream-light"
          }`}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          quattro d
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-green-mid ${
                  scrolled || !isHome
                    ? pathname === l.href
                      ? "text-green-deep border-b border-green-deep pb-0.5"
                      : "text-text-mid"
                    : pathname === l.href
                    ? "text-cream-light border-b border-cream-light pb-0.5"
                    : "text-cream-light/80 hover:text-cream-light"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`flex flex-col gap-1.5 md:hidden transition-colors ${
            scrolled || !isHome || open ? "text-green-deep" : "text-cream-light"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-green-pale bg-cream-light px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`block text-sm font-medium tracking-wide transition-colors ${
                    pathname === l.href ? "text-green-deep" : "text-text-mid hover:text-green-deep"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
