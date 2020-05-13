import React, { Component } from "react";
import "./Directory.styles.scss";
import MenuItem from "../meni-item/MenuItem";
export class Directory extends Component {
  state = {
    sections: [
      {
        title: "hats",
        image: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
      },
      {
        title: "jackets",
        image: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
      },
      {
        title: "sneakers",
        image: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
      },
      {
        title: "womens",
        image: "https://i.ibb.co/GCCdy8t/womens.png",
        id: 4,
        size: "large",
      },
      {
        title: "mens",
        image: "https://i.ibb.co/R70vBrQ/menss.png",
        id: 5,
        size: "large",
      },
    ],
  };
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          <MenuItem
            key={section.id}
            title={section.title}
            image={section.image}
            size={section.size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
