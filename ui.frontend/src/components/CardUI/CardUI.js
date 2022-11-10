import { MapTo } from "@adobe/aem-react-editable-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";

require("./CardUI.scss");

export const CardUIEditConfig = {
  emptyLabel: "Card UI",
  isEmpty: function (props) {
    return !props;
  },
};

export default class CardUI extends Component {
  get cardText() {
    return this.props.cardText;
  }
  get cardLink() {
    return this.props.cardLink;
  }
  get cardHeadline() {
    return this.props.cardHeadline;
  }
  render() {
    if (CardUIEditConfig.isEmpty(this.props)) {
      return null;
    }
    return (
      //    <h1>Card UI {console.log(this.props)}</h1>
      <div className="card-ui-container">
        <h6 className="container-headline">{this.cardHeadline}</h6>
        {this.props.cards.map((card) => {
          return (
            <Link className="card-link" to={card.itemLink}>
              <div className="card-container">
                <img
                  src={card.cardImg}
                  className="card-img"
                  style={{ width: "100%" }}
                  alt=""
                />
                <p className="cardui-card-link-text">{card.itemName}</p>
              </div>
            </Link>
          );
        })}
        <Link className="container-link" to={this.cardLink}>
          <p className="cardui-link-text">{this.cardText}</p>
        </Link>
      </div>
    );
  }
}

MapTo("wknd-spa-react/components/cardui")(CardUI, CardUIEditConfig);
