import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import "./App.css"
import { useState } from 'react'
const App = () => {
  const [mode, setMode] = useState('light')

  const toggleMode = ()  =>{
    if(mode=='light'){
     
      setMode('dark')
      
    }
    if(mode=='dark'){
     
      setMode('light')
    }
  }

  return (
    <div className={mode}>
      <BrowserRouter>
    <Navbar toggleMode={toggleMode} mode={mode}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>
      
    </Routes>
    <Footer mode={mode}/>
    </BrowserRouter>
    </div>
  )
}

export default App
