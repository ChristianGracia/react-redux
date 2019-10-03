import React from "react";
import { withRouter } from "react-router-dom";

const ProductImage = ({ history, match, imgUrl, title, linkUrl }) => (
  <div
    className="menu-item"
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(
            ${imgUrl}
          )`,
        backgroundRepeat: "no-repeat"
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Learn more</span>
    </div>
  </div>
);

export default withRouter(ProductImage);
