import { MapTo } from "@adobe/aem-react-editable-components";
import React, { Component } from "react";

require("./MyCard.scss");

export const MyCardEditConfig = {
  emptyLabel: "My Card",
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1;
  },
};

class MyCard extends Component {
  get image() {
    return (
      <div>
        <img
          className="master_image"
          src={this.props.src}
          alt={this.props.src}
          style={{ width: "100%" }}
        />
      </div>
    );
  }
  get title() {
    return <h1 className="mas_name">{this.props.title}</h1>;
  }
  get description() {
    return <p className="mas_text">{this.props.description}</p>;
  }

  render() {
    return (
      <div className="card-container">
        <div className="card-left">{this.image}</div>
        <div className="card-right">
          {this.title}
          {this.description}
        </div>
      </div>
    );
  }
}

export default MapTo("wknd-spa-react/components/mycard")(
  MyCard,
  MyCardEditConfig
);
