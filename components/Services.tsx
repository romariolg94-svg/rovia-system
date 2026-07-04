import { ArrowRight, Camera, Code2, Fingerprint, Settings } from "lucide-react";

const serviceCards = [
  { icon: Fingerprint, title: "Control Acces", text: "Sisteme avansate de control acces pentru securitatea spațiilor tale." },
  { icon: Camera, title: "Sisteme de Supraveghere", text: "Soluții video performante pentru monitorizare 24/7." },
  { icon: Settings, title: "Sisteme Inteligente", text: "Automatizări și soluții smart care îți optimizează afacerea." },
  { icon: Code2, title: "Dezvoltare Software", text: "Aplicații și platforme software personalizate pentru nevoile tale." },
];

export default function Services() {
  return (
    <section id="solutii" className="bg-[#f7faff] py-10 pb-14 text-[#071427]">
      <Title title="Soluțiile noastre" />

      <div className="mx-auto mt-8 grid max-w-[1400px] grid-cols-1 gap-7 px-5 md:grid-cols-2 md:px-10 lg:grid-cols-4">
        {serviceCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.title} className="flex min-h-[155px] items-center gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-[0_10px_25px_rgba(15,23,42,0.08)]">
              <div className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4b91ff] to-[#0047b8] text-white shadow-xl">
                <Icon size={48} />
              </div>
              <div>
                <h3 className="font-black text-[#071427]">{card.title}</h3>
                <p className="mt-2 text-sm leading-5 text-slate-700">{card.text}</p>
                <a className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#008cff]" href="#contact">
                  Află mai multe <ArrowRight size={15} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Title({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-black tracking-tight text-[#071427]">{title}</h2>
      <div className="mx-auto mt-3 h-[3px] w-28 bg-[#008cff]" />
    </div>
  );
}