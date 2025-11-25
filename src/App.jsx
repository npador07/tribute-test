import { useState } from 'react'
import './App.css'

function App() {
  const [open, setOpen] = useState(false);

  return (

    <body className="bg-gray-300 min-h-screen">
  <div className="App">
    <header className="bg-gray-900 text-white p-6 flex justify-between">
      <h1 className="font-bold">Nebula Watch</h1>

      <button 
        className="md:hidden" 
        onClick={() => setOpen(!open)}
      >
        Menu
      </button>

      <nav className={`${open ? 'block' : 'hidden'} md:flex space-x-6`}>
        <a>Features</a>
        <a>Pricing</a>
      </nav>
    </header>

    <section className="text-center py-20 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
      <h2 className="text-4xl font-bold mb-3">The All-New Nebula Watch</h2>
      <p className="mb-6">The GWAT (Greatest Watch of All Time)</p>
      <a href="#pricing" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
        Buy Now 
      </a>
    </section>
  </div>
</body>

  )
}

export default App
