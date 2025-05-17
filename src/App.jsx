"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cursor from "./components/Cursor"
import Loader from "./components/Loader"
import "./App.css"

// Wrapper component to access location for AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <Router>
      <div className="app">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Cursor />
            <Navbar />
            <AnimatedRoutes />
          </>
        )}
      </div>
    </Router>
  )
}

export default App
