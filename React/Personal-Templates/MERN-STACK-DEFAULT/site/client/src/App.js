import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/landing-page/landing-page.component";
import LoginPage from "./pages/login-page/login-page.component";
import AboutPage from "./pages/about-page/about-page.component";
// import RegisterPage from "./pages/register-page/register-page.component";
import DashboardPage from "./pages/dashboard-page/dashboard-page.component";

import Header from "./components/header/header.component";

import PrivateRoute from "./components/common/private-route/private-route-component";

function App() {
  return (
    <div className="App" style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <Route exact path="/" component={LandingPage} />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        {/* <Route exact path="/register" component={RegisterPage} /> */}
        <Route exact path="/about" component={AboutPage} />
      </Switch>
      {/* for local */}
      {/* <Route exact path="/dashboard" component={DashboardPage} /> */}

      {/* for heroku */}
      <Switch>
        <PrivateRoute exact path="/dashboard" component={DashboardPage} />
      </Switch>
    </div>
  );
}

export default App;
