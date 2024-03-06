import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom"; // Import useHistory and Link
import axios from "axios";
import { loginFailure, loginSuccess } from "../store/action/authActions";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/users/signin", {
        email,
        password,
      });
      console.log(response.data.message)
      if (response.data.message === "Please verify your account") {
        setError("Please activate your account, check your email");
        return;
      }
      if (response.data.message !== "Login successful") {
        throw new Error("Wrong Credentials");
      }
      dispatch(loginSuccess(response.data.token));
      history.push("/products");
    } catch (error) {
      console.error("Login error:", error);
      dispatch(loginFailure(error.message));
      setError("Wrong credentials, please try again");
    }
  };

  return (
    <div className="container w-50 my-5" style={{ height: "100%" }}>
      <h1 className="text-success">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-4">
          <label htmlFor="email">Email address</label>
          <input
            type="email" // Change type to email
            placeholder="Email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group my-4">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit" className="btn btn-primary my-2">
          Login
        </button>
      </form>

      <div className="mt-3">
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
