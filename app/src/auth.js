import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export function doSignOut() {
  alert('delogare');
  return auth.signOut();
};