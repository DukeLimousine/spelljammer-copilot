import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // App becomes the layout wrapper
    children: [        // These are nested inside App
      {
        index: true,   // This renders at "/"
        element: <Home />
      },
      {
        path: "about", // This renders at "/about" 
        element: <About />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)