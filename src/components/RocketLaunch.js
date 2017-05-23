  import React, { Component } from 'react';
import axios from 'axios';
import './RocketLaunch.css'


class RocketLaunch extends Component {
  render() {
    return (
      <div>
        <h3>Rocket Launch</h3>
        {/* <img src={require('../images/rocketcartoon.jpg')} className="imgRocket" alt="RocketPicture"/> */}
        Rocket Name: {this.props.getLaunchName} <br/> Rocket Launch Date: {this.props.getLaunchTime} <br/> 
      </div>
    );
  };
};

export default RocketLaunch;
