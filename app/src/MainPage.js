import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './App.css';

function MainPage() {
  return(
    <>
      <div className='parallax'></div>

      <div className='flex justify-center items-center'>
      <div className='rounded-xl p-3 header-box'>
        <p style={{padding: '30px'}}>
        <b>Medicamente pentru toată lumea.</b>
        </p>
      </div>
      </div>
      <div className='text-box'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure, unde necessitatibus cumque quis omnis reprehenderit? Mollitia quos suscipit obcaecati, minus officiis vero nulla, tempore blanditiis voluptas voluptatem doloribus tempora.<br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure, unde necessitatibus cumque quis omnis reprehenderit? Mollitia quos suscipit obcaecati, minus officiis vero nulla, tempore blanditiis voluptas voluptatem doloribus tempora.<br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure, unde necessitatibus cumque quis omnis reprehenderit? Mollitia quos suscipit obcaecati, minus officiis vero nulla, tempore blanditiis voluptas voluptatem doloribus tempora.<br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure, unde necessitatibus cumque quis omnis reprehenderit? Mollitia quos suscipit obcaecati, minus officiis vero nulla, tempore blanditiis voluptas voluptatem doloribus tempora.<br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure, unde necessitatibus cumque quis omnis reprehenderit? Mollitia quos suscipit obcaecati, minus officiis vero nulla, tempore blanditiis voluptas voluptatem doloribus tempora.<br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure, unde necessitatibus cumque quis omnis reprehenderit? Mollitia quos suscipit obcaecati, minus officiis vero nulla, tempore blanditiis voluptas voluptatem doloribus tempora.<br /><br />
        <p align='center'>
            <button className='button rounded-xl p-1'>
              <p style={{padding: '15px'}}>
                  <Link to='/Medicamente'><b>Vezi medicamentele</b></Link>
              </p>
            </button>
        </p>
        <br />
      </div>
    </>
  );
};

export default MainPage;