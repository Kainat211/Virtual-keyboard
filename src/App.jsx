import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import KeyboardPage from "./pages/KeyboardPage";
import About from "./pages/About";

function App() {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-fixed px-4 py-6"
      style={{
        backgroundImage: "url('/public/keyboard.png')",
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#05052a]/45"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl">

        <Navbar />

        <div className="mt-8">
          <Routes>

            <Route path="/" element={<Home />} />

            <Route
              path="/keyboard"
              element={<KeyboardPage />}
            />

            <Route
              path="/about"
              element={<About />}
            />

          </Routes>
        </div>

      </div>

    </div>
  );
}

export default App;