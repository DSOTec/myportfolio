import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Technologies from './Pages/Technologies.jsx'

const App = () => {
  return (
   <>
   <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About />} />
      <Route path='/Technologies' element={<Technologies />} />
      
    </Routes>
   </>
  )
}

export default App