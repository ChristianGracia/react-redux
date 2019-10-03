import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ServicePage from "./pages/services/services-page.component";
import AboutPage from "./pages/about/about-page.component";
import ContactPage from "./pages/contact/contact-page.component";
import Header from "./components/nav/header/header.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/services" component={ServicePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/fillers" component={ServicePage} />
        <Route exact path="/botox" component={ServicePage} />
      </Switch>
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 30,
          color: "red"
        }}
      >
        <p style={{ color: "#000" }}>
          --------------------temporary--------------------
        </p>
        <p>made by Christian Gracia</p>
        <a style={{ color: "green" }} href="http://www.christiangracia.com">
          christiangracia.com
        </a>
        <p style={{ color: "#000" }}>
          --------------------temporary---------------------
        </p>
      </div>
    </div>
  );
}

export default App;
