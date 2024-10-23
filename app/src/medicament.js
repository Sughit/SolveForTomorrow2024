// medicament.js
import React, { useState } from 'react';  
import './App.css';
import './medicament.css';   

function SearchCard() {
  const [searchTerm, setSearchTerm] = useState('');  
 
  const handleSearch = () => {
    alert(`Cauti: ${searchTerm}`);
  };

  return (
    <div className="search-card">
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
};

export function MedicamentCard(props)
{
  return(
    <div className='card'>
      <img src={props.img} />
      <p>{props.name}</p>
      <img className='farmacie-img' src={props.farmacie} />
    </div>
  );
};

export default SearchCard;
