import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const initialFormValues = {
    credentials: {
      username: "",
      password: "",
    },
  };
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChanges = (e) => {
    setFormValues({
      credentials: {
        ...formValues.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", formValues.credentials)
      .then((res) => {
        console.log("Login Response: ", res);
        localStorage.setItem("token", res.data.payload);
      })
      .catch((err) => {
        console.log("Login Err: ", err);
        //later flip a state flag true to display error message
      });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={login}>
        <div className="input-div">
          <label htmlFor="username" />
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formValues.credentials.username}
            onChange={handleChanges}
          />
        </div>

        <div className="input-div">
          <label htmlFor="password" />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formValues.credentials.password}
            onChange={handleChanges}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
