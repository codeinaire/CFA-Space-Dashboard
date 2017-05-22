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
      console.log('launchTime', response.data.windowstart)
      console.log('launchName', response.data.name)
      this.setState({
        // allData: response.data,
        launchTime: response.data.windowstart,
        launchName: response.data.name
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
        <img src={'../public/images/rocketcartoon.jpg'} className="imgRocket"/>
        Rocket Name: {this.state.name} <br/> Rocket Launch Date {this.state.windowstart} <br/> }
      </div>
    );
  };
};

export default RocketLaunch;
