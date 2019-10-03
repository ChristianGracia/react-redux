import React from "react";
import ContactBar from "../contact-bar/contact-bar.component";
import NavBar from "../navbar/navbar.component";
import HomeHeader from "../home-header/home-header.component";

const Header = () => (
  <div>
    <ContactBar />
    <HomeHeader />
    <NavBar />
  </div>
);

export default Header;
