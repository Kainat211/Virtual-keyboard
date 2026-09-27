import Key from "./Key";

function Keyboard({ handleKeyClick }) {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const row2 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];

  const row3 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];

  const row4 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="mt-4 space-y-2">

      {/* Row 1 */}
      <div className="grid grid-cols-10 gap-2">
        {numbers.map((number) => (
          <Key
            key={number}
            value={number}
            onClick={() => handleKeyClick(number)}
          />
        ))}

        <Key
          value="Backspace"
          onClick={() => handleKeyClick("BACKSPACE")}
          className="col-span-2"
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-11 gap-2">

        <Key
          value="Tab"
          onClick={() => handleKeyClick("    ")}
        />

        {row2.map((letter) => (
          <Key
            key={letter}
            value={letter}
            onClick={() => handleKeyClick(letter)}
          />
        ))}
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-11 gap-2">

        <Key
          value="Caps"
          onClick={() => {}}
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

      {/* Row 4 */}
      <div className="grid grid-cols-11 gap-2">

        <Key
          value="Shift"
          onClick={() => {}}
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
          onClick={() => {}}
          className="col-span-3"
        />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-12 gap-2">

        <Key
          value="Ctrl"
          onClick={() => {}}
          className="col-span-1"
        />

        <Key
          value="Alt"
          onClick={() => {}}
          className="col-span-1"
        />

        <Key
          value="Space"
          onClick={() => handleKeyClick(" ")}
          className="col-span-6"
        />

        <Key
          value="Alt"
          onClick={() => {}}
          className="col-span-1"
        />

        <Key
          value="Ctrl"
          onClick={() => {}}
          className="col-span-1"
        />

      </div>

      {/* Clear */}
      <div className="mt-2 flex justify-end">
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