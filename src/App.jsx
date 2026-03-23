import { HashRouter, Routes, Route } from 'react-router-dom'
import SupportPage from './pages/SupportPage'
import ImpactPage from './pages/ImpactPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SupportPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
