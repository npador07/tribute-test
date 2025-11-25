import { useState } from 'react'
import './App.css'

function App() {
  const [open, setOpen] = useState(false);

  return (

    <body className="bg-gradient-to-r from-blue-900 to-green-800 min-h-screen">
  <div className="App">
  <header className="bg-gray-900 text-white p-5">
  <div className="flex justify-between items-center">
    <h1 className="font-bold">Nebula Watch</h1>

    <div className="flex items-center space-x-4">
      {/* Menu button */}
      <button 
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        Menu
      </button>

      {/* Mobile + Desktop nav in one place */}
      <nav
        className={`flex space-x-4 transition-all duration-300 
        ${open ? "w-auto opacity-100" : "w-0 opacity-0 overflow-hidden"} 
        md:w-auto md:opacity-100 md:overflow-visible`}
      >
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
      </nav>
    </div>
  </div>
</header>



    <section className="text-center pt-10  text-white">
      <h2 className="text-4xl font-bold mb-3">The All-New Nebula Watch</h2>
      <img src="/images/NebulaWatch.jpg" alt="Nebula Watch" className="mx-auto mb-3 w-200 h-100 object-cover rounded-lg shadow-lg" />
      <p className="mb-6">The GWAT (Greatest Watch of All Time)</p>
      <a href="#features" className="bg-white text-blue-600 px-30 py-3 rounded-lg font-semibold w-full max-w-xs">
        Learn More 
      </a>
      
    </section>
    <section id="features" className="pt-10 px-5">
      <h3 className="text-3xl font-bold mb-6 text-center text-white">Features</h3>
      <ul className="max-w-3xl mx-auto space-y-4 list-disc list-inside text-white">
        <li>Stunning AMOLED display with always-on functionality.</li>
        <li>Advanced health monitoring: heart rate, SpO2, ECG, and sleep tracking.</li>
        <li>Built-in GPS for accurate activity tracking.</li>
        <li>Water-resistant up to 50 meters.</li>
        <li>Long-lasting battery life with fast charging.</li>
      </ul>
    </section>
    <section id="pricing" className=" py-20 px-5 text-center">
      <h3 className="text-3xl font-bold mb-6 text-white">Pricing</h3>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-20 max-w-4xl mx-auto text-white">
          <div><h1 className="text-2xl font-bold">Basic</h1></div>
          <div><h1 className="text-2xl font-bold">Plus</h1></div>
          <div><h1 className="text-2xl font-bold">Premium</h1></div>
      </div>
    </section>
    <footer className="bg-gray-900 text-white text-center p-5">
      <p>&copy; 2025 Nebula Watch. All rights reserved.</p>
    </footer>
    </div>
</body>

  )
}

export default App
