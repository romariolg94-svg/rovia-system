import { Camera, Code2, Network, Server, Shield, Wrench } from "lucide-react";

const extraServices = [
  { icon: Code2, title: "Software la comandă", text: "ERP, CRM, pontaj, gestiune, aplicații web, dashboard-uri și integrări." },
  { icon: Network, title: "Rețelistică", text: "Cablare structurată, switch-uri, VLAN, WiFi enterprise și infrastructură completă." },
  { icon: Server, title: "Servere & Backup", text: "Implementare, mentenanță, monitorizare, backup și soluții cloud/on-premise." },
  { icon: Shield, title: "Sisteme efracție", text: "Sisteme de securitate, senzori, centrale, control acces și integrare tehnică." },
  { icon: Camera, title: "CCTV & IP Video", text: "Camere IP, NVR, servere video, monitorizare și mentenanță periodică." },
  { icon: Wrench, title: "Mentenanță echipamente", text: "Suport tehnic, intervenții, optimizare și mentenanță pentru echipamente IT." },
];

export default function MoreServices() {
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
            <div key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]">
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

function SectionTitle({ small, title, text }: { small: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl px-5 text-center">
      <p className="font-bold uppercase tracking-[0.3em] text-cyan-300">{small}</p>
      <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-300">{text}</p>
    </div>
  );
}