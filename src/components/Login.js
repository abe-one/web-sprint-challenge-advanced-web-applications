import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const initialCredentials = {
    username: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(initialCredentials);
  const [error, setError] = useState("");

  const { push } = useHistory();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/login`, credentials)
      .then((res) => {
        window.localStorage.setItem("tToken", JSON.stringify(res.data.payload));
        push("/bubbles");
      })
      .catch((err) => {
        setError(err.response.data.error);
      })
      .finally(() => {});
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Username"
            data-testid="username"
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">
        {error}
      </p>
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
