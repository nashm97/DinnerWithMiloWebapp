import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import TacoPage from './components/RecipePages/TacoPage/TacoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LemonTartPage from './components/RecipePages/LemonTartPage/LemonTartPage';
import BeefStirFryPage from './components/RecipePages/BeefStirFryPage/BeefStirFryPage';
import BolognesePage from './components/RecipePages/BolognesePage/BolognesePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/tacos' element={<TacoPage/>}/>
        <Route path='/lemontart' element={<LemonTartPage/>}/>
        <Route path='/bolognese' element={<BolognesePage/>}/>
        <Route path='/beefstirfry' element={<BeefStirFryPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
