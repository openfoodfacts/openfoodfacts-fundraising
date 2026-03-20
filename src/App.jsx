import { HashRouter, Routes, Route } from 'react-router-dom'
import SupportPage from './pages/SupportPage'
import ImpactPage from './pages/ImpactPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SupportPage />} />
        <Route path="/impact" element={<ImpactPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
