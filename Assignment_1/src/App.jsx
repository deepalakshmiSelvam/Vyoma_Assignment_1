import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Enquiry from './pages/Enquiry'
import PricingPage from './pages/PricingPage'
import Navbar from "./components/Navbar"
import "./css/app.css"

const App = () => {
  return (
    <div className='App_container'>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/enquiry' element={<Enquiry/>}/>
          <Route path='/pricingPage' element={<PricingPage/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
