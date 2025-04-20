import React from 'react'
import HomePage from './Pages/HomePage'
import CreatePage from './Pages/CreatePage'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import './App.css'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/create' element={<CreatePage/>} />
      </Routes>
    </>
  )
}

export default App