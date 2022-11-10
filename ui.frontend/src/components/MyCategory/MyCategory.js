import { MapTo } from "@adobe/aem-react-editable-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";

require("./MyCategory.scss");

export const MyCategoryEditConfig = {
  emptyLabel: "My category",
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1;
  },
};

class MyCategory extends Component {
  get image() {
    return (
      <div>
        <img
          className="category-image"
          src={this.props.src}
          alt={this.props.src}
          style={{ width: "100%" }}
        />
      </div>
    );
  }
  get title() {
    return <h1 className="category-title">{this.props.title}</h1>;
  }
  get btntext() {
    return this.props.btntext;
  }
  get btnlink() {
    return this.props.btnlink;
  }

  render() {
    return (
      <div className="category-container">
        <div className="category-top">{this.title}</div>
        <div className="category-middle">{this.image}</div>
        <div className="category-bottom">
          <Link className="category-link" to={this.btnlink}>
            {this.btntext}
          </Link>
        </div>
      </div>
    );
  }
}

export default MapTo("wknd-spa-react/components/mycategory")(
  MyCategory,
  MyCategoryEditConfig
);
