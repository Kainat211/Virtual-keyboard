import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex min-h-[75vh] items-center justify-center text-center">

      <div>

        <div className="mb-5 text-6xl">
          ⌨️
        </div>

        <h1 className="text-5xl font-extrabold text-white">
          Virtual
          <span className="text-pink-300"> Keyboard</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-lg text-purple-100">
          Type, create and express yourself with our modern
          virtual keyboard.
        </p>

        <Link
          to="/keyboard"
          className="mt-7 inline-block rounded-xl bg-white px-7 py-3 font-bold text-purple-700 shadow-xl transition hover:-translate-y-1 hover:bg-purple-100"
        >
          Start Typing →
        </Link>

      </div>

    </div>
  );
}

export default Home;