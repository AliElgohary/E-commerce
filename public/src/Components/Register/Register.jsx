import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

const Register = () => {
  const formValues = {};
  let navigate = useNavigate();

  async function register(values) {
    try {
      let { data } = await axios.post("http://localhost:5000/users", values);
      if (data.message === "added") {
        navigate("/auth/login");
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  }

  const validationSchema = Yup.object({
    userName: Yup.string()
      .defined()
      .min(6, "Too short")
      .max(20, "Too long")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .matches(new RegExp("^[a-zA-Z0-9]{6,30}$"), "Invalid password")
      .required("Required"),
    street: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
  });

  const registerForm = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      street: "",
      city: "",
      state: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      formValues.userName = values.userName;
      formValues.email = values.email;
      formValues.password = values.password;
      formValues.address = [
        { street: values.street, city: values.city, state: values.state },
      ];
      register(formValues);
    },
  });

  return (
    <div className="w-50 mx-auto">
      <form onSubmit={registerForm.handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            value={registerForm.values.userName}
            onBlur={registerForm.handleBlur}
            onChange={registerForm.handleChange}
            className="form-control"
            id="userName"
          />
          {registerForm.touched.userName && registerForm.errors.userName ? (
            <div className="alert alert-danger">
              {registerForm.errors.userName}
            </div>
          ) : null}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={registerForm.values.email}
            onBlur={registerForm.handleBlur}
            onChange={registerForm.handleChange}
            className="form-control"
            id="email"
          />
          {registerForm.touched.email && registerForm.errors.email ? (
            <div className="alert alert-danger">
              {registerForm.errors.email}
            </div>
          ) : null}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={registerForm.values.password}
            onBlur={registerForm.handleBlur}
            onChange={registerForm.handleChange}
            className="form-control"
            id="password"
          />
          {registerForm.touched.password && registerForm.errors.password ? (
            <div className="alert alert-danger">
              {registerForm.errors.password}
            </div>
          ) : null}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="state">State</label>
          <input
            type="text"
            value={registerForm.values.state}
            onBlur={registerForm.handleBlur}
            onChange={registerForm.handleChange}
            className="form-control"
            id="state"
          />
          {registerForm.touched.state && registerForm.errors.state ? (
            <div className="alert alert-danger">
              {registerForm.errors.state}
            </div>
          ) : null}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="city">City</label>
          <input
            type="text"
            value={registerForm.values.city}
            onBlur={registerForm.handleBlur}
            onChange={registerForm.handleChange}
            className="form-control"
            id="city"
          />
          {registerForm.touched.city && registerForm.errors.city ? (
            <div className="alert alert-danger">{registerForm.errors.city}</div>
          ) : null}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            value={registerForm.values.street}
            onBlur={registerForm.handleBlur}
            onChange={registerForm.handleChange}
            className="form-control"
            id="street"
          />
          {registerForm.touched.street && registerForm.errors.street ? (
            <div className="alert alert-danger">
              {registerForm.errors.street}
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

export default Register;
