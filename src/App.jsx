import { useState } from "react";
import "./App.css";
import watchImage from "./assets/NebulaWatch.jpg"; // <-- place your image in src/assets/

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-900 to-green-800 min-h-screen text-white">
      {/* Header */}
      <header className="bg-gray-900 p-5">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Nebula Watch</h1>

          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              className="md:hidden px-2 py-1 border border-white rounded"
              onClick={() => setOpen(!open)}
            >
              Menu
            </button>

            {/* Navigation */}
            <nav
              className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 transition-all duration-300 ${
                open ? "block opacity-100" : "hidden opacity-0 md:block md:opacity-100"
              }`}
            >
              <a href="#features" className="hover:underline">
                Features
              </a>
              <a href="#pricing" className="hover:underline">
                Pricing
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center pt-10 px-5">
        <h2 className="text-4xl font-bold mb-3">The All-New Nebula Watch</h2>
        <img
          src={watchImage}
          alt="Nebula Watch"
          className="mx-auto mb-3 w-80 h-40 object-cover rounded-lg shadow-lg"
        />
        <p className="mb-6">The GWAT (Greatest Watch of All Time)</p>
        <a
          href="#features"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold inline-block"
        >
          Learn More
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="pt-10 px-5">
        <h3 className="text-3xl font-bold mb-6 text-center">Features</h3>
        <ul className="max-w-3xl mx-auto space-y-4 list-disc list-inside">
          <li>Stunning AMOLED display with always-on functionality.</li>
          <li>Advanced health monitoring: heart rate, SpO2, ECG, and sleep tracking.</li>
          <li>Built-in GPS for accurate activity tracking.</li>
          <li>Water-resistant up to 50 meters.</li>
          <li>Long-lasting battery life with fast charging.</li>
        </ul>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-5 text-center">
        <h3 className="text-3xl font-bold mb-6">Pricing</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">

          {/* Basic */}
          <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-2">Basic</h1>
            <p className="mb-3">128GB</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition">
              Choose Plan
            </button>
          </div>

          {/* Plus */}
          <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-2">Plus</h1>
            <p>256GB</p>
            <p>Unlimited Internet</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition">
              Choose Plan
            </button>
          </div>

          {/* Premium */}
          <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-2">Premium</h1>
            <p>512GB</p>
            <p>Unlimited Internet</p>
            <p>Solar Powered</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition">
              Choose Plan
            </button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-5">
        <p>&copy; 2025 Nebula Watch. All rights reserved.</p>
        <p>npador07@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
