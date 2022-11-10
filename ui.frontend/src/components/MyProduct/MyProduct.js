import { MapTo } from "@adobe/aem-react-editable-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Timer from "../Timer/Timer";

require("./MyProduct.scss");

export const MyProductEditConfig = {
  emptyLabel: "My Product",
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1;
  },
};

class MyProduct extends Component {
  get image() {
    return (
      <img
        src={this.props.src}
        alt={this.props.src}
        style={{ width: "100%" }}
      />
    );
  }
  get btntext() {
    return this.props.btntext;
  }
  get title() {
    return this.props.title;
  }
  get price() {
    return this.props.price;
  }
  get btnlink() {
    return this.props.btnlink;
  }

  get date() {
    const d = new Date(this.props.dateTillOffer);
    const aa = new Date();
    return (
      <h3 className="bg-success mb-3">
        Offer Ends in :<Timer timeTillOffer={d.getTime() - aa.getTime()} />
      </h3>
    );
  }
  render() {
    return (
      <div className="product-container">
        <div className="product-image">{this.image}</div>
        <div className="product-title">{this.title}</div>
        <div className="product-price">Offer price : {this.price}</div>
        <div className="product-timer">{this.date}</div>
        <Link to={this.btnlink} className="product-btn">
          {this.btntext}
        </Link>
      </div>
    );
  }
}

export default MapTo("wknd-spa-react/components/product")(
  MyProduct,
  MyProductEditConfig
);
