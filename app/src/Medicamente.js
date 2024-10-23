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
          img='https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          name='text'
          farmacie='catena.png'
        />
        <MedicamentCard 
          img='https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          name='text'
          farmacie='dr-max.png'
        />
        <MedicamentCard 
          img='https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          name='text'
          farmacie='dona.png'
        />
        <MedicamentCard 
          img='https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          name='text'
          farmacie='helpnet.png'
        />
        <MedicamentCard 
          img='https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          name='text'
          farmacie='catena.png'
        />
        <MedicamentCard 
          img='https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          name='text'
          farmacie='catena.png'
        />
        <MedicamentCard 
          img='https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          name='text'
          farmacie='catena.png'
        />
        <MedicamentCard 
          img='https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          name='text'
          farmacie='catena.png'
        />
        <MedicamentCard 
          img='https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          name='text'
          farmacie='catena.png'
        />
        <MedicamentCard 
          img='https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          name='text'
          farmacie='catena.png'
        />
        <MedicamentCard 
          img='https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          name='text'
          farmacie='catena.png'
        />
        <MedicamentCard 
          img='https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'
          name='text'
          farmacie='catena.png'
        />
      </div>
    </>
  );
}

export default Medicamente;
