import React from "react";
import "./contact-bar.styles.scss";

const ContactBar = () => (
  <div
    className="container"
    style={{
      flex: 1,
      justitfyContent: "center",
      alignItems: "center",
      flexWrap: "wrap"
    }}
  >
    <div>
      <a className="social" href="https://www.instagram.com/adc_of_norton/">
        <i className="fab fa-instagram"></i>
      </a>
      <span style={{ padding: "1vw" }}></span>
      <a
        className="social"
        href="https://www.facebook.com/AdvancedDentalCareofNorton/"
      >
        <i className="fab fa-facebook"></i>
      </a>
      <span style={{ padding: "1vw" }}></span>
      <a className="social" href="https://twitter.com/DrAlvaroGracia">
        <i className="fab fa-twitter"></i>
      </a>

      <span style={{ padding: "1vw" }}></span>
    </div>

    <span style={{ color: "#114260", fontWeight: "bold" }} className="call-now">
      Book now! <a href="tel:508-285-9333">(508) 285-9333</a>
    </span>
  </div>
);
export default ContactBar;
