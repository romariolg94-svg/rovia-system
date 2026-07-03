"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Shield,
  Users,
  Settings,
  Rocket,
  Camera,
  Code2,
  MonitorSmartphone,
  Fingerprint,
  BarChart3,
  Headphones,
  Lock,
  User,
  CheckCircle2,
  Network,
  Server,
  Clock,
  Cpu,
  Wrench,
  Workflow,
  Building2,
  Wifi,
  Database,
  ChevronRight,
} from "lucide-react";

const serviceCards = [
  { icon: Fingerprint, title: "Control Acces", text: "Sisteme avansate de control acces pentru securitatea spațiilor tale." },
  { icon: Camera, title: "Sisteme de Supraveghere", text: "Soluții video performante pentru monitorizare 24/7." },
  { icon: Settings, title: "Sisteme Inteligente", text: "Automatizări și soluții smart care îți optimizează afacerea." },
  { icon: Code2, title: "Dezvoltare Software", text: "Aplicații și platforme software personalizate pentru nevoile tale." },
];

const softwareCards = [
  ["ROVIA TIME", "Pontaj inteligent", "Sistem complet de pontaj cu aplicație mobilă, rapoarte avansate și notificări în timp real.", Clock],
  ["ROVIA ERP", "ERP modular", "Gestiune completă a afacerii, de la stocuri și achiziții până la vânzări și rapoarte.", Database],
  ["ROVIA SIGN", "Digital Signage", "Afișaje digitale pentru hoteluri, restaurante, săli fitness și spații comerciale.", MonitorSmartphone],
  ["ROVIA VISION", "CCTV Management", "Platformă pentru administrarea camerelor IP și monitorizare centralizată.", Camera],
  ["ROVIA FLOW", "Workflow intern", "Automatizăm procesele interne pentru eficiență, control și productivitate.", Workflow],
  ["ROVIA HOTEL", "Mentenanță Hotel", "Aplicație pentru managementul intervențiilor tehnice în hoteluri și facilități.", Building2],
] as const;

const extraServices = [
  {
    icon: Code2,
    title: "Software la comandă",
    text: "ERP, CRM, pontaj, gestiune, aplicații web, dashboard-uri și integrări.",
  },
  {
    icon: Network,
    title: "Rețelistică",
    text: "Cablare structurată, switch-uri, VLAN, WiFi enterprise și infrastructură completă.",
  },
  {
    icon: Server,
    title: "Servere & Backup",
    text: "Implementare, mentenanță, monitorizare, backup și soluții cloud/on-premise.",
  },
  {
    icon: Shield,
    title: "Sisteme efracție",
    text: "Sisteme de securitate, senzori, centrale, control acces și integrare tehnică.",
  },
  {
    icon: Camera,
    title: "CCTV & IP Video",
    text: "Camere IP, NVR, servere video, monitorizare și mentenanță periodică.",
  },
  {
    icon: Wrench,
    title: "Mentenanță echipamente",
    text: "Suport tehnic, intervenții, optimizare și mentenanță pentru echipamente IT.",
  },
];

