import { MapTo } from "@adobe/aem-react-editable-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";

require('./MyTeaser.css')

export const MyTeaserEditConfig = {
  emptyLabel: "My Teaser Component",

  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1;
  },
};

export default class MyTeaser extends Component {
  get image() {
    return (
      <div className="">
        <img className="image" src={this.props.src} alt={this.props.src} />
      </div>
    );
  }

  get btn() {
    if (this.props.btnLink !== null || this.props.btnLink !== "") {
      return (
       <div >
          <Link className="action-link " to={this.props.btnLink + ".html"} >
            {this.props.btnText}
          </Link>
          {/* <a href={this.props.btnLink +".html"}>{this.props.btnText}</a> */}
       </div>
      );
    }
    return null;
  }

  render() {
    if (MyTeaserEditConfig.isEmpty(this.props)) {
      return null;
    }
    return (
      <div className="row teaser-container">
        {this.image}
        {this.btn}
      </div>
    );
  }
}

MapTo("wknd-spa-react/components/myteaser")(MyTeaser, MyTeaserEditConfig);
