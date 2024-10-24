import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { NavLink as Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import './Navbar.css';

function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if(user != null)
      {
        console.log(user);

        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("User is not logged in");
        }
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

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