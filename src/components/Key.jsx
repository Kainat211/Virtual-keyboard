function Key({ value, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`
        relative h-12 overflow-hidden rounded-xl
        border border-white/10
        bg-gradient-to-br from-[#35458f] via-[#4556a4] to-[#303d7d]
        font-bold text-white
        shadow-[0_5px_15px_rgba(0,0,0,0.3)]
        transition-all duration-200

        hover:-translate-y-1
        hover:border-purple-300/40
        hover:from-[#586bd0]
        hover:via-[#6956c9]
        hover:to-[#7b4dcc]

        active:translate-y-0
        active:scale-95

        ${className}
      `}
    >

      {/* Shine */}
      <span className="absolute inset-x-0 top-0 h-px bg-white/20"></span>

      <span className="relative">
        {value}
      </span>

    </button>
  );
}

export default Key;