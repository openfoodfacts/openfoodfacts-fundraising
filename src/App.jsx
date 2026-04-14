import { HashRouter, Routes, Route } from 'react-router-dom'
import SupportPage from './pages/SupportPage'
import ImpactPage from './pages/ImpactPage'
import AboutPage from './pages/AboutPage'
import ContributePage from './pages/ContributePage'
import DiscoverPage from './pages/DiscoverPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SupportPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="/discover" element={<DiscoverPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
