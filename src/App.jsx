import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="min-h-full flex flex-col">
      {/* Header */}
      <Navbar />
      
      {/* Main content area */}
      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet /> {/* Outlet is used to render the child routes, like a yield */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © 2024 Spelljammer Copilot
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
