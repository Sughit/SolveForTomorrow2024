import React, { useEffect, useState } from 'react';
import './stoc.css';
import { auth, db } from "./firebase.js";
import { doc, getDoc } from "firebase/firestore";

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