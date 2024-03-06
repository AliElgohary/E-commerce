import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/action/authActions"; // Import logout action

function Navbar() {
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <>
      <ul className="nav justify-content-center text-light">
        <li className="nav-item ">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
        </li>
        {isAuthenticated ? (
          <li className="nav-item">
            <button className="nav-link" onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        )}
      </ul>
    </>
  );
}

export default Navbar;
