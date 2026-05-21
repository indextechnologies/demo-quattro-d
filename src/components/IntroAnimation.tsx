"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function IceCreamSVG() {
  return (
    <svg
      width="80"
      height="120"
      viewBox="0 0 80 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cone */}
      <motion.path
        d="M25 65 L40 110 L55 65 Z"
        stroke="#F5F0E8"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
      />
      {/* Cone lines */}
      <motion.line
        x1="32" y1="75" x2="40" y2="108"
        stroke="#F5F0E8"
        strokeWidth="1"
        strokeOpacity="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      />
      <motion.line
        x1="48" y1="75" x2="40" y2="108"
        stroke="#F5F0E8"
        strokeWidth="1"
        strokeOpacity="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      />
      {/* Bottom scoop */}
      <motion.ellipse
        cx="40" cy="55" rx="15" ry="14"
        stroke="#F5F0E8"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6, ease: "easeInOut" }}
      />
      {/* Middle scoop */}
      <motion.ellipse
        cx="40" cy="38" rx="13" ry="12"
        stroke="#F5F0E8"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.9, ease: "easeInOut" }}
      />
      {/* Top scoop */}
      <motion.ellipse
        cx="40" cy="23" rx="11" ry="10"
        stroke="#F5F0E8"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.2, ease: "easeInOut" }}
      />
      {/* Tiny top dot */}
      <motion.circle
        cx="40" cy="10" r="3"
        fill="#F5F0E8"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.7 }}
      />
    </svg>
  );
}

export default function IntroAnimation() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 3200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-green-deep"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Ice cream icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <IceCreamSVG />
          </motion.div>

          {/* Logo */}
          <motion.h1
            className="mt-6 text-5xl tracking-wider text-cream-light"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 300, letterSpacing: "0.12em" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4, ease: "easeOut" }}
          >
            quattro d
          </motion.h1>

          {/* Since 1989 */}
          <motion.p
            className="mt-2 text-sm tracking-[0.3em] text-cream-light/60 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.9 }}
          >
            desde 1989
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="mt-1 text-base text-cream-light/40 italic"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            fantasia nel dessert
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
