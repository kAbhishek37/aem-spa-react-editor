import React,{ Component } from "react";


export const MyTitleSubtitleEditConfig={
    emptyLabel:"My Title Subtitle",
    isEmpty:function (props) {
        return !props || !props.title || props.title.trim().length < 1;
    }
}

class MyTitleSubtitle extends Component {
    
    get title(){
        return(
            <p className="h1"></p>
        )
    }
    render() { 
        return (
            ""
        );
    }
}
 
export default MyTitleSubtitle;