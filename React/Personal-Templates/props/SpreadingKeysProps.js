import React, { Component } from "react";
import "./shop-page.styles.scss";
import ShopData from "./shop.data";
import ViewStore from "../../components/view-store/view-store.component";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData
    };
  }
  render() {
    return (
      <div className="shop-page">
        <span>Shop Page</span>
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <ViewStore key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
