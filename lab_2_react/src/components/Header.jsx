function Header() {
  return (
    <header className="bg-black text-white p-6 border-b-4 border-lime-400 font-mono shadow-[0_10px_30px_rgba(163,230,53,0.15)]">
      <div className="max-w-4xl mx-auto border-2 border-neutral-800 bg-neutral-950 p-6 rounded-none relative">
        {/* Панель вікна термінала */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800 text-xs text-neutral-500">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-red-500 inline-block"></span>
            <span className="w-3 h-3 bg-yellow-500 inline-block"></span>
            <span className="w-3 h-3 bg-lime-400 inline-block"></span>
            <span className="text-lime-400 font-bold ml-2">root@malfi-sec:~#</span>
          </div>
          <span className="text-fuchsia-500 animate-pulse">● SECURE_LINK_ACTIVE</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-lime-400 drop-shadow-[3px_3px_0px_rgba(217,70,239,1)]">
              МАКСИМ МЕЛЬНИЧУК
            </h1>
            <p className="text-lg font-bold text-fuchsia-400 uppercase tracking-widest mt-1">
              &gt; JUNIOR_CYBERSECURITY_ANALYST
            </p>
          </div>
          
          <div className="bg-black border border-lime-400/50 p-3 text-xs space-y-1 font-mono text-neutral-300">
            <p><span className="text-lime-400">EMAIL:</span> <a href="mailto:maksym.melnychuk.kb.2025@lpnu.ua" className="underline hover:text-fuchsia-400">maksym.melnychuk.kb.2025@lpnu.ua</a></p>
            <p><span className="text-lime-400">PHONE:</span> <a href="tel:+380986000837" className="underline hover:text-fuchsia-400">+380 98 600 08 37</a></p>
            <p><span className="text-lime-400">LOC:</span> LVIV_UA // LAT: 49.8383</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;