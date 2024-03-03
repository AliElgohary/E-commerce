import { useEffect, useState } from "react";

function AppFunctionComponent() {
  const [user, setUser] = useState({
    name: "Ali",
    age: 26,
    city: "Cairo",
    admin: false,
  });
  useEffect(() => {
    console.log("component did amount");
  }, []);

  useEffect(() => {
    console.log("component did update");
  }, [user.age]);

  useEffect(() => {
    return console.log("component did update");
  }, [user.age]);

  const changeInfo = () =>
    setUser({
      ...user,
      age: 22,
    });

  return (
    <>
      {user.admin ? (
        <button
          type="submit"
          onClick={() => {
            changeInfo("mahmoud");
          }}
        >
          Submit
        </button>
      ) : (
        "This is a regular user"
      )}
      {!user.admin && <h1>this is coditional rendering </h1>}

      <h1> welcome {user.name} </h1>
      <h3>age : {user.age}</h3>
      <h3>city : {user.city}</h3>
    </>
  );
}
export default AppFunctionComponent;
