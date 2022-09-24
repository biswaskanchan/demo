import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Countdown, { calcTimeDelta } from 'react-countdown';


const fullDays= 24;
const hrs= 3600000*fullDays;
const days=7
const fullCount= days*hrs; 
// Random component 
    
     
      

// Renderer callback with condition
export  const renderer = ({ hours, minutes, seconds, completed }) => {
  
    // Render a countdown
    return <span>{hours}:{minutes}:{seconds}</span>;
  }


ReactDOM.render(
  <Countdown
    date={Date.now() + fullCount}
    renderer={renderer}
  />,
  
);   

 