import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Technologies from './Pages/Technologies.jsx'
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
   <>
   <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About />} />
      <Route path='/Technologies' element={<Technologies />} />
      <Route path='/Projects' element={<Projects />} />
      <Route path='/Contact' element={<Contact />} /> 
      
    </Routes>
    <Footer />
   </>
  )
}

export default App