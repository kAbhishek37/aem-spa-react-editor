import { MapTo } from "@adobe/aem-react-editable-components";
import React, { Component } from "react";
import MyTitle from "../MyTitle/MyTitle";


export const MyTitleTextEditConfig={
    emptyLabel:"My Title Text",
    isEmpty:function (props) {
        return !props || !props.title || props.title.trim().length < 1;
    }
}

export default class MyTitleText extends Component {
   
    get title(){
        return(
            <h1>{this.props.title}</h1>
        )
    }

    get text(){
        return(
            <p>{this.props.text}</p>
        )
    }
    render() { 
        return (
            <div>
                {/* {this.title} */}
                <MyTitle {...this.props} />
                {this.text}
            </div>
        );
    }
}
 
 MapTo("wknd-spa-react/components/mytitletext")(MyTitleText,MyTitleTextEditConfig);