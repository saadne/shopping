import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import Collections from "../../collections/Collections";

export class Shop extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherCollectionsProps }) => (
          <Collections key={id} {...otherCollectionsProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
