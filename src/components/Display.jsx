function Display({ text }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-purple-400/30 bg-gradient-to-br from-[#111a3d] to-[#0b1230] p-5 shadow-inner sm:p-6">

      {/* Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl"></div>

      {/* Label */}
      <div className="relative mb-4 flex items-center justify-between">

        <span className="text-xs font-semibold uppercase tracking-widest text-purple-300">
          Output
        </span>

        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-indigo-300">
          {text.length} characters
        </span>

      </div>


      {/* Text */}
      <div className="relative min-h-[120px]">

        <p className="whitespace-pre-wrap break-words text-lg leading-8 text-white sm:text-xl">
          {text || (
            <span className="text-indigo-400">
              Start typing using the virtual keyboard...
            </span>
          )}
        </p>

      </div>


      {/* Bottom Line */}
      <div className="mt-4 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>

    </div>
  );
}

export default Display;