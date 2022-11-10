import { MapTo } from "@adobe/aem-react-editable-components";
import React, { Component } from "react";

export const MyTitleEditConfig = {
  emptyLabel: "MY TITLE",
  isEmpty: function (props) {
    return !props || !props.title || props.title.trim().length < 1;
  },
};

export default class MyTitle extends Component {
  get title() {
    return <h1>{this.props.title}</h1>;
  }
  render() {
    if (MyTitleEditConfig.isEmpty(this.props)) {
      return null;
    }
    return <div>{this.title}</div>;
  }
}

MapTo("wknd-spa-react/components/mytitle")(MyTitle, MyTitleEditConfig);
