import React, { useState } from "react";
import axios from 'axios';


const Login = (props) => {
  const initialState = {
      username: '',
      password: '',   
  }

  const [error, setError] = useState("")
  const [user, setUser] = useState(initialState)

  const handleChange = (e) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    })
  }

  // upon form submission, user state is sent to API, which, if username and password are correct, returns a token to store in localStorage.  If username or password are incorrect, an errormessage is displayed in the DOM
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/login', user)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubblepage/');
      })
      .catch(err => {
        console.log(err)
        setError("Username or Password not valid")
      })
    }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            data-testid="username"
            value={user.username}
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder="password"
            data-testid="password"
            value={user.password}
            onChange={handleChange}
          />
          <button>Login</button>
        </form>
      </div>
      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.