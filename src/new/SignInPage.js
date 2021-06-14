import React from "react";

class SignInPage extends React.Component {
  localStoragePlus() {
    const login = document.getElementById("Login").value;
    const password = document.getElementById("Password").value;
    if (login !== "" && password !== "") {
      localStorage.setItem("Login", login);
      localStorage.setItem("Password", password);
      alert("Данные получены");
    } else alert("Введите данные");
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-5 col-md-5">
              <input
                className="form-control"
                type="text"
                placeholder="Login"
                id="Login"
              />
              <input
                className="form-control"
                type="password"
                id="Password"
                placeholder="Password"
              />
              <button
                type="button"
                className="btn btn-success"
                onClick={() => this.localStoragePlus()}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInPage;
