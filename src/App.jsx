import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'

const App = () => {
  return (
   <>
   <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About />} />
    </Routes>
   </>
  )
}

export default App