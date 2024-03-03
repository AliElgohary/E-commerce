import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../store/action/themeAction";
function Navbar() {
  const language = useSelector((state) => state.language.language);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const changeMyTheme = () => {
    dispatch(changeTheme(theme === 'dark' ? 'light' : 'dark'));
  };
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/add">
            ADD
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/fun">
            Function Component
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <p className="nav-link">{language}</p>
        </li>
        <li className="nav-item">
          <button className="btn btn-info" onClick={() => changeMyTheme()}>
          {theme === 'light' ? 'light theme' : 'dark theme'}
          </button>
        </li>
      </ul>
    </>
  );
}
export default Navbar;
