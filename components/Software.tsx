import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const softwareCards = [
  {
    name: "ROVIA TIME",
    slug: "rovia-time",
    title: "Pontaj inteligent",
    image: "rovia-time.png",
    text: "Pontaj, rapoarte, notificări și evidență angajați.",
    points: ["Pontaj rapid", "Rapoarte", "Notificări"],
  },
  {
    name: "ROVIA ERP",
    slug: "rovia-erp",
    title: "ERP modular",
    image: "rovia-erp.png",
    text: "Gestiune, stocuri, vânzări, achiziții și dashboard-uri.",
    points: ["Stocuri", "Vânzări", "Rapoarte"],
  },
  {
    name: "ROVIA SIGN",
    slug: "rovia-sign",
    title: "Digital Signage",
    image: "rovia-sign.png",
    text: "Afișaje digitale pentru hoteluri, restaurante și retail.",
    points: ["Playlisturi", "Programare", "Remote"],
  },
  {
    name: "ROVIA VISION",
    slug: "rovia-vision",
    title: "CCTV Management",
    image: "rovia-vision.png",
    text: "Administrare camere IP și monitorizare centralizată.",
    points: ["Camere IP", "Status", "Monitorizare"],
  },
  {
    name: "ROVIA FLOW",
    slug: "rovia-flow",
    title: "Workflow intern",
    image: "rovia-flow.png",
    text: "Automatizare task-uri, aprobări, notificări și fluxuri.",
    points: ["Task-uri", "Aprobări", "Istoric"],
  },
  {
    name: "ROVIA HOTEL",
    slug: "rovia-hotel",
    title: "Mentenanță Hotel",
    image: "rovia-hotel.png",
    text: "Sesizări tehnice, intervenții, KPI și istoric pe camere.",
    points: ["Sesizări", "KPI", "Istoric"],
  },
];

export default function Software() {
  return (
    <section id="software" className="relative overflow-hidden bg-[#f7faff] py-24 text-[#071427]">
      <div className="absolute left-[-160px] top-20 h-[320px] w-[320px] rounded-full bg-[#008cff18] blur-[90px]" />
      <div className="absolute bottom-0 right-[-180px] h-[360px] w-[360px] rounded-full bg-[#008cff18] blur-[100px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-black uppercase tracking-[0.3em] text-[#008cff]">
            Ecosistem Rovia
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071427] md:text-6xl">
            Produse software construite pentru procese reale.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            O suită de soluții modulare pentru pontaj, ERP, digital signage,
            supraveghere, workflow și mentenanță operațională.
          </p>

          <div className="mx-auto mt-5 h-[3px] w-28 bg-[#008cff]" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {softwareCards.map((item) => (
            <Link
              key={item.name}
              href={`/produse/${item.slug}`}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.08)] duration-300 hover:-translate-y-2 hover:border-[#008cff]/40 hover:shadow-[0_24px_70px_rgba(0,140,255,0.22)]"
            >
              <div className="relative h-[260px] overflow-hidden bg-[#06142a]">
                <Image
                  src={`/images/${item.image}`}
                  alt={item.title}
                  fill
                  className="object-cover duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020b18]/70 via-transparent to-transparent opacity-80" />

                <div className="absolute left-5 top-5 rounded-full border border-cyan-300/25 bg-[#020b18]/70 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-200 backdrop-blur">
                  {item.name}
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-black text-[#071427]">
                  {item.title}
                </h3>

                <p className="mt-4 min-h-[58px] leading-7 text-slate-600">
                  {item.text}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <span
                      key={point}
                      className="inline-flex items-center gap-1 rounded-full bg-[#008cff]/10 px-3 py-1.5 text-sm font-semibold text-[#006ee6]"
                    >
                      <CheckCircle2 size={15} />
                      {point}
                    </span>
                  ))}
                </div>

                <div className="mt-7 inline-flex items-center gap-2 font-black text-[#008cff]">
                  Vezi produsul
                  <ArrowRight size={18} className="duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}