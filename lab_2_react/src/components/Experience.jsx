function Experience() {
  return (
    <section className="max-w-4xl mx-auto my-8 p-6 bg-neutral-950 text-white font-mono border-2 border-neutral-800 shadow-[8px_8px_0px_0px_rgba(163,230,53,1)]">
      <div className="flex items-center justify-between mb-6 border-b-2 border-lime-400 pb-2">
        <h3 className="text-2xl font-black uppercase tracking-wider text-lime-400">
          // EXPERIENCE_LOGс
        </h3>
        <span className="text-xs bg-lime-400 text-black px-2 py-0.5 font-bold">STATUS: OK</span>
      </div>
      
      <div className="space-y-8">
        <div className="relative pl-6 border-l-2 border-fuchsia-500 group">
          <span className="absolute -left-[9px] top-1 w-4 h-4 bg-black border-2 border-fuchsia-500 rounded-full group-hover:bg-fuchsia-500 transition-colors"></span>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
            <h4 className="text-lg font-black text-white uppercase tracking-wide">РЕПЕТИТОР З МАТЕМАТИКИ</h4>
            <span className="text-xs font-bold bg-fuchsia-950 text-fuchsia-400 px-2 py-0.5 border border-fuchsia-800">[2024 - 2025]</span>
          </div>
          <p className="text-xs text-fuchsia-400 mb-2 uppercase tracking-wider">&gt; SECTOR: PRIVATE PRACTICE / MENTORSHIP</p>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Розробляв індивідуальні стратегії навчання для оптимізації математичних навичок та логічного мислення учнів. Декомпозиція складних концепцій на базові алгоритми.
          </p>
        </div>

        <div className="relative pl-6 border-l-2 border-lime-400 group">
          <span className="absolute -left-[9px] top-1 w-4 h-4 bg-black border-2 border-lime-400 rounded-full group-hover:bg-lime-400 transition-colors"></span>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
            <h4 className="text-lg font-black text-white uppercase tracking-wide">ПРОМОУТЕР БРЕНДУ</h4>
            <span className="text-xs font-bold bg-lime-950 text-lime-400 px-2 py-0.5 border border-lime-800">[07.2024]</span>
          </div>
          <p className="text-xs text-lime-400 mb-2 uppercase tracking-wider">&gt; SECTOR: OUTREACH / PUBLIC ENGAGEMENT</p>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Пряма комунікація з цільовою аудиторією в умовах високого потоку людей для масштабування впізнаваності продукту та швидкого реагування на запити.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;