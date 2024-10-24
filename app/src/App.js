import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainPage from './MainPage.js';
import Navbar from './Navbar.js';
import Medicamente from './Medicamente.js';
import Login from './Login.js';
import Stoc from './Stoc.js';
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='Medicamente' element={<Medicamente />}/>
        <Route path='Login' element={<Login />}/>
        <Route path='Stoc' element={<Stoc />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
