import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Hats",
          imageUrl:
            "https://www.kangol.com/media/wysiwyg/kangol/homepage/blocks/ss19/SS19_MOBILE_MEN.jpg",
          id: 1,
          linkUrl: "shop/hats"
        },
        {
          title: "Jackets",
          imageUrl:
            "https://images.thejacketmaker.com/TJM_0399_smartly_Square-1492000021395.jpg",
          id: 2,
          linkUrl: "shop/jackets"
        },
        {
          title: "Sneakers",
          imageUrl: "https://i.redd.it/kxfcoubfc2gz.jpg",
          id: 3,
          linkUrl: "shop/sneakers"
        },
        {
          title: "Womens",
          imageUrl: "https://data.whicdn.com/images/66048928/original.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens"
        },
        {
          title: "Mens",
          imageUrl:
            "https://snusercontent.global.ssl.fastly.net/member-profile-full/67/1731567_4923774.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/mens"
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
