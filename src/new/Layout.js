import { Switch, Route } from "react-router-dom";
import React from "react";
import MainPage from "/src/new/MainPage";
import SignInPage from "/src/new/SignInPage";
import ProfilePage from "/src/new/ProfilePage";
import Header from "/src/new/Header";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/sign-in">
            <SignInPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Layout;
