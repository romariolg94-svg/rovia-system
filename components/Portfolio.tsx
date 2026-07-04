import { ChevronRight } from "lucide-react";

const portfolioItems = ["Pontaj & HR", "Mentenanță hotel", "Digital Signage", "CCTV & IT", "ERP & Gestiune", "Workflow intern"];

export default function Portfolio() {
  return (
    <section id="portofoliu" className="bg-[#020b18] py-24">
      <SectionTitle
        small="Portofoliu"
        title="Tipuri de proiecte pe care le putem livra"
        text="Soluții pentru hoteluri, restaurante, fitness, producție, birouri și companii cu fluxuri complexe."
      />

      <div className="mx-auto mt-14 grid max-w-[1300px] grid-cols-1 gap-6 px-5 md:grid-cols-3 md:px-10">
        {portfolioItems.map((item) => (
          <div key={item} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 hover:border-cyan-400/40">
            <div className="mb-8 h-40 rounded-2xl bg-[radial-gradient(circle_at_center,#008cff55,transparent_45%),linear-gradient(135deg,#071427,#0b2b57)]" />
            <h3 className="text-2xl font-black">{item}</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Soluție personalizată, cu dashboard, rapoarte, notificări și implementare completă.
            </p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 font-bold text-cyan-300">
              Discută proiectul <ChevronRight size={18} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ small, title, text }: { small: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl px-5 text-center">
      <p className="font-bold uppercase tracking-[0.3em] text-cyan-300">{small}</p>
      <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-300">{text}</p>
    </div>
  );
}