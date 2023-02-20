import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dinner_with_milo_webapp' element= {<HomePage/>}/>
        <Route path='/dinner_with_milo_webapp/About' element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
