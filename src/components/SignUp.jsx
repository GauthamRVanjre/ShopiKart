import React, { useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';

function SignUp() {

  const [nameReg, setNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [cPasswordReg, setCPasswordReg] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const register = (e) => {
    e.preventDefault();

    if (nameReg && emailReg && passwordReg && (passwordReg === cPasswordReg)) {
      //posting to server 3001 (post /register route)
      Axios.post('http://localhost:3001/register',
        {
          name: nameReg,
          email: emailReg,
          password: passwordReg,
          cpassword: cPasswordReg
        }).then((response) => {
          console.log(response);
          if (response.data.message) {
            setRegisterStatus(response.data.message);
          }
        });
    }
    else {
      setRegisterStatus("password doesn't match");
    }

  };

  return (
    <div>
      <form className="container" onSubmit={register}>
        <input type="text" id="name" placeholder="Name" value={nameReg} onChange={(e) => setNameReg(e.target.value)} />
        <input type="email" id="email" placeholder="Email Address" value={emailReg} onChange={(e) => setEmailReg(e.target.value)} />
        <input type="password" id="password" placeholder="Password" value={passwordReg} onChange={(e) => setPasswordReg(e.target.value)} />
        <input type="password" id="Cpassword" placeholder="Confirm Password" value={cPasswordReg} onChange={(e) => setCPasswordReg(e.target.value)} />
        <button>Sign Up</button>
        <p>
          Have an account?<Link to="/SignIn"> Sign In</Link>
        </p><br /><br />
        <h3>{registerStatus}</h3>
      </form>
    </div>
  );
}

export default SignUp;
