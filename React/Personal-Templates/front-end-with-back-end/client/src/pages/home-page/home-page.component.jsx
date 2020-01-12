import React from "react";
import logo from "../../assets/logo.png"
import "./home-page.styles.scss";
// import ContentGrid from "../../components/grid/grid-component";
import Signature from "../../components/common/signature/Signature.component";
import { Wave } from 'react-animated-text';
import JoinEmailList from "../../components/join-email-list/join-email-list.component"
import Bounce from "react-reveal/Bounce";
import LazyLoad from "react-lazyload";

const HomePage = () => (
  <div style={{ justifyContent: "center", alignItems: "center" }}>
    <div className="backgroundImage" style={{ width: "100%", height: "90vh" }}></div>


    <div style={{ marginTop: 30 }}>
      <Signature />
    </div>
  </div>

);
export default HomePage;
