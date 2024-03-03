import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
function AddUser() {
  const [data, setData] = useState({
    name: "",
    position: "",
  });

  const [errors, setError] = useState({
    nameErr: "",
    positionErr: "",
  });

  const handleData = (e) => {
    if (e.target.name === "name") {
      setData({
        ...data,
        name: e.target.value,
      });
      setError({
        ...errors,
        nameErr:
          e.target.value.length === 0
            ? "This is required"
            : e.target.value.length < 3 &&
              "This should be more than 3 characters",
      });
    } else if (e.target.name === "position") {
      setData({
        ...data,
        position: e.target.value,
      });
      setError({
        ...errors,
        positionErr:
          e.target.value.length === 0
            ? "This is required"
            : e.target.value.length < 6 &&
              "This should be more than 6 characters",
      });
    }
  };

  const history = useHistory()


  const param = useParams()
  console.log(param.id)
  const submitData = (e) => {
    e.preventDefault()
    if(!errors.nameErr && !errors.positionErr){
        console.log("thank you");
        history.push('/')
    }
  };

  return (
    <>
      <div className="container w-50 my-5">
        <h1 className="text-success">My Form</h1>
        <form onSubmit={(e) => submitData(e)}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className={`form-control ${errors.nameErr && "border-danger"}`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={data.name}
              name="name"
              onChange={(e) => handleData(e)}
            />
            <small className="text-danger">{errors.nameErr}</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className={`form-control ${
                errors.positionErr && "border-danger"
              }`}
              id="exampleInputPassword1"
              placeholder="Password"
              value={data.position}
              onChange={(e) => handleData(e)}
              name="position"
            />
            <small className="text-danger">{errors.positionErr}</small>
          </div>
          <button
            type="submit"
            disabled={errors.nameErr || errors.positionErr}
            className="btn btn-info my-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default AddUser;
