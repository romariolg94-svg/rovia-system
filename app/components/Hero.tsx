"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Cpu, Camera, Clock, BarChart3 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#00c8ff33,transparent_35%),radial-gradient(circle_at_bottom_left,#2563eb33,transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Software • Automatizări • Sisteme inteligente
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Construim software pentru companii care vor mai mult.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Rovia System dezvoltă aplicații software, sisteme de pontaj, ERP,
            digital signage, soluții IT, supraveghere video și automatizări
            personalizate pentru procese reale de business.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-4 font-bold text-slate-950 hover:bg-cyan-300"
            >
              Solicită ofertă <ArrowRight size={18} />
            </a>

            <a
              href="#software"
              className="rounded-full border border-white/15 px-7 py-4 font-bold text-white hover:bg-white/10"
            >
              Vezi soluțiile
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
            {["ERP", "Pontaj", "Workflow", "Digital Signage", "CCTV", "Networking"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute -inset-10 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative rounded-[2rem] border border-cyan-400/20 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#061322] p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Rovia Dashboard</p>
                  <h3 className="text-2xl font-bold">Control Center</h3>
                </div>
                <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-300">
                  LIVE
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card icon={<Clock />} title="Pontaj" value="98%" />
                <Card icon={<BarChart3 />} title="ERP" value="152" />
                <Card icon={<Camera />} title="CCTV" value="300+" />
                <Card icon={<ShieldCheck />} title="Securitate" value="24/7" />
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Cpu className="text-cyan-300" />
                  <div>
                    <p className="font-semibold">Automatizare procese</p>
                    <p className="text-sm text-slate-400">Workflow, notificări, rapoarte, integrări</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Bar width="w-[92%]" />
                  <Bar width="w-[75%]" />
                  <Bar width="w-[86%]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Card({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mb-4 text-cyan-300">{icon}</div>
      <p className="text-sm text-slate-400">{title}</p>
      <p className="text-2xl font-black">{value}</p>
    </div>
  );
}

function Bar({ width }: { width: string }) {
  return (
    <div className="h-3 rounded-full bg-white/10">
      <div className={`h-3 rounded-full bg-cyan-400 ${width}`} />
    </div>
  );
}