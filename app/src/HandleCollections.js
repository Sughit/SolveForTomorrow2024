import { collection, doc, getDocs, getDoc } from 'firebase/firestore';
import { db, auth } from './firebase';

export const fetchSubcollectionDocuments = async () => {
  try {
    var userDetails = null;
    const docRef = doc(db, "Users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        userDetails = docSnap.data();
    }
    var collectionRef = null;
    const catenaDoc = doc(db, 'Stoc', 'catena');
    const donaDoc = doc(db, 'Stoc', 'dona');
    const drmaxDoc = doc(db, 'Stoc', 'drmax');
    const helpnetDoc = doc(db, 'Stoc', 'helpnet');
    const catenaRef = collection(catenaDoc, 'produse');
    const donaRef = collection(donaDoc, 'produse');
    const drmaxRef = collection(drmaxDoc, 'produse');
    const helpnetRef = collection(helpnetDoc, 'produse');
  
    function getCollection(){
      if(userDetails)
      {
        console.log(userDetails.farmacie)
        switch(userDetails.farmacie)
        {
          case 'catena':
            collectionRef = catenaRef;
          break;
          case 'dona':
            collectionRef = donaRef;
          break;
          case 'drmax':
            collectionRef = drmaxRef;
          break;
          case 'helpnet':
            collectionRef = helpnetRef;
          break;
        }
      }
    }
    getCollection();
    // Obține documentele din subcolecție
    const querySnapshot = await getDocs(collectionRef);
    const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return documents; // Returnează documentele sub formă de array
  } catch (error) {
    console.error("Eroare la obținerea documentelor din subcolecție: ", error);
    throw error; // Aruncă eroarea pentru a o gestiona la nivelul apelului
  }
};