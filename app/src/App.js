import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from './MainPage.js';
import Navbar from './Navbar.js';
import Medicamente from './Medicamente.js';
import Login from './Login.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='Medicamente' element={<Medicamente />}/>
        <Route path='Login' element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;
