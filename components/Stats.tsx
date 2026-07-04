const stats = [
  ["300+", "Camere IP gestionate"],
  ["24/7", "Monitorizare & suport"],
  ["6", "Produse Rovia"],
  ["100%", "Soluții personalizate"],
];

export default function Stats() {
  return (
    <section className="bg-[#06142a] py-16">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 md:grid-cols-4 md:px-10">
        {stats.map(([value, label]) => (
          <div key={label} className="rounded-3xl border border-cyan-400/10 bg-white/[0.04] p-8 text-center">
            <p className="text-4xl font-black text-cyan-300 md:text-5xl">{value}</p>
            <p className="mt-3 text-slate-300">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}