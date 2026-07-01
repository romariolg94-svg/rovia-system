"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-cyan-400/10 bg-[#030712]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Image src="/logo.png" alt="Rovia System" width={165} height={55} priority />

        <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
          <a href="#servicii" className="hover:text-cyan-300">Servicii</a>
          <a href="#software" className="hover:text-cyan-300">Software</a>
          <a href="#proces" className="hover:text-cyan-300">Proces</a>
          <a href="#portofoliu" className="hover:text-cyan-300">Portofoliu</a>
          <a href="#contact" className="hover:text-cyan-300">Contact</a>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
        >
          Solicită ofertă
        </a>
      </div>
    </motion.header>
  );
}