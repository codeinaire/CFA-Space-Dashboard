  import React, { Component } from 'react';
import axios from 'axios';
import './RocketLaunch.css'


class RocketLaunch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // allData: [],
      launchTime: '',
      launchName: '',
    };
  };

  componentDidMount() {
    this.getLaunchDetails();
  };

  getLaunchDetails() {
    console.log('componentDidMount()');
    const URL = "https://launchlibrary.net/1.2/launch/next/1";
    axios.get(URL)
    .then((response) => {
      // console.log(response.data);
      // console.log('launchTime', response.data.launches[0].net)
      // console.log('launchName', response.data.launches[0].name)
      this.setState({
        // allData: response.data,
        launchTime: response.data.launches[0].net,
        launchName:response.data.launches[0].name
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    return (
      <div>
        <h3>Rocket Launch</h3>
        {/* <img src={require('../images/rocketcartoon.jpg')} className="imgRocket" alt="RocketPicture"/> */}
        Rocket Name: {this.state.launchName} <br/> Rocket Launch Date {this.state.launchTime} <br/> }
      </div>
    );
  };
};

export default RocketLaunch;
