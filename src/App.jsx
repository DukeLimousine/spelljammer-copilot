import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* This stays the same on every page */}
      <header className="header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <h1>Spelljammer Copilot</h1>
      </header>

      {/* This is where page content gets "yielded" */}
      <main className="main">
        <Outlet />
      </main>

      {/* This also stays the same */}
      <footer className="footer">
        <p>© 2024 Spelljammer Copilot</p>
      </footer>
    </div>
  )
}

export default App
