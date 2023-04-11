
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import {About} from'./components/About'  // on mets des crochet sur About qui se trouve sur App.js {About} parsk ==>page About

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
