import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

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

  const history = useHistory();

  const login = (e) => {
    //Abstract to a redux action later with loading state
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", formValues.credentials)
      .then((res) => {
        console.log("Login Response: ", res);
        localStorage.setItem("token", res.data.payload);
        history.push("/friends");
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
