"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Shield,
  Users,
  Settings,
  BarChart3,
  Lock,
  User,
  Activity,
  Cpu,
  Database,
  MonitorSmartphone,
  Camera,
  Workflow,
} from "lucide-react";

const features = [
  "ERP",
  "Pontaj",
  "Digital Signage",
  "CCTV",
  "Workflow",
  "Automatizări",
];

const tech = [
  "Next.js",
  "React",
  "Supabase",
  "SQL Server",
  ".NET",
  "Docker",
  "Hikvision",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020b18] pt-[92px] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,#008cff55,transparent_32%),radial-gradient(circle_at_15%_25%,#0057ff30,transparent_28%),linear-gradient(90deg,#020916_0%,#03142c_50%,#020916_100%)]" />
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#00a6ff22_1px,transparent_1px),linear-gradient(to_bottom,#00a6ff1c_1px,transparent_1px)] bg-[size:78px_78px]" />
      <div className="absolute left-[-160px] top-[160px] h-[420px] w-[420px] rounded-full bg-[#008cff25] blur-[100px]" />
      <div className="absolute bottom-[-140px] right-[10%] h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[110px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-92px)] max-w-[1500px] grid-cols-1 items-center gap-14 px-5 py-16 md:px-10 lg:grid-cols-[1fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 max-w-[720px]"
        >
          <div className="mb-7 inline-flex items-center gap-4 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-[13px] font-bold uppercase tracking-[0.18em] text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_#22d3ee]" />
            Rovia System
          </div>

          <h1 className="text-[44px] font-black leading-[1.03] tracking-[-0.05em] md:text-[78px]">
            Transformăm procesele în{" "}
            <span className="text-[#008cff]">software inteligent.</span>
          </h1>

          <p className="mt-7 max-w-[650px] text-[17px] leading-8 text-slate-200 md:text-[20px]">
            Dezvoltăm aplicații software personalizate, ERP, pontaj, Digital
            Signage, CCTV, infrastructură IT și automatizări pentru companii
            care vor control, viteză și eficiență.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {features.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#008cff] px-8 py-4 font-black uppercase text-white shadow-[0_15px_45px_rgba(0,140,255,0.35)] hover:bg-[#00a6ff]"
            >
              Solicită demo <ArrowRight size={20} />
            </a>

            <a
              href="#software"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 px-8 py-4 font-black uppercase text-white hover:bg-white/10"
            >
              <Mail size={20} /> Vezi produsele
            </a>
          </div>

          <div className="mt-12 grid max-w-[620px] grid-cols-3 gap-4">
            <MiniStat value="6+" label="Produse Rovia" />
            <MiniStat value="24/7" label="Suport tehnic" />
            <MiniStat value="300+" label="Camere IP" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative hidden min-h-[620px] lg:block"
        >
          <DashboardVisual />
        </motion.div>
      </div>

      <div className="relative border-t border-white/10 bg-[#020916]/60 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-center gap-8 px-5 text-sm font-bold uppercase tracking-widest text-slate-400 md:px-10">
          {tech.map((item) => (
            <span key={item} className="hover:text-cyan-300">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardVisual() {
  return (
    <div className="absolute inset-0">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="absolute right-[70px] top-[15px] h-[520px] w-[520px] rounded-full border border-cyan-400/30 shadow-[0_0_100px_#008cff77]"
      >
        <div className="absolute inset-10 rounded-full border border-cyan-300/25" />
        <div className="absolute inset-24 rounded-full border border-cyan-300/20" />
        <div className="absolute inset-40 rounded-full border border-cyan-300/15" />
      </motion.div>

      <div className="absolute right-[80px] top-[95px] w-[620px] rounded-[32px] border border-cyan-400/20 bg-white/[0.08] p-5 shadow-[0_30px_90px_rgba(0,140,255,0.28)] backdrop-blur-2xl">
        <div className="rounded-[24px] border border-white/10 bg-[#06142a] p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Rovia Control Center</p>
              <h3 className="text-2xl font-black">Business Dashboard</h3>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-bold text-emerald-300">
              LIVE
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <DashCard icon={<Activity />} title="Pontaj" value="98%" />
            <DashCard icon={<Database />} title="ERP" value="152" />
            <DashCard icon={<Camera />} title="CCTV" value="300+" />
            <DashCard icon={<Workflow />} title="Workflow" value="86%" />
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
            <div className="mb-4 flex items-center gap-3">
              <Cpu className="text-cyan-300" />
              <div>
                <p className="font-bold">Automatizare procese</p>
                <p className="text-sm text-slate-400">
                  notificări, rapoarte, integrări, dashboard-uri
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Bar width="w-[92%]" />
              <Bar width="w-[78%]" />
              <Bar width="w-[86%]" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[55px] right-[40px] h-[320px] w-[165px] rounded-[32px] border border-cyan-400/25 bg-[#071427] p-3 shadow-[0_25px_75px_rgba(0,140,255,0.35)]">
        <div className="h-full rounded-[24px] bg-[radial-gradient(circle_at_top,#008cff66,transparent_45%),#020916] p-4">
          <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-white/25" />
          <MonitorSmartphone className="mb-5 text-cyan-300" />
          <p className="text-sm text-slate-400">Rovia Time</p>
          <p className="text-3xl font-black text-white">08:42</p>
          <div className="mt-5 space-y-3">
            <div className="h-3 rounded-full bg-cyan-300/80" />
            <div className="h-3 w-2/3 rounded-full bg-white/20" />
            <div className="h-3 w-4/5 rounded-full bg-white/20" />
          </div>
        </div>
      </div>

      <FloatingIcon className="right-[610px] top-[95px]" icon={<Lock />} />
      <FloatingIcon className="right-[680px] top-[310px]" icon={<User />} />
      <FloatingIcon className="right-[520px] bottom-[115px]" icon={<Settings />} />
      <FloatingIcon className="right-[250px] top-[35px]" icon={<Shield />} />
    </div>
  );
}

function DashCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
      <div className="mb-4 text-cyan-300">{icon}</div>
      <p className="text-sm text-slate-400">{title}</p>
      <p className="text-2xl font-black">{value}</p>
    </div>
  );
}

function FloatingIcon({
  icon,
  className,
}: {
  icon: React.ReactNode;
  className: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className={`absolute flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/70 bg-[#06214a]/80 text-white shadow-[0_0_30px_#00a6ff88] ${className}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30">
        {icon}
      </div>
    </motion.div>
  );
}

function Bar({ width }: { width: string }) {
  return (
    <div className="h-3 rounded-full bg-white/10">
      <div className={`h-3 rounded-full bg-cyan-400 ${width}`} />
    </div>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
      <p className="text-2xl font-black text-cyan-300">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </div>
  );
}