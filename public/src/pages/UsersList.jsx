import { useEffect, useState } from "react";
import axios from "axios";
function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((d) => {
        setUsers(d.data);
        console.log(d.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {users.map((e, i) => {
        return (
          <div key={i} className="container">
            <ul>
            <li>{e.email}</li>
            <li>{e.username}</li>
            </ul>
          </div>
        );
      })}
      <h1>this is user List</h1>
    </>
  );
}

export default UsersList;
