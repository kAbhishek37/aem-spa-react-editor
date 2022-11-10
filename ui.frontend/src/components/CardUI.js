import { MapTo } from "@adobe/aem-react-editable-components";
import React,{Component} from "react";

require('./CardUI.css')

export const CardUIEditConfig={
    emptyLabel:"Card UI",
    isEmpty:function (props) {
        return !props || !props.cards || props.cards.length < 1;
    }
}

export default class CardUI extends Component {
  
    render() { 
        if (CardUIEditConfig.isEmpty(this.props)) {
            return null
        }
        return (
        //    <h1>Card UI {console.log(this.props)}</h1>
        <div className="card-ui-container row">
            {this.props.cards.map(card=>{
               return(
                <div className="card-container col">
                    <img src={card.cardImg} className="card-img"  style={{height:"40px",width:"40px"}}/>
                    <small>{card.itemName}</small>
                </div>
               )
            })}
        </div>
        );
    }
}
 
 MapTo("wknd-spa-react/components/cardui")(CardUI,CardUIEditConfig)