import React from 'react';
import './login.css';
import { useState } from 'react';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const  login=(e)=>{
    e.preventDefault();

    let items = {email, password}
    console.log(items);

    axios.post('https://a60a-103-247-4-237.ngrok.io/api/login/', items, {
      Method: 'POST',
      Headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      data: {
        "email": "",
        "password": ""
      }
    })
      .then((response) => {

        console.log(response.data);
        localStorage.setItem("apiData", JSON.stringify(response.data));


        if (response.status === 200) {
          setEmail('');
          setPassword('');
          console.log("Data Send Successful")
        }
        

      }).catch(error => {
        console.log(error)
        if (error.response.status === 500) {
          alert(error.response.data.email);
        }

      });



  }

  return (
    <div>
      <h1>Login Page</h1>

      <div className="col-sm-6 offset-sm-3">
        <form method="post">
          Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
          <br />
          Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
          <br />

          <button onClick={login}>Login</button>


        </form>


      </div>
    </div>
  )
}

export default Login;