const processSteps = ["Analiză", "Proiectare", "Dezvoltare", "Implementare", "Training", "Suport"];
const portfolioItems = ["Pontaj & HR", "Mentenanță hotel", "Digital Signage", "CCTV & IT", "ERP & Gestiune", "Workflow intern"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020b18] text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <WhyChoose />
      <Software />
      <MoreServices />
      <Stats />
      <Process />
      <Portfolio />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#020916]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[92px] max-w-[1500px] items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-3">
          <Image src="/logo1.png" alt="Rovia System" width={270} height={80} priority className="hidden sm:block" />
          <div className="sm:hidden text-xl font-black"><span className="text-[#008cff]">ROVIA</span> SYSTEM</div>
        </div>
        <nav className="hidden items-center gap-9 text-[14px] font-semibold uppercase text-white lg:flex">
          <a className="text-[#008cff]" href="#">Acasă</a><a href="#solutii">Soluții</a><a href="#despre">Despre noi</a><a href="#servicii">Servicii</a><a href="#portofoliu">Portofoliu</a><a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="rounded-lg bg-[#008cff] px-5 py-3 md:px-7 md:py-4 text-[13px] md:text-[15px] font-bold uppercase text-white shadow-lg shadow-blue-500/30 hover:bg-[#00a6ff]">Contactează-ne</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020b18] pt-[92px] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,#008cff50,transparent_30%),linear-gradient(90deg,#020916_0%,#03142c_45%,#020916_100%)]" />
      <div className="absolute inset-0 opacity-35 bg-[linear-gradient(to_right,#00a6ff22_1px,transparent_1px),linear-gradient(to_bottom,#00a6ff1c_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute left-[-10%] top-[15%] h-[360px] w-[360px] rounded-full bg-[#008cff25] blur-[90px]" />
      <div className="relative mx-auto grid min-h-[650px] max-w-[1500px] grid-cols-1 items-center px-5 md:px-10 lg:grid-cols-[1fr_1.1fr]">
        <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10 max-w-[650px] py-16">
          <div className="mb-7 flex items-center gap-4 text-[13px] md:text-[15px] uppercase tracking-[0.16em] text-slate-300"><span className="h-[2px] w-14 bg-[#009dff]" />Smart Solutions. Real Results.</div>
          <h1 className="text-[42px] font-black leading-[1.08] tracking-[-0.04em] md:text-[72px]">Soluții inteligente <br />pentru <span className="text-[#008cff]">afacerea ta</span></h1>
          <p className="mt-7 max-w-[620px] text-[17px] leading-8 text-slate-100 md:text-[19px]">Oferim soluții integrate de control acces, supraveghere, sisteme inteligente și dezvoltare software pentru a-ți transforma ideile în rezultate reale.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#008cff] px-8 py-4 font-bold uppercase text-white hover:bg-[#00a6ff]" href="#solutii"><Users size={20} /> Vezi soluțiile</a>
            <a className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/35 px-8 py-4 font-bold uppercase text-white hover:bg-white/10" href="#contact"><Mail size={20} /> Contactează-ne</a>
          </div>
        </motion.div>
        <div className="relative hidden h-full lg:block"><CityVisual /></div>
      </div>
      <div className="relative mx-auto flex max-w-[1500px] flex-wrap justify-between gap-8 px-5 pb-8 text-[16px] text-slate-200 md:px-10">
        <Feature icon={<Shield />} text="Soluții personalizate" /><Feature icon={<Users />} text="Suport dedicat" /><Feature icon={<Settings />} text="Tehnologie de ultimă generație" /><Feature icon={<BarChart3 />} text="Performanță și fiabilitate" />
      </div>
    </section>
  );
}

