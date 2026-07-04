const processSteps = ["Analiză", "Proiectare", "Dezvoltare", "Implementare", "Training", "Suport"];

export default function Process() {
  return (
    <section className="bg-[#f7faff] py-24 text-[#071427]">
      <Title title="Procesul nostru de lucru" />

      <div className="mx-auto mt-14 grid max-w-[1200px] grid-cols-1 gap-5 px-5 md:grid-cols-3 md:px-10 lg:grid-cols-6">
        {processSteps.map((step, index) => (
          <div key={step} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-[0_10px_25px_rgba(15,23,42,0.08)]">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#008cff] text-lg font-black text-white">
              {index + 1}
            </div>
            <p className="font-bold">{step}</p>
          </div>
        ))}
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