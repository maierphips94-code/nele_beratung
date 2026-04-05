import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Leistungen from './pages/Leistungen'
import UeberMich from './pages/UeberMich'
import Kontakt from './pages/Kontakt'
import FuerUnternehmen from './pages/FuerUnternehmen'
import Blog from './pages/Blog'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Wait for page render, then scroll to anchor
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 80)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-background-light">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/fuer-unternehmen" element={<FuerUnternehmen />} />
            <Route path="/ueber-mich" element={<UeberMich />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
