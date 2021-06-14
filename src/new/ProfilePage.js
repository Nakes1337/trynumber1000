import React from "react";
import { Redirect } from "react-router";

class ProfilePage extends React.Component {
  Login() {
    return localStorage.getItem("Login");
  }
  Password() {
    return localStorage.getItem("Password");
  }

  render() {
    return (
      <div className="col-6 col-sm-5 col-md-5">
        <div className="card">
          {this.Login() === null ? <Redirect to="/" /> : null}

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>Данные пользователя</h3>
            </li>
            <li className="list-group-item">
              <b>Login: </b> {this.Login()}
            </li>
            <li className="list-group-item">
              {" "}
              <b>Password:</b> {this.Password()}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
