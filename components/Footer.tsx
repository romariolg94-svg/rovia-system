export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020916] py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-6 px-5 md:flex-row md:px-10">
        <div>
          <p className="text-2xl font-black">
            <span className="text-[#008cff]">ROVIA</span> SYSTEM
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Software • IT • Securitate • Automatizări
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Rovia System. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}