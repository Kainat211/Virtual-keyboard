import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">

      <h2 className="text-xl font-bold text-white">
        ⌨️ KeyFlow
      </h2>

      <div className="flex gap-5 text-sm font-medium text-white">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/keyboard">Keyboard</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

    </nav>
  );
}

export default Navbar;