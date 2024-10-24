import React, { useEffect, useState } from 'react';
import './stoc.css';
import { auth, db } from "./firebase.js";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { fetchSubcollectionDocuments } from './HandleCollections.js';

function Stoc(){
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if(user != null)
      {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("User is not logged in");
        }
      }
    });
  };

  useEffect(() => {
    fetchUserData();

    const getItems = async () => {
      try {
        const documents = await fetchSubcollectionDocuments(); // Fetch date din subcolecție
        setItems(documents);  // Setează datele în starea locală
      } catch (error) {
        console.error("Eroare la obținerea documentelor: ", error);
      }
    };

    getItems();
  }, []);

  const [items, setItems] = useState([]);

  return(
    <>
      {userDetails?(
        <div className="card-list">
          {items.map(item => (
            <div key={item.id} className="card">
              <h2>{item.id}</h2>  
              <p>
                {item.nr}<br />
                {item.pret}  
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>...Loading</p>
      )}
    </>
  )
}

export default Stoc;