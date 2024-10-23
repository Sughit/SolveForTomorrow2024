import React from 'react';
import './App.css';

function Login(){
  return(
    <>
    <br /><br /><br /><br />
      <div className="container">
        <div className="box form-box">
          <header>Înregistrează-te</header>
            <form id="form">
              <div className="field input">
                  <label for="email">Email</label>
                  <input type="text" name="email" id="emailInput" autocomplete="off" required />
              </div>
              <div className="field input">
                  <label for="password">Parolă</label>
                  <input type="text" name="password" id="passwordInput" autocomplete="off" required />
              </div>
              <div className="field">
                  <input type="submit" className="submit-btn" name="submit" value="Trimite" required id="login" />
              </div>                                
            </form>
        </div>
      </div>
    </>
  );
};

export default Login;