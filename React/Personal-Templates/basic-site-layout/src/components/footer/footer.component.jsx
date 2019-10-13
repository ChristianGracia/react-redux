import React from "react";

const Footer = () => (
  <div
    style={{
      textAlign: "center",

      fontSize: 20,
      color: "#000",
      marginTop: 100
    }}
  >
    <p>
      In partnership with{" "}
      <a
        style={{ color: "#114260", fontWeight: "bold" }}
        href="http://www.adcofnorton.com"
      >
        Advanced Dental Care of Norton
      </a>
    </p>
    <p>
      Site written by Christian Gracia{" "}
      <a
        style={{ color: "#114260", fontWeight: "bold" }}
        href="http://www.christiangracia.com"
      >
        christiangracia.com
      </a>
    </p>
  </div>
);

export default Footer;
