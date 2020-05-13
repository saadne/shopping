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
        linkUrl: "shop",
      },
      {
        title: "jackets",
        image: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "",
      },
      {
        title: "sneakers",
        image: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: "",
      },
      {
        title: "womens",
        image: "https://i.ibb.co/GCCdy8t/womens.png",
        id: 4,
        size: "large",
        linkUrl: "",
      },
      {
        title: "mens",
        image: "https://i.ibb.co/R70vBrQ/menss.png",
        id: 5,
        size: "large",
        linkUrl: "",
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
            linkUrl={section.linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
