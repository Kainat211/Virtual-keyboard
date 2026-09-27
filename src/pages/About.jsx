function About() {
  return (
    <div className="min-h-[80vh] py-10">

      {/* Hero Section */}
      <div className="text-center">

        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-4xl shadow-2xl backdrop-blur-md">
          ⌨️
        </div>

        <p className="text-sm font-semibold uppercase tracking-[5px] text-pink-300">
          Welcome to KeyFlow
        </p>

        <h1 className="mt-4 text-5xl font-black tracking-tight text-white sm:text-7xl">
          About
          <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
            {" "}KeyFlow
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-purple-100 sm:text-lg">
          A modern virtual keyboard designed to make typing
          simple, interactive and fun.
        </p>

      </div>


      {/* Main Glass Card */}
      <div className="mx-auto mt-12 max-w-5xl rounded-[32px] border border-white/20 bg-[#080d2c]/70 p-6 shadow-2xl backdrop-blur-xl sm:p-10">

        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Left Side */}
          <div>

            <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold text-purple-200">
              ✨ Our Project
            </span>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Type without
              <span className="text-pink-300"> limits.</span>
            </h2>

            <p className="mt-5 leading-8 text-indigo-100">
              KeyFlow is a Virtual Keyboard web application built
              using React.js and Tailwind CSS. It provides an
              interactive keyboard where users can type messages
              directly on the screen.
            </p>

            <p className="mt-4 leading-8 text-indigo-200">
              The project demonstrates React components, props,
              state management, event handling, arrays, map()
              and responsive UI design.
            </p>

          </div>


          {/* Right Side */}
          <div className="relative flex min-h-[280px] items-center justify-center">

            {/* Glow */}
            <div className="absolute h-48 w-48 rounded-full bg-purple-500/30 blur-3xl"></div>

            {/* Keyboard Illustration */}
            <div className="relative rotate-[-8deg] rounded-3xl border border-white/20 bg-gradient-to-br from-[#202b62] to-[#101632] p-5 shadow-2xl">

              <div className="grid grid-cols-5 gap-2">

                {[
                  "Q", "W", "E", "R", "T",
                  "A", "S", "D", "F", "G",
                  "Z", "X", "C", "V", "B"
                ].map((key) => (
                  <div
                    key={key}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-purple-300/20 bg-[#303d7b] text-sm font-bold text-white shadow-lg"
                  >
                    {key}
                  </div>
                ))}

              </div>

              <div className="mt-2 h-10 rounded-lg border border-blue-300/20 bg-[#303d7b]"></div>

            </div>

          </div>

        </div>


        {/* Feature Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* Card 1 */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-2 hover:bg-white/10">

            <div className="text-3xl">⚡</div>

            <h3 className="mt-4 font-bold text-white">
              Interactive
            </h3>

            <p className="mt-2 text-sm leading-6 text-indigo-200">
              Click the keys and instantly see your text.
            </p>

          </div>


          {/* Card 2 */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-2 hover:bg-white/10">

            <div className="text-3xl">🎨</div>

            <h3 className="mt-4 font-bold text-white">
              Modern UI
            </h3>

            <p className="mt-2 text-sm leading-6 text-indigo-200">
              Beautiful neon and glassmorphism interface.
            </p>

          </div>


          {/* Card 3 */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-2 hover:bg-white/10">

            <div className="text-3xl">📱</div>

            <h3 className="mt-4 font-bold text-white">
              Responsive
            </h3>

            <p className="mt-2 text-sm leading-6 text-indigo-200">
              Works smoothly on different screen sizes.
            </p>

          </div>


          {/* Card 4 */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-2 hover:bg-white/10">

            <div className="text-3xl">🧩</div>

            <h3 className="mt-4 font-bold text-white">
              Reusable
            </h3>

            <p className="mt-2 text-sm leading-6 text-indigo-200">
              Built with reusable React components.
            </p>

          </div>

        </div>


        {/* Technologies */}
        <div className="mt-12 text-center">

          <p className="text-xs font-semibold uppercase tracking-[4px] text-purple-300">
            Built With
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-200">
              ⚛️ React.js
            </span>

            <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-5 py-2 text-sm text-blue-200">
              🎨 Tailwind CSS
            </span>

            <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-5 py-2 text-sm text-purple-200">
              🧭 React Router
            </span>

            <span className="rounded-full border border-pink-400/20 bg-pink-400/10 px-5 py-2 text-sm text-pink-200">
              ⚡ Vite
            </span>

          </div>

        </div>

      </div>


      {/* Bottom */}
      <div className="mt-8 text-center">

        <p className="text-sm text-purple-200">
          Type • Create • Express
        </p>

        <p className="mt-2 text-xs text-purple-300">
          © 2026 KeyFlow
        </p>

      </div>

    </div>
  );
}

export default About;