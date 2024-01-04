import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
// We will create these two pages in a moment
import HomePage from "./pages/HomePage"
import ServicesPage from "./pages/ServicesPage"
export default function App() {
  return (
    <div>

    <Navbar />
    <Routes>
      
      <Route exact path="/" element={<HomePage/>} />
      <Route path="/Services" element={<ServicesPage/>} />
    </Routes>
    </div>
  )
}