import { MapTo } from "@adobe/aem-react-editable-components";
import React, { Component } from "react";


export const TitleEditConfig={
    emptyLabel:"Title",
    isEmpty:function (props) {
        return !props || !props.text || props.text.trim().length < 1;
    }
}

export default class Title extends Component {
    
   
    render() { 
        if (TitleEditConfig.isEmpty(this.props)) {
            return null
        }
        return (
           <div>
           <h1>{this.props.text}</h1>
           </div>
        );
    }
}
 
MapTo("wknd-spa-react/components/title")(Title,TitleEditConfig)