function Footer() {
  return (
    <footer className="bg-black text-center py-6 font-mono border-t-2 border-neutral-800 mt-12 text-xs text-neutral-500">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>&copy; 2026 <span className="text-lime-400">MAXIM MELNYCHUK</span></p>
        <p className="text-fuchsia-500 animate-pulse">[ REACT v19 // TAILWIND v4 // PUNK_EDITION ]</p>
      </div>
    </footer>
  );
}

export default Footer;