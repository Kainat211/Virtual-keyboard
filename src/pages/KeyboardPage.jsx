import { useState } from "react";
import Display from "../components/Display";
import Keyboard from "../components/Keyboard";

function KeyboardPage() {
  const [text, setText] = useState("");

  const [capsLock, setCapsLock] = useState(false);
  const [shift, setShift] = useState(false);
  const [ctrl, setCtrl] = useState(false);
  const [alt, setAlt] = useState(false);

  const handleKeyClick = (key) => {
    // Backspace
    if (key === "BACKSPACE") {
      setText((prev) => prev.slice(0, -1));
    }

    // Enter
    else if (key === "ENTER") {
      setText((prev) => prev + "\n");
    }

    // Clear
    else if (key === "CLEAR") {
      setText("");
    }

    // Tab
    else if (key === "TAB") {
      setText((prev) => prev + "    ");
    }

    // Normal letters
    else if (/^[a-z]$/i.test(key)) {
      const uppercase = capsLock !== shift;
      const letter = uppercase
        ? key.toUpperCase()
        : key.toLowerCase();

      setText((prev) => prev + letter);

      // Shift automatically turns off after one letter
      if (shift) {
        setShift(false);
      }
    }

    // Numbers and Space
    else {
      setText((prev) => prev + key);

      if (shift) {
        setShift(false);
      }
    }
  };

  return (
    <div className="mx-auto w-full max-w-5xl">

      {/* Keyboard Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">
            ⌨️ KeyFlow Keyboard
          </h1>

          <p className="text-sm text-indigo-200">
            Your virtual typing space
          </p>
        </div>

        <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-300">
          ● Ready
        </span>
      </div>

      {/* Display */}
      <Display text={text} />

      {/* Keyboard */}
      <div className="mt-6">
        <Keyboard
          handleKeyClick={handleKeyClick}
          capsLock={capsLock}
          setCapsLock={setCapsLock}
          shift={shift}
          setShift={setShift}
          ctrl={ctrl}
          setCtrl={setCtrl}
          alt={alt}
          setAlt={setAlt}
        />
      </div>

    </div>
  );
}

export default KeyboardPage;