import React, { useContext } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { tokenContext } from "../../Context/tokenContext";

const Login = () => {
  let navigate = useNavigate();
  let {setToken} = useContext(tokenContext)
  async function login(values) {
    try {
      let { data } = await axios.post(
        "http://localhost:5000/users/signin",
        values
      );
      if (data.message === "Login successful") {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        navigate("/");
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .matches(new RegExp("^[a-zA-Z0-9]{6,30}$"), "Invalid password")
      .required("Required"),
  });

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: login,
  });

  return (
    <div className="w-50 h-100 mx-auto">
      <br />
      <br />
      <form onSubmit={loginForm.handleSubmit} className="my-auto">
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={loginForm.values.email}
            onBlur={loginForm.handleBlur}
            onChange={loginForm.handleChange}
            className="form-control"
            id="email"
          />
          {loginForm.touched.email && loginForm.errors.email ? (
            <div className="alert alert-danger">{loginForm.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={loginForm.values.password}
            onBlur={loginForm.handleBlur}
            onChange={loginForm.handleChange}
            className="form-control"
            id="password"
          />
          {loginForm.touched.password && loginForm.errors.password ? (
            <div className="alert alert-danger">
              {loginForm.errors.password}
            </div>
          ) : null}
        </div>

        <button type="submit" className="btn btn-info">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
