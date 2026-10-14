function Education() {
  return (
    <section className="max-w-4xl mx-auto my-8 p-6 bg-neutral-950 text-white font-mono border-2 border-neutral-800 shadow-[8px_8px_0px_0px_rgba(217,70,239,1)]">
      <div className="flex items-center justify-between mb-6 border-b-2 border-fuchsia-500 pb-2">
        <h3 className="text-2xl font-black uppercase tracking-wider text-fuchsia-400">
          // EDUCATION & SKILLS
        </h3>
        <span className="text-xs bg-fuchsia-500 text-black px-2 py-0.5 font-bold">SYS_READY</span>
      </div>

      <div className="space-y-4 mb-8">
        <div className="bg-black border border-neutral-800 p-4 hover:border-lime-400 transition-colors">
          <h4 className="text-base font-bold text-lime-400 uppercase">НАЦІОНАЛЬНИЙ УНІВЕРСИТЕТ «ЛЬВІВСЬКА ПОЛІТЕХНІКА»</h4>
          <p className="text-xs text-neutral-400 mt-1">БАКАЛАВР З КІБЕРБЕЗПЕКИ // [2025 - 2029 (EXP)]</p>
        </div>
        <div className="bg-black border border-neutral-800 p-4 hover:border-fuchsia-500 transition-colors">
          <h4 className="text-base font-bold text-fuchsia-400 uppercase">ЛЬВІВСЬКА АКАДЕМІЧНА ГІМНАЗІЯ</h4>
          <p className="text-xs text-neutral-400 mt-1">ПРИКЛАДНА МАТЕМАТИКА // [2018 - 2025]</p>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-black text-neutral-400 uppercase mb-3 tracking-widest">// ACTIVE_SKILLS_MATRIX:</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            'Критичне мислення',
            'Комунікативні навички',
            'Лідерство',
            'Дискретна математика',
            'Аналітичне мислення',
            'Логічне мислення'
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-black text-neutral-300 border border-neutral-800 hover:border-lime-400 hover:text-lime-400 text-xs font-bold p-3 uppercase tracking-wider text-center transition-all duration-200 cursor-default shadow-[2px_2px_0px_0px_rgba(163,230,53,0.5)]"
            >
              &gt; {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;