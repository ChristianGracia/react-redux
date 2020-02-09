import React from "react";
import logo from "../../assets/logo.png";
import "./landing-page.styles.scss";
// import ContentGrid from "../../components/grid/grid-component";
import Signature from "../../components/common/signature/Signature.component";
import { Wave } from "react-animated-text";
import JoinEmailList from "../../components/join-email-list/join-email-list.component";
import Bounce from "react-reveal/Bounce";
import LazyLoad from "react-lazyload";
import { Button } from "react-bootstrap";

const LandingPage = () => (
  <div
    style={{
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      fontSize: 30
    }}
  >
    <p>Cable Carrier Site</p>
    <p>See Configuration page for form</p>
  </div>
);
export default LandingPage;
