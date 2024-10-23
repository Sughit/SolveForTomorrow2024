import React, { useState } from 'react';
import './App.css';
import { doSignInWithEmailAndPassword } from './auth.js'
import { useAuth } from './firebaseContext.js'

const Login = () => {
  const userLoggedIn = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (e) => {
      e.preventDefault()
      if(!isSigningIn) {
          setIsSigningIn(true)
          await doSignInWithEmailAndPassword(email, password)
      }
  }
  return(
    <>
    <br /><br /><br /><br />
      <div className="container">
        <div className="box form-box">
          <header>Înregistrează-te</header>
            <form id="form" onSubmit={onSubmit}>
              <div className="field input">
                  <label for="email">Email</label>
                  <input type="email" 
                    name="email" 
                    id="emailInput" 
                    autocomplete="off" 
                    required 
                    value={email} onChange={(e) => { setEmail(e.target.value) }}
                  />
              </div>
              <div className="field input">
                  <label for="password">Parolă</label>
                  <input 
                   type="password" 
                   name="password" 
                   id="passwordInput" 
                   autocomplete="off" 
                   required
                   value={password} onChange={(e) => { setPassword(e.target.value) }} 
                  />
              </div>
              <div className="field">
                <input 
                  type="submit" 
                  className="submit-btn" 
                  name="submit" 
                  value="Trimite" 
                  required 
                  id="login" 
                />
              </div>                                
            </form>
        </div>
      </div>
    </>
  );
};

export default Login;