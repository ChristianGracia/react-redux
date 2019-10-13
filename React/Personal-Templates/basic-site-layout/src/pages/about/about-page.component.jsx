import React from "react";
import "./about-page.styles.scss";
import Injectors from "../../components/injectors/injectors.component";

const AboutPage = () => (
  <div>
    <div className="col-sm about-header">
      <h1>Our Team</h1>
      <p>
        At Adc Spa, we have a team of highly trained nurses who specialize in
        facial aesthetics, that will work with you to get the results you want!
      </p>
    </div>
    <Injectors />
  </div>
);
export default AboutPage;
