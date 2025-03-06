import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './pages/Main'
import Currencies from './pages/Currencies'
import Price from './pages/Price'
import Nav from './components/Nav'

function App() {
  

  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/currencies' element={<Currencies />} />
        <Route path='/price/:symbol' element={<Price />} />
      </Routes>
    </>
  )
}

export default App
