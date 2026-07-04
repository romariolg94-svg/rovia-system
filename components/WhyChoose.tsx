import {
  Rocket,
  ShieldCheck,
  Zap,
  Handshake,
  CheckCircle2,
} from "lucide-react";

const cards = [
  {
    icon: Rocket,
    title: "Software personalizat",
    text: "Construim aplicații exact după procesele companiei tale, nu invers.",
    points: ["ERP", "Pontaj", "Workflow", "Dashboard"],
  },
  {
    icon: Zap,
    title: "Implementare rapidă",
    text: "Analizăm, dezvoltăm și implementăm soluții funcționale, fără birocrație inutilă.",
    points: ["Analiză", "Dezvoltare", "Training", "Suport"],
  },
  {
    icon: ShieldCheck,
    title: "Securitate și stabilitate",
    text: "Folosim tehnologii moderne, backup, autentificare și infrastructură scalabilă.",
    points: ["Backup", "Cloud", "Servere", "Monitorizare"],
  },
  {
    icon: Handshake,
    title: "Partener pe termen lung",
    text: "Nu livrăm doar aplicația. O dezvoltăm, optimizăm și extindem împreună cu tine.",
    points: ["Suport", "Update-uri", "Consultanță", "Mentenanță"],
  },
];

const stats = [
  ["100%", "Soluții personalizate"],
  ["300+", "Camere IP administrate"],
  ["24/7", "Suport tehnic"],
  ["6+", "Produse software"],
];

export default function WhyChoose() {
  return (
    <section
      id="despre"
      className="relative overflow-hidden bg-[#020b18] py-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#008cff30,transparent_28%),radial-gradient(circle_at_right,#008cff20,transparent_32%)]" />
      <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,#00a6ff22_1px,transparent_1px),linear-gradient(to_bottom,#00a6ff18_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-black uppercase tracking-[0.3em] text-cyan-300">
            De ce Rovia?
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Nu implementăm doar software. Construim soluții care elimină timpul pierdut.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Rovia System combină dezvoltarea software, infrastructura IT,
            sistemele smart și experiența practică din operațional.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group rounded-[28px] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/[0.07] hover:shadow-[0_25px_80px_rgba(0,140,255,0.2)]"
              >
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#008cff]/15 text-cyan-300 ring-1 ring-cyan-300/20">
                  <Icon size={34} />
                </div>

                <h3 className="text-2xl font-black">{card.title}</h3>

                <p className="mt-4 min-h-[120px] leading-7 text-slate-300">
                  {card.text}
                </p>

                <div className="mt-6 space-y-3">
                  {card.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={17} className="text-cyan-300" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-5 rounded-[32px] border border-cyan-400/15 bg-[#06142a]/80 p-5 shadow-[0_30px_90px_rgba(0,140,255,0.12)] md:grid-cols-4 md:p-8">
          {stats.map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="text-4xl font-black text-cyan-300 md:text-5xl">
                {value}
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-300 md:text-base">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}