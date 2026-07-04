import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f7faff] py-24 text-[#071427]">
      <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-10 px-5 md:px-10 lg:grid-cols-2">
        <div>
          <p className="font-black uppercase tracking-[0.3em] text-[#008cff]">Contact</p>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">Hai să digitalizăm compania ta.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            Spune-ne ce proces vrei să îmbunătățești, iar noi venim cu soluția software și tehnică potrivită.
          </p>
        </div>

        <div className="rounded-3xl bg-[#020b18] p-8 text-white shadow-2xl">
          <div className="space-y-5">
            <ContactLine icon={<Mail />} text="contact@rovia-system.com" />
            <ContactLine icon={<Phone />} text="Telefon: 0731372665" />
            <ContactLine icon={<MapPin />} text="Brașov, România" />
          </div>

          <a href="mailto:contact@rovia-system.com" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#008cff] px-7 py-4 font-bold text-white hover:bg-[#00a6ff]">
            Trimite mesaj <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactLine({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-cyan-300">{icon}</div>
      <p>{text}</p>
    </div>
  );
}