import React from 'react';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days,hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days}d:{hours}h:{minutes}m:{seconds}s</span>;
  }
};

const Timer = (props) => {
  return ( 
    <Countdown 
    date={Date.now()+props.timeTillOffer}
    renderer={renderer}
    />
   );
}
 
export default Timer;