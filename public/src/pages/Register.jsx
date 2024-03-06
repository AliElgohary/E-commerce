import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const RegistrationForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const history = useHistory(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userName || !email || !password || !street || !city || !state) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/users", {
        userName,
        email,
        password,
        address: [{
          street,
          city,
          state
        }]
      });
      if (response.data.message === "added") {
        console.log("Registration successful:", response.data.user);
        setSuccess("Registration successful. Redirecting to login...");
        history.push('/login');
      } else {
        setError("Registration failed. Please try again later.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("Registration failed. Please try again later.");
    }
  };
  

  return (
    <div className="container w-50 my-5">
      <h1 className="text-success">Register</h1>
      {success && <div style={{ color: "green" }}>{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group my-4">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            className="form-control"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group my-4">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group my-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group my-4">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            placeholder="Street"
            value={street}
            className="form-control"
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className="form-group my-4">
          <label htmlFor="city">City</label>
          <input
            type="text"
            placeholder="City"
            value={city}
            className="form-control"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group my-4">
          <label htmlFor="state">State</label>
          <input
            type="text"
            placeholder="State"
            value={state}
            className="form-control"
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit" className="btn btn-primary my-2">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
