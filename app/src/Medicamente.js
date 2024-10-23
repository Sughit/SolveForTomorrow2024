// medicamente.js
import React from 'react';
import './App.css';
import SearchCard from './medicament'; 
import {MedicamentCard} from './medicament';

function Medicamente() {
  return (
    <>
      <SearchCard />
      <div className='medicamente-wrapper'>
        <MedicamentCard 
            name='text'
        />
        <MedicamentCard 
          name='text'
        />
        <MedicamentCard 
          name='text'
        />
        <MedicamentCard 
          name='text'
        />
        <MedicamentCard 
          name='text'
        />
        <MedicamentCard 
          name='text'
        />
        <MedicamentCard 
          name='text'
        />
        <MedicamentCard 
          name='text'
        />
        <MedicamentCard 
          name='text'
        />
        <MedicamentCard 
          name='text'
        />
        <MedicamentCard 
          name='text'
        />
      </div>
    </>
  );
}

export default Medicamente;
