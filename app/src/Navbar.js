import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from './firebaseContext';
import { doSignOut } from './auth';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const userLoggedIn = useAuth()

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
        <li><Link to="/Login">
              <b>
                {
                  userLoggedIn 
                  ?
                  <>
                    <button onClick={() => { doSignOut() }}><b>Delogare</b></button>
                  </>
                  :
                  <>
                    Înregistrează-te ca administrator
                  </>
                }
              </b>
            </Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;