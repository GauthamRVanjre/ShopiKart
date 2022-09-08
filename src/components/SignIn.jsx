import React, { useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function SignIn() {

  const history = useHistory();
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/login',
      {
        email: emailLog,
        password: passwordLog
      }).then((response) => {
        console.log(response);
        if (response.data.message === "Login Successful") {
          setLoginStatus(response.data.message);
          history.push('/Home');
        }
        else {
          setLoginStatus(response.data.message);
        }
      });
  };

  return (
    <div>
      <form onSubmit={login} className="container">
        <input type="email" id="mail" placeholder="Email Address" value={emailLog} onChange={(e) => setEmailLog(e.target.value)} />
        <input type="password" id="password" placeholder="Password" value={passwordLog} onChange={(e) => setPasswordLog(e.target.value)} />
        <button >Sign In</button>
        <p>
          <Link to="/Forgotpass">Forgot Password? </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/">Sign Up</Link>
        </p><br /><br />
        <h4>{loginStatus}</h4>
      </form>
    </div>
  );
}

export default SignIn;
