import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router'
import Home from './components/home'
import CV from './components/CV'
import Calendar from './components/Calendar'
import Rip_404 from './components/rip_404'


function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/cv" element={<CV/>}></Route>
      <Route path="/calendar" element={<Calendar/>}></Route>
      <Route path="/*" element={<Rip_404/>}></Route>
    </Routes>
  </HashRouter>
}

export default App
