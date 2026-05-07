import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Leistungen from './pages/Leistungen'
import UeberMich from './pages/UeberMich'
import Kontakt from './pages/Kontakt'
import FuerUnternehmen from './pages/FuerUnternehmen'
import Blog from './pages/Blog'
import Datenschutz from './pages/Datenschutz'
import Impressum from './pages/Impressum'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useLayoutEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        let top = 0
        let node: HTMLElement | null = el as HTMLElement
        while (node) {
          top += node.offsetTop
          node = node.offsetParent as HTMLElement | null
        }
        const targetY = top + el.clientHeight / 2 - window.innerHeight / 2
        window.scrollTo({ top: Math.max(0, targetY) })
      }
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
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
