// import { MapTo } from "@adobe/aem-react-editable-components";
// import React, { Component } from "react";

// export const MyCarouselEditConfig = {
//   emptyLabel: "MY Carousel",
//   isEmpty: function (props) {
//     return !props || !props.title || props.title.trim().length < 1;
//   },
// };
// // const multifield = [this.props.multifield];
// // var obj = [];
// // Object.keys(multifield).map(function (item) {
// //   obj = multifield[item];
// // });
// export default class MyCarousel extends Component {
//   get title() {
//     return <h1>{this.props.title}</h1>;
//   }
//   get subtitle() {
//     return <h1>{this.props.subtitle}</h1>;
//   }
//   get multifield() {
//     return (
//       <div>
//         {/* {Object.keys(obj).map((oneItem) => (
//           <div key={obj[oneItem].description}>
//             <p>{obj[oneItem].description}</p>
//           </div>
//         ))} */}
//       </div>
//     );
//   }
//   render() {
//     if (MyCarouselEditConfig.isEmpty(this.props)) {
//       return null;
//     }
//     return (
//       <div>
//         {this.title}
//         {this.subtitle}
//         {/* {this.multifield} */}
//       </div>
//     );
//   }
// }

// MapTo("wknd-spa-react/components/mycarousel")(MyCarousel, MyCarouselEditConfig);
