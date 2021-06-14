import { Link } from "react-router-dom";
import React from "react";

class Header extends React.Component {
  LocalStoradgdel() {
    localStorage.clear();

    window.location.reload();
  }
  render() {
    return (
      <div>
        <nav>
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link to="/">Main</Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-in"> Sign In</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile">Profile</Link>
            </li>

            <li className="nav-item">
              <button
                label="delete akk"
                className="btn btn-outline-dark"
                onClick={() => this.LocalStoradgdel()}
              >
                delete account
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
