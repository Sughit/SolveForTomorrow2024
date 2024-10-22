// medicament.js
import React, { useState } from 'react';  
import './App.css';
import './medicament.css';   

function Card() {
  const [searchTerm, setSearchTerm] = useState('');  
 
  const handleSearch = () => {
    alert(`Cauti: ${searchTerm}`);  
    
  };

  return (
    <div className="card">
<h2>Medicamente</h2>

      <input 
        type="text" 
        placeholder="Caută medicamente..." 
        value={searchTerm}  
        onChange={(e) => setSearchTerm(e.target.value)}  
        className="search-box"
      />
      { }
      <button onClick={handleSearch} className="search-button">Caută</button>
    </div>
  );
}

export default Card;
