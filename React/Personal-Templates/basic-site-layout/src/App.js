import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/nav/header/header.component";
import Footer from "./components/footer/footer.component";
// pages
import HomePage from "./pages/homepage/homepage.component";
import ServicePage from "./pages/services/services-page.component";
import AboutPage from "./pages/about/about-page.component";
import ContactPage from "./pages/contact/contact-page.component";
// services
import Botox from "./pages/products/botox/botox.component";
import Fillers from "./pages/products/fillers/fillers.component";
import OtherServices from "./pages/products/other-services/other-services.component";
import Sculptra from "./pages/products/sculptra/sculptra.component";
import MicroNeedling from "./pages/products/micro-needling/micro-needling.component";
import Kybella from "./pages/products/kybella/kybella.component";
//nurses
import Nurse1 from "./pages/injectors/nurse1/nurse1.component";
import Nurse2 from "./pages/injectors/nurse2/nurse2.component";
import Physician from "./pages/injectors/physician/physician.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* Pages */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/services" component={ServicePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        {/* Services */}
        <Route exact path="/fillers" component={Fillers} />
        <Route exact path="/botox" component={Botox} />
        <Route exact path="/other-services" component={OtherServices} />
        <Route exact path="/kybella" component={Kybella} />
        <Route exact path="/sculptra" component={Sculptra} />
        <Route exact path="/micro-needling" component={MicroNeedling} />
        {/* Nurses */}
        <Route exact path="/angelina" component={Nurse1} />
        <Route exact path="/miranda" component={Nurse2} />
        <Route exact path="/ami" component={Physician} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
