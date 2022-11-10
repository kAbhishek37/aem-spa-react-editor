import { MapTo } from "@adobe/aem-react-editable-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

require("./MySlider.scss");

export const MySliderEditConfig = {
  emptyLabel: "My Slider",
  isEmpty: function (props) {
    return !props.sliderHeadline;
  },
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: "111",
        background: "white",
        height: "70px",
        width: "40px",
        textAlign: "center",
        border: "2px solid black",
      }}
      onClick={onClick}
    >
      <h3>&gt;</h3>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        zIndex: "111",
        border: "2px solid black",
        height: "70px",
        width: "40px",
        textAlign: "center",
        marginRight: "150px",
      }}
      onClick={onClick}
    >
      <h3>&lt;</h3>
    </div>
  );
}

export default class MySlider extends Component {
  get sliderText() {
    return this.props.sliderText;
  }
  get sliderLink() {
    return this.props.sliderLink;
  }
  get sliderHeadline() {
    return this.props.sliderHeadline;
  }
  render() {
    const settings = {
      dots: false,
      infinite: false,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    // if (sliderUIEditConfig.isEmpty(this.props)) {
    //   return null;
    // }
    return (
      <div className="slider-ui-container">
        <h1 className="container-headline">{this.sliderHeadline}</h1>
        <Link className="container-link" to={this.sliderLink}>
          {this.sliderText}
        </Link>
        <Slider
          {...settings}
          style={{
            margin: "20px",
          }}
        >
          {/* <div> */}
          {this.props.slider.map((slider) => {
            return (
              <Link className="slider-link" to={slider.itemLink}>
                <div className="slider-container">
                  <img
                    src={slider.sliderImg}
                    className="slider-img"
                    style={{ width: "80%" }}
                    alt=""
                  />
                  <p className="slider-item-title">{slider.itemName}</p>
                </div>
              </Link>
            );
          })}
          {/* </div> */}
        </Slider>
      </div>
    );
  }
}

MapTo("wknd-spa-react/components/myslider")(MySlider, MySliderEditConfig);
