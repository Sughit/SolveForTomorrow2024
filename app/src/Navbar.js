import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { NavLink as Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [user, setUser] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      setUser(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut().then(function(){
        //ne-am delogat
      }).catch(function(error){
        console.log(error);
      });
      window.location.href = "/";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
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
        {user ? (
          <button onClick={handleLogout}>
            Delogare
          </button>
        ) : (
          <li><Link to="/Login"><b>Înregistrează-te ca administrator</b></Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;