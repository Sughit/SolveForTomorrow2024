import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
      window.location.href = "/";
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };
  return(
    <>
    <br /><br /><br /><br />
      <div className="container">
        <div className="box form-box">
          <header>Înregistrează-te</header>
            <form onSubmit={handleSubmit}>
              <div className="field input">
                <label>Email</label>
                <input 
                 type="email" 
                 autocomplete="off" 
                 required 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="field input">
                <label>Parolă</label>
                <input 
                 type="password" 
                 autocomplete="off" 
                 required 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="field">
                <button type="submit" className="submit-btn">Trimite</button>
              </div>                                
            </form>
        </div>
      </div>
    </>
  );
};

export default Login;