import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Inicio from './pages/Inicio.jsx'
import Sobre from './pages/Sobre.jsx'
import Videos from './pages/Videos.jsx'

const TITLES = { '/': 'Início', '/sobre': 'Sobre nós', '/videos': 'Vídeos' }

function usePageSetup() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `Aluno Ensina — ${TITLES[pathname] ?? 'Início'}`
  }, [pathname])
}

export default function App() {
  usePageSetup()
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
