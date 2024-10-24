import React, { useEffect, useState } from 'react';
import './stoc.css';
import { auth, db } from "./firebase.js";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";

function Stoc(){
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

    const catenaRef = collection(db, 'Stoc/catena/produse');
    const donaRef = collection(db, 'Stoc/donaRef/produse');
    const drmaxRef = collection(db, 'Stoc/drmaxRef/produse');
    const helpnetRef = collection(db, 'Stoc/helpnetRef/produse');

    const getCollection = () =>{
      if(userDetails)
      {
        switch(userDetails.farmacie)
        {
          case 'catena':
            return catenaRef;
          break;
          case 'dona':
            return donaRef;
          break;
          case 'drmax':
            return drmaxRef;
          break;
          case 'helpnet':
            return helpnetRef;
          break;
        }
      }
    }

    useEffect(() => {
      fetchUserData();
    }, []);

    const dataToShow = () => {
      if(userDetails) return <>{userDetails.farmacie}</>;
      return <p>...Loading</p>
    }
  return(
    <>
      {dataToShow()}
    </>
  )
}

export default Stoc;