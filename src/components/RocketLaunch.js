  import React, { Component } from 'react';
import axios from 'axios';
import './RocketLaunch.css'


class RocketLaunch extends Component {
  render() {
    return (
      <div>
        <h3>Rocket Launch</h3>
        {/* <img src={require('../images/rocketcartoon.jpg')} className="imgRocket" alt="RocketPicture"/> */}
        {this.props.getLaunchName} <br/> Is Launching at {this.props.getLaunchTime} <br/> in {this.props.getLaunchLocation}
      </div>
    );
  };
};

export default RocketLaunch;
