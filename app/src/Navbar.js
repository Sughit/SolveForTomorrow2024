import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { NavLink as Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import './Navbar.css';

function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);
  const userDetails = auth.currentUser;

  function handleLogout() {
    signOut(auth).then(function(){
      toast.success("Utilizator deconectat cu succes!", {
        position: "top-center",
      });
      window.location.href = "/";
    }).catch(function(error){
      alert(error.message);
    });
  }

  return(
    <nav>
      <Link className="font-bold title" to="/">MEDIX</Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><Link to="/Medicamente"><b>Medicamente</b></Link></li>
        {userDetails ? (
          <li>
            <Link to="/Stoc"><b>Stoc</b></Link>
          </li>
        ) : (
          <></>
        )}
        {userDetails ? (
          <button onClick={handleLogout}>
            <b>Delogare</b>
          </button>
        ) : (
          <li><Link to="/Login"><b>Înregistrează-te ca administrator</b></Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;