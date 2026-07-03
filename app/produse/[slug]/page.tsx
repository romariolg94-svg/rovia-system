import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";

const products = {
  "rovia-time": {
    name: "Rovia Time",
    title: "Pontaj inteligent pentru companii moderne",
    image: "/images/rovia-time.png",
    text: "Sistem complet de pontaj cu rapoarte, notificări, evidență intrări/ieșiri și management angajați.",
    benefits: [
      "Pontaj rapid și sigur",
      "Rapoarte pe angajat și perioadă",
      "Notificări în timp real",
      "Export pentru contabilitate",
      "Aplicație web și mobilă",
    ],
  },
  "rovia-erp": {
    name: "Rovia ERP",
    title: "ERP modular adaptat proceselor tale",
    image: "/images/rovia-erp.png",
    text: "Platformă ERP pentru gestiune, stocuri, vânzări, achiziții, rapoarte și automatizarea fluxurilor interne.",
    benefits: [
      "Module personalizabile",
      "Dashboard-uri clare",
      "Gestiune stocuri",
      "Rapoarte financiare",
      "Integrare cu sisteme existente",
    ],
  },
  "rovia-sign": {
    name: "Rovia Sign",
    title: "Digital Signage pentru afișaje inteligente",
    image: "/images/rovia-sign.png",
    text: "Soluție pentru ecrane digitale în hoteluri, restaurante, fitness, recepții și spații comerciale.",
    benefits: [
      "Administrare centralizată",
      "Playlisturi pe locații",
      "Programare conținut",
      "Ideal pentru TV-uri și display-uri",
      "Management rapid de la distanță",
    ],
  },
  "rovia-vision": {
    name: "Rovia Vision",
    title: "Monitorizare CCTV și management camere IP",
    image: "/images/rovia-vision.png",
    text: "Platformă pentru supraveghere video, camere IP, monitorizare, status echipamente și administrare centralizată.",
    benefits: [
      "Monitorizare camere IP",
      "Status echipamente",
      "Integrare cu infrastructura existentă",
      "Dashboard centralizat",
      "Suport pentru locații multiple",
    ],
  },
  "rovia-flow": {
    name: "Rovia Flow",
    title: "Automatizare workflow și procese interne",
    image: "/images/rovia-flow.png",
    text: "Soluție pentru digitalizarea cererilor interne, aprobări, task-uri, notificări și fluxuri operaționale.",
    benefits: [
      "Fluxuri personalizate",
      "Notificări automate",
      "Istoric complet",
      "Aprobări și task-uri",
      "Reducere timp pierdut operațional",
    ],
  },
  "rovia-hotel": {
    name: "Rovia Hotel",
    title: "Mentenanță și facility management pentru hoteluri",
    image: "/images/rovia-hotel.png",
    text: "Aplicație pentru sesizări tehnice, camere, spații comune, echipă tehnică, timpi de intervenție și KPI.",
    benefits: [
      "Sesizări tehnice rapide",
      "Istoric pe cameră",
      "KPI tehnicieni",
      "Poze înainte/după",
      "Dashboard management",
    ],
  },
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products];

  if (!product) {
    return (
      <main className="min-h-screen bg-[#020b18] px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-black">Produsul nu există.</h1>
          <Link href="/" className="mt-8 inline-flex text-cyan-300">
            Înapoi acasă
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#020b18] text-white">
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#008cff35,transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-300">
            <ArrowLeft size={18} /> Înapoi la homepage
          </Link>

          <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-black uppercase tracking-[0.3em] text-cyan-300">
                {product.name}
              </p>

              <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
                {product.title}
              </h1>

              <p className="mt-7 text-lg leading-8 text-slate-300">
                {product.text}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#008cff] px-7 py-4 font-black uppercase text-white"
                >
                  Solicită demo <ArrowRight size={18} />
                </a>

                <Link
                  href="/"
                  className="rounded-lg border border-white/20 px-7 py-4 font-black uppercase"
                >
                  Vezi toate soluțiile
                </Link>
              </div>
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 shadow-2xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7faff] px-6 py-24 text-[#071427]">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">Funcționalități principale</h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {product.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg"
              >
                <CheckCircle2 className="text-[#008cff]" />
                <span className="font-bold">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#06142a] p-10 text-center">
          <h2 className="text-4xl font-black">Vrei o demonstrație?</h2>
          <p className="mt-4 text-slate-300">
            Spune-ne ce proces vrei să digitalizezi și îți propunem soluția potrivită.
          </p>
          <a
            href="mailto:contact@rovia-system.com"
            className="mt-8 inline-flex rounded-lg bg-[#008cff] px-8 py-4 font-black uppercase text-white"
          >
            contact@rovia-system.com
          </a>
        </div>
      </section>
    </main>
  );
}