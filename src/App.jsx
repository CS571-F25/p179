import { HashRouter, Routes, Route } from 'react-router'
import Home from './components/Home'
import CV from './components/CV'
import Calendar from './components/Calendar'
import Contact from './components/Contact'
import AIUsage from './components/AIUsage'
import Rip_404 from './components/rip_404'


function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/cv" element={<CV/>}></Route>
      <Route path="/calendar" element={<Calendar/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/ai-usage" element={<AIUsage/>}></Route>
      <Route path="/*" element={<Rip_404/>}></Route>
    </Routes>
  </HashRouter>
}

export default App
