import React from "react";
import { withRouter } from "react-router-dom";
import "./products.styles.scss";

import ProductImage from "../common/product-image/product-image.component";

const Products = () => (
  <div className="row">
    <ProductImage
      imgUrl="https://www.lakeshoreplasticsurgery.com/images/medspa/services/botox.jpg"
      title="Botox"
      linkUrl="botox"
    />
    <ProductImage
      imgUrl="http://riomedical.net/wp-content/uploads/2016/01/dermal-fillers.jpg"
      title="Fillers"
      linkUrl="fillers"
    />
    <ProductImage
      imgUrl="https://beautytherapyinstitute.co.za/wp-content/uploads/2017/03/BTI-1200x600.jpg"
      title="Micro-Needling"
      linkUrl="micro-needling"
    />
    <ProductImage
      imgUrl="https://www.mykybella.com/~/media/Unique%20Sites/MyKybella/Images/AboutKB/AboutKybella.png"
      title="Kybella"
      linkUrl="kybella"
    />
    <ProductImage
      imgUrl="https://www.renewalskinspa.com/wp-content/uploads/Sculptra-Filler-Treatment-1024x687.jpg"
      title="Sculptra"
      linkUrl="sculptra"
    />
    <ProductImage
      imgUrl="https://thelastminuteblog.com/wp-content/uploads/Dental-Emergencies12-1024x683.jpg"
      title="Other"
      linkUrl="other-services"
    />
  </div>
);

export default withRouter(Products);
