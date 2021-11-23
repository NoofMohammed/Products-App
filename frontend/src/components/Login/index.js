import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const login = () => {
    if (email && password) {
      axios
        .post("http://localhost:5000/login", {
          email,
          password,
        })
        .then((result) => {
          console.log(result.data, "llllll");
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("userId", result.data.user.id);
          history.push("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
