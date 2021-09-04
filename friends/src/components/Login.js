import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    setFormValues(initialFormValues);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
