import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import './App.css'
import Home from './Components/home'
import Services from './Components/services'
import Event from './Components/event'
import About from './Components/about'
import Contact from './Components/contact'
import Signup from './Components/signup'
import Login from './Components/login'
import Dashboard from './Components/dashboard'
import Profile from './Components/profile'

// Add ProtectedRoute component

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
            <Route path='/services' element={<Services />} />
            <Route path='/events' element={<Event />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