function CityVisual() {
  return (
    <div className="absolute inset-0">
      <div className="absolute bottom-0 right-0 h-[520px] w-[720px] opacity-80">
        <div className="absolute bottom-0 left-8 h-[360px] w-[90px] bg-blue-950/60 shadow-[0_0_40px_#008cff55]" />
        <div className="absolute bottom-0 left-32 h-[460px] w-[120px] bg-blue-950/70 shadow-[0_0_50px_#008cff66]" />
        <div className="absolute bottom-0 left-72 h-[400px] w-[110px] bg-blue-950/60 shadow-[0_0_50px_#008cff66]" />
        <div className="absolute bottom-0 left-[430px] h-[500px] w-[130px] bg-blue-950/70 shadow-[0_0_60px_#008cff66]" />
        {Array.from({ length: 70 }).map((_, i) => <span key={i} className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/70" style={{ left: `${8 + (i * 37) % 560}px`, top: `${40 + (i * 53) % 380}px` }} />)}
      </div>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute right-3 top-[80px] h-[420px] w-[420px] rounded-full border border-cyan-400/40 shadow-[0_0_80px_#008cff99]"><div className="absolute inset-8 rounded-full border border-cyan-400/40" /><div className="absolute inset-16 rounded-full border border-cyan-300/30" /><div className="absolute inset-24 rounded-full border border-cyan-300/20" /></motion.div>
      <div className="absolute right-5 top-[180px] h-[155px] w-[335px] rotate-[-8deg] rounded-[40px] bg-gradient-to-br from-slate-200 via-slate-500 to-slate-950 shadow-2xl"><div className="absolute left-[-18px] top-[34px] h-[92px] w-[115px] rounded-full bg-[#020916] shadow-inner" /><div className="absolute left-[10px] top-[56px] h-[48px] w-[48px] rounded-full bg-black ring-8 ring-slate-800" /></div>
      <div className="absolute right-2 top-[330px] h-[45px] w-[210px] rounded bg-slate-800" /><div className="absolute right-[-15px] top-[360px] h-[130px] w-[35px] bg-slate-900" />
      <FloatingIcon className="right-[420px] top-[95px]" icon={<Lock />} /><FloatingIcon className="right-[500px] top-[260px]" icon={<User />} /><FloatingIcon className="right-[365px] top-[390px]" icon={<BarChart3 />} /><FloatingIcon className="right-[210px] top-[430px]" icon={<Settings />} />
    </div>
  );
}

function FloatingIcon({ icon, className }: { icon: React.ReactNode; className: string }) { return <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 3, repeat: Infinity }} className={`absolute flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/70 bg-[#06214a]/80 text-white shadow-[0_0_30px_#00a6ff88] ${className}`}><div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30">{icon}</div></motion.div>; }
function Feature({ icon, text }: { icon: React.ReactNode; text: string }) { return <div className="flex items-center gap-4"><span className="text-[#009dff]">{icon}</span><span>{text}</span></div>; }

function Services() {
  return <section id="solutii" className="bg-[#f7faff] py-10 pb-14 text-[#071427]"><Title title="Soluțiile noastre" dark /><div className="mx-auto mt-8 grid max-w-[1400px] grid-cols-1 gap-7 px-5 md:grid-cols-2 md:px-10 lg:grid-cols-4">{serviceCards.map((card) => <div key={card.title} className="flex min-h-[155px] items-center gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-[0_10px_25px_rgba(15,23,42,0.08)]"><div className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4b91ff] to-[#0047b8] text-white shadow-xl"><card.icon size={48} /></div><div><h3 className="font-black text-[#071427]">{card.title}</h3><p className="mt-2 text-sm leading-5 text-slate-700">{card.text}</p><a className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#008cff]" href="#contact">Află mai multe <ArrowRight size={15} /></a></div></div>)}</div></section>;
}

function WhyChoose() {
  const items = [[Shield, "Experiență și încredere", "O echipă cu experiență practică în proiecte software, IT și securitate."], [Users, "Soluții personalizate", "Fiecare proiect este adaptat nevoilor și fluxurilor reale ale clientului."], [Headphones, "Suport dedicat", "Suntem alături de tine înainte, în timpul și după implementare."], [Rocket, "Tehnologie avansată", "Folosim tehnologii moderne pentru rezultate stabile și scalabile."]] as const;
  return <section id="despre" className="relative overflow-hidden bg-[#020b18] py-16 text-white"><div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#008cff30,transparent_25%),radial-gradient(circle_at_right,#008cff20,transparent_30%)]" /><div className="relative"><Title title="De ce să alegi Rovia System?" /><div className="mx-auto mt-12 grid max-w-[1400px] grid-cols-1 gap-8 px-5 md:grid-cols-4 md:px-10">{items.map(([Icon, title, text], index) => <div key={title} className={`px-5 md:px-8 ${index !== 0 ? "md:border-l md:border-white/25" : ""}`}><Icon className="mb-7 text-[#168dff]" size={58} strokeWidth={1.7} /><h3 className="text-lg font-black">{title}</h3><p className="mt-4 leading-7 text-slate-200">{text}</p></div>)}</div></div></section>;
}

function Software() {
  return <section id="software" className="bg-[#f7faff] py-14 text-[#071427]"><Title title="Soluțiile software Rovia" dark /><div className="mx-auto mt-10 grid max-w-[1450px] grid-cols-1 gap-6 px-5 md:grid-cols-2 md:px-10 lg:grid-cols-3 xl:grid-cols-6">{softwareCards.map(([name, title, text, Icon]) => <div key={name} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_10px_25px_rgba(15,23,42,0.08)]"><div className="h-[140px] bg-[#061a35] p-4"><div className="flex h-full items-center justify-center rounded-lg border border-cyan-400/20 bg-[radial-gradient(circle_at_center,#008cff55,transparent_45%),linear-gradient(135deg,#071427,#0b2b57)] text-cyan-200"><Icon size={46} /></div></div><div className="p-5"><h3 className="mb-4 text-sm font-black uppercase tracking-wide text-[#006ee6]">{name}</h3><h4 className="font-bold text-[#071427]">{title}</h4><p className="mt-4 min-h-[88px] text-sm leading-6 text-slate-700">{text}</p><a className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#008cff]" href="#contact">Află mai multe <ArrowRight size={15} /></a></div></div>)}</div></section>;
}

function MoreServices() {
  return (
    <section id="servicii" className="bg-[#020b18] py-24">
      <SectionTitle
        small="Servicii extinse"
        title="Software, infrastructură și securitate într-o singură echipă"
        text="Rovia System acoperă tot traseul: analiză, dezvoltare, implementare, echipamente, mentenanță și suport."
      />

      <div className="mx-auto mt-14 grid max-w-[1400px] grid-cols-1 gap-6 px-5 md:grid-cols-2 md:px-10 lg:grid-cols-3">
        {extraServices.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
            >
              <Icon className="mb-6 text-cyan-300" size={38} />
              <h3 className="text-xl font-black">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{service.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
function Stats() { const stats = [["300+", "Camere IP gestionate"], ["24/7", "Monitorizare & suport"], ["6", "Produse Rovia"], ["100%", "Soluții personalizate"]]; return <section className="bg-[#06142a] py-16"><div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 md:grid-cols-4 md:px-10">{stats.map(([value, label]) => <div key={label} className="rounded-3xl border border-cyan-400/10 bg-white/[0.04] p-8 text-center"><p className="text-4xl font-black text-cyan-300 md:text-5xl">{value}</p><p className="mt-3 text-slate-300">{label}</p></div>)}</div></section>; }

function Process() { return <section className="bg-[#f7faff] py-24 text-[#071427]"><Title title="Procesul nostru de lucru" dark /><div className="mx-auto mt-14 grid max-w-[1200px] grid-cols-1 gap-5 px-5 md:grid-cols-3 md:px-10 lg:grid-cols-6">{processSteps.map((step, index) => <div key={step} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-[0_10px_25px_rgba(15,23,42,0.08)]"><div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#008cff] text-lg font-black text-white">{index + 1}</div><p className="font-bold">{step}</p></div>)}</div></section>; }

function Portfolio() { return <section id="portofoliu" className="bg-[#020b18] py-24"><SectionTitle small="Portofoliu" title="Tipuri de proiecte pe care le putem livra" text="Soluții pentru hoteluri, restaurante, fitness, producție, birouri și companii cu fluxuri complexe." /><div className="mx-auto mt-14 grid max-w-[1300px] grid-cols-1 gap-6 px-5 md:grid-cols-3 md:px-10">{portfolioItems.map((item) => <div key={item} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 hover:border-cyan-400/40"><div className="mb-8 h-40 rounded-2xl bg-[radial-gradient(circle_at_center,#008cff55,transparent_45%),linear-gradient(135deg,#071427,#0b2b57)]" /><h3 className="text-2xl font-black">{item}</h3><p className="mt-4 leading-7 text-slate-300">Soluție personalizată, cu dashboard, rapoarte, notificări și implementare completă.</p><a href="#contact" className="mt-6 inline-flex items-center gap-2 font-bold text-cyan-300">Discută proiectul <ChevronRight size={18} /></a></div>)}</div></section>; }

function CTA() { return <section className="relative overflow-hidden bg-[#06142a] py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#008cff35,transparent_38%)]" /><div className="relative mx-auto max-w-5xl px-5 text-center"><h2 className="text-4xl font-black md:text-6xl">Construim software. Automatizăm procese. Conectăm tehnologia.</h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">Un singur partener pentru aplicații software, sisteme inteligente, supraveghere, infrastructură IT și mentenanță.</p><a href="#contact" className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#008cff] px-9 py-5 font-black uppercase text-white hover:bg-[#00a6ff]">Începe proiectul <ArrowRight /></a></div></section>; }

function Contact() { return <section id="contact" className="bg-[#f7faff] py-24 text-[#071427]"><div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-10 px-5 md:px-10 lg:grid-cols-2"><div><p className="font-black uppercase tracking-[0.3em] text-[#008cff]">Contact</p><h2 className="mt-4 text-4xl font-black md:text-6xl">Hai să digitalizăm compania ta.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">Spune-ne ce proces vrei să îmbunătățești, iar noi venim cu soluția software și tehnică potrivită.</p></div><div className="rounded-3xl bg-[#020b18] p-8 text-white shadow-2xl"><div className="space-y-5"><ContactLine icon={<Mail />} text="contact@roviasystem.ro" /><ContactLine icon={<Phone />} text="Telefon: de completat" /><ContactLine icon={<MapPin />} text="Brașov, România" /></div><a href="mailto:contact@roviasystem.ro" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#008cff] px-7 py-4 font-bold text-white hover:bg-[#00a6ff]">Trimite mesaj <ArrowRight size={18} /></a></div></div></section>; }

function Footer() { return <footer className="border-t border-white/10 bg-[#020916] py-10"><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-6 px-5 md:flex-row md:px-10"><div><p className="text-2xl font-black"><span className="text-[#008cff]">ROVIA</span> SYSTEM</p><p className="mt-2 text-sm text-slate-500">Software • IT • Securitate • Automatizări</p></div><p className="text-sm text-slate-500">© {new Date().getFullYear()} Rovia System. Toate drepturile rezervate.</p></div></footer>; }

function Title({ title, dark = false }: { title: string; dark?: boolean }) { return <div className="text-center"><h2 className={`text-4xl font-black tracking-tight ${dark ? "text-[#071427]" : "text-white"}`}>{title}</h2><div className="mx-auto mt-3 h-[3px] w-28 bg-[#008cff]" /></div>; }
function SectionTitle({ small, title, text }: { small: string; title: string; text: string }) { return <div className="mx-auto max-w-3xl px-5 text-center"><p className="font-bold uppercase tracking-[0.3em] text-cyan-300">{small}</p><h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{title}</h2><p className="mt-5 text-lg leading-8 text-slate-300">{text}</p></div>; }
function ContactLine({ icon, text }: { icon: React.ReactNode; text: string }) { return <div className="flex items-center gap-4"><div className="text-cyan-300">{icon}</div><p>{text}</p></div>; }
