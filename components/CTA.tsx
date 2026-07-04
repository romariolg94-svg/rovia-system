import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#06142a] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#008cff35,transparent_38%)]" />

      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <h2 className="text-4xl font-black md:text-6xl">
          Construim software. Automatizăm procese. Conectăm tehnologia.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Un singur partener pentru aplicații software, sisteme inteligente, supraveghere, infrastructură IT și mentenanță.
        </p>
        <a href="#contact" className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#008cff] px-9 py-5 font-black uppercase text-white hover:bg-[#00a6ff]">
          Începe proiectul <ArrowRight />
        </a>
      </div>
    </section>
  );
}