import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Register from '../pages/Register';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/registro" element={<Register/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter