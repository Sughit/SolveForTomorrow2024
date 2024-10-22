import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import './Navbar.css'

const MainPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <nav>
      <Link className="font-bold title" to="/">NUTRIFY</Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><Link to="/Diete">Diete</Link></li>
        <li><Link to="/Piramida">Piramida Alimentelor</Link></li>
      </ul>
    </nav>
  );
}
//className="text-white rounded font-bold button"

export default MainPage;