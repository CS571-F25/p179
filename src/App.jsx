import { HashRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import CV from './pages/CV'
import Calendar from './pages/Calendar'
import Contact from './pages/Contact'
import AIUsage from './pages/AIUsage'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './components/NotFound'


function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/cv" element={<CV/>}></Route>
      <Route path="/calendar" element={<Calendar/>}></Route>
      <Route path="/ai-usage" element={<AIUsage/>}></Route>
      <Route path="/project/:id" element={<ProjectDetail/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
    </Routes>
  </HashRouter>
}

export default App


// <Route path="/contact" element={<Contact/>}></Route>