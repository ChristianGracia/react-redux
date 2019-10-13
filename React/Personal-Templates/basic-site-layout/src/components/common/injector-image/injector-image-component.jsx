import React from "react";
import { withRouter } from "react-router-dom";
import "./injector-image.styles.scss";

const InjectorImage = ({ history, imgUrl, title, linkUrl, subtitle }) => (
  <div className="injectors" onClick={() => history.push(`${linkUrl}`)}>
    <div
      className="injector-image"
      style={{
        backgroundImage: `url(
            ${imgUrl}
          )`,
        backgroundRepeat: "no-repeat"
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
);

export default withRouter(InjectorImage);
