import Key from "./Key";

function Keyboard({
  handleKeyClick,
  capsLock,
  setCapsLock,
  shift,
  setShift,
  ctrl,
  setCtrl,
  alt,
  setAlt,
}) {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const row2 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];

  const row3 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];

  const row4 = ["Z", "X", "C", "V", "B", "N", "M"];

  // Active button style
  const activeStyle =
    "ring-2 ring-pink-300 brightness-125";

  return (
    <div className="mt-4 space-y-2">

      {/* Number Row */}
      <div className="grid grid-cols-10 gap-2">
        {numbers.map((number) => (
          <Key
            key={number}
            value={number}
            onClick={() => handleKeyClick(number)}
          />
        ))}
      </div>

      {/* Backspace */}
      <div className="flex justify-start">
        <Key
          value="Backspace"
          onClick={() => handleKeyClick("BACKSPACE")}
          className="w-40"
        />
      </div>

      {/* QWERTY Row */}
      <div className="grid grid-cols-11 gap-2">
        <Key
          value="Tab"
          onClick={() => handleKeyClick("TAB")}
          className="text-green-200"
        />

        {row2.map((letter) => (
          <Key
            key={letter}
            value={letter}
            onClick={() => handleKeyClick(letter)}
          />
        ))}
      </div>

      {/* ASDF Row */}
      <div className="grid grid-cols-11 gap-2">
        <Key
          value="Caps"
          onClick={() => setCapsLock((prev) => !prev)}
          className={capsLock ? activeStyle : ""}
        />

        {row3.map((letter) => (
          <Key
            key={letter}
            value={letter}
            onClick={() => handleKeyClick(letter)}
          />
        ))}

        <Key
          value="Enter"
          onClick={() => handleKeyClick("ENTER")}
        />
      </div>

      {/* ZXCV Row */}
      <div className="grid grid-cols-11 gap-2">
        <Key
          value="Shift"
          onClick={() => setShift((prev) => !prev)}
          className={shift ? activeStyle : ""}
        />

        {row4.map((letter) => (
          <Key
            key={letter}
            value={letter}
            onClick={() => handleKeyClick(letter)}
          />
        ))}

        <Key
          value="Shift"
          onClick={() => setShift((prev) => !prev)}
          className={`col-span-3 ${shift ? activeStyle : ""}`}
        />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-12 gap-2">
        <Key
          value="Ctrl"
          onClick={() => setCtrl((prev) => !prev)}
          className={ctrl ? activeStyle : ""}
        />

        <Key
          value="Alt"
          onClick={() => setAlt((prev) => !prev)}
          className={alt ? activeStyle : ""}
        />

        <Key
          value="Space"
          onClick={() => handleKeyClick(" ")}
          className="col-span-6"
        />

        <Key
          value="Alt"
          onClick={() => setAlt((prev) => !prev)}
          className={alt ? activeStyle : ""}
        />

        <Key
          value="Ctrl"
          onClick={() => setCtrl((prev) => !prev)}
          className={ctrl ? activeStyle : ""}
        />
      </div>

      {/* Clear */}
      <div className="flex justify-end pt-2">
        <Key
          value="Clear"
          onClick={() => handleKeyClick("CLEAR")}
          className="w-24 bg-gradient-to-r from-pink-500 to-rose-500"
        />
      </div>

    </div>
  );
}

export default Keyboard;