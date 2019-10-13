import React from "react";
import Products from "../../components/products/products.component";
import ContactBar from "../../components/contact-bar/contact-bar.component";
import "./homepage.styles.scss";
const HomePage = () => (
  <div className="homepage">
    <ContactBar />
    <Products />
  </div>
);
export default HomePage;
