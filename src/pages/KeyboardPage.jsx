import { useState } from "react";
import Display from "../components/Display";
import Keyboard from "../components/Keyboard";

function KeyboardPage() {
  const [text, setText] = useState("");

  const handleKeyClick = (key) => {
    if (key === "BACKSPACE") {
      setText((prev) => prev.slice(0, -1));
    } else if (key === "ENTER") {
      setText((prev) => prev + "\n");
    } else if (key === "CLEAR") {
      setText("");
    } else {
      setText((prev) => prev + key);
    }
  };

  return (
    <div className="mx-auto max-w-5xl pb-6">

      {/* Heading */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-black text-white sm:text-4xl">
          Virtual{" "}
          <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
            Keyboard
          </span>
        </h1>

        <p className="mt-2 text-sm text-purple-200">
          Type • Create • Express
        </p>
      </div>

      {/* Keyboard Card */}
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-[#080d2c]/90 p-4 shadow-2xl backdrop-blur-xl sm:p-5">

        {/* Header */}
        <div className="mb-4 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
              ⌨️
            </div>

            <div>
              <h2 className="text-sm font-bold text-white sm:text-base">
                KeyFlow Keyboard
              </h2>

              <p className="text-[11px] text-indigo-300">
                Your virtual typing space
              </p>
            </div>
          </div>

          <span className="hidden rounded-full bg-green-400/10 px-3 py-1.5 text-[11px] text-green-300 sm:block">
            ● Ready
          </span>

        </div>

        {/* Display */}
        <Display text={text} />

        {/* Keyboard Label */}
        <div className="mb-2 mt-5 flex justify-between">
          <span className="text-xs font-semibold text-indigo-200">
            Virtual Keys
          </span>

          <span className="text-[11px] text-indigo-400">
            Click to type
          </span>
        </div>

        {/* Keyboard */}
        <Keyboard handleKeyClick={handleKeyClick} />

      </div>

      <p className="mt-4 text-center text-xs text-purple-200">
        Built with React.js & Tailwind CSS
      </p>

    </div>
  );
}

export default KeyboardPage;