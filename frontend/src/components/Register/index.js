import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, group, Button } from "react-bootstrap";
import "./register.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    if (firstName && lastName && address && email && password) {
      axios
        .post("http://localhost:5000/user", {
          firstName,
          lastName,
          address,
          email,
          password,
        })
        .then((result) => {
          console.log(result.data, "result.data");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div>
        <form>
          <div className="form-group">
            <label>FirstName</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="FirstName"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>LastName</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="LastName"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
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

          <button type="submit" className="btn btn-primary" onClick={register}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Register;
