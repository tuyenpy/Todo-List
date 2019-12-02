import React, { Component } from 'react';
import './trafficLight.css';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
  constructor() {
    super();
    this.currentColor = RED;
  }

  getNextColor(color) {
    switch (color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }
  render(){
    return(
      <div className="TrafficLight">
        <div className="buld red" />
        <div className="buld orange" />
        <div className="buld green" />
      </div>
    )
  }
}

export default TrafficLight;