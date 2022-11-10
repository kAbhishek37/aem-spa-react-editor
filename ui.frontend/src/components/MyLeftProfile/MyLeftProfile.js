import { MapTo } from "@adobe/aem-react-editable-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";

require("./MyLeftProfile.scss");

export const MyLeftProfileEditConfig = {
  emptyLabel: "My Left Profile",
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1;
  },
};

class MyLeftProfile extends Component {
  get image() {
    return (
      <div>
        <img
          className="profile-image"
          src={this.props.src}
          alt={this.props.src}
          style={{ width: "100%" }}
        />
      </div>
    );
  }
  get title() {
    return <h1 className="profile-title">{this.props.title}</h1>;
  }
  get description() {
    return <pre className="profile-text">{this.props.description}</pre>;
  }

  get btntext() {
    return this.props.btntext;
  }

  get btnlink() {
    return this.props.btnlink;
  }

  get rightprofile() {
    return this.props.rightprofile;
  }

  render() {
    return (
      <div className="myprofile-container">
        <div
          className={
            this.rightprofile ? "profile-image-right" : "profile-image-left"
          }
        >
          {this.image}
        </div>
        <div
          className={
            this.rightprofile ? "profile-text-left" : "profile-text-right"
          }
        >
          <div className="profile-text-con">
            {this.title}
            {this.description}
          </div>
          <div className="profile-btn-con">
            <Link to={this.btnlink} className="profile-btn">
              {this.btntext}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MapTo("wknd-spa-react/components/myleftprofile")(
  MyLeftProfile,
  MyLeftProfileEditConfig
);
