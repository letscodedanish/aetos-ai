import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cursor from './motion/Cursor'
import { CurtainProvider } from './motion/Curtain'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import About from './pages/About'
import Contact from './pages/Contact'
import ServiceDetail from './pages/ServiceDetail'
import WorkPage from './pages/WorkPage'

// Smooth-scroll to a hash target after route/hash changes.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <CurtainProvider>
      <Cursor />
      <ScrollManager />

      {/* status dot (recurring accent) */}
      <span
        aria-hidden="true"
        className="fixed right-[22px] top-[18px] z-[200] h-[9px] w-[9px] rounded-full bg-accent shadow-[0_0_0_4px_rgba(99,102,232,0.18)]"
      />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/onpoint" element={<CaseStudy />} />
        <Route path="/services/ai-integration" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </CurtainProvider>
  )
}
