import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { loginFailure, loginSuccess } from "../store/action/authActions";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/users/signin", {
        email,
        password,
      });
      if (response.data.message !== "Login successful") {
        throw new Error("Login failed");
      }
      dispatch(loginSuccess(response.data.token));
    } catch (error) {
      console.error("Login error:", error);
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <div className="container w-50 my-5" style={{height: "100%"}}>
      <h1 className="text-success">My Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
