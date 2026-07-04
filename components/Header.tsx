"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#020916]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[92px] max-w-[1500px] items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-3">
          <Image
            src="/logo1.png"
            alt="Rovia System"
            width={270}
            height={80}
            priority
            className="hidden sm:block"
          />
          <div className="text-xl font-black sm:hidden">
            <span className="text-[#008cff]">ROVIA</span> SYSTEM
          </div>
        </div>

        <nav className="hidden items-center gap-9 text-[14px] font-semibold uppercase text-white lg:flex">
          <a className="text-[#008cff]" href="#">Acasă</a>
          <a href="#solutii">Soluții</a>
          <a href="#despre">Despre noi</a>
          <a href="#software">Software</a>
          <a href="#servicii">Servicii</a>
          <a href="#portofoliu">Portofoliu</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="#contact"
          className="rounded-lg bg-[#008cff] px-5 py-3 text-[13px] font-bold uppercase text-white shadow-lg shadow-blue-500/30 hover:bg-[#00a6ff] md:px-7 md:py-4 md:text-[15px]"
        >
          Contactează-ne
        </a>
      </div>
    </header>
  );
}