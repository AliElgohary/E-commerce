import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link , Outlet} from "react-router-dom";

const Setting = () => {
  return (
    <div className="container">
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Settings
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <li>
            <Link to="app">
              <span>App setting</span>
            </Link>
          </li>
          <li>
            <Link to="profile">
              <span>Profile setting</span>
            </Link>
          </li>
          <li>
            <Link to="web">
              {" "}
              <span>Web setting</span>
            </Link>
          </li>
        </Dropdown.Menu>
      </Dropdown>
      </div>
      <div>
        <br /><br /><br />
        <br /><br />
      <Outlet />
      </div>
    </div>
  );
};
export default Setting;
