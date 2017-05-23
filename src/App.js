import React, { Component } from 'react';
import axios from 'axios';
import Map from './components/Map';
import './App.css';
import Video from './components/Video';
import RocketLaunch from './components/RocketLaunch';
import CountdownTimer from './components/CountdownTimer';
import HumansInSpace from './components/HumansInSpace'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // allData: [],
      launchTime: '',
      launchName: '',
      launchLocation: '',
    };
  };

  componentDidMount() {
    this.getLaunchDetails();
  };

  getLaunchDetails() {
    console.log('componentDidMount()');
    const URL = "https://launchlibrary.net/1.2/launch/next/2";
    axios.get(URL)
    .then((response) => {
      console.log(response.data);
      console.log(response.data.launches[0].location.name)
      // console.log('launchName', response.data.launches[0].name)
      this.setState({
        // allData: response.data,
        launchTime: response.data.launches[0].net,
        launchName:response.data.launches[0].name,
        launchLocation: response.data.launches[0].location.name,


      });
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Hackathon 2</h1>
        <div className="c-flex-1">
          <div className="component1">Constellation data</div>
          <div className="component2">Comet data</div>
          <div className="component3"><Video /></div>
          <div className="component4"><HumansInSpace /></div>
        </div>
        <div className="c-flex-2">
          <div className="component5">Weather component</div>
          <div className="component6"><Map />
          </div>
          <div className="component7">
            <RocketLaunch
              getLaunchTime={this.state.launchTime}
              getLaunchName={this.state.launchName}
              getLaunchLocation={this.state.launchLocation}/>
            <img className="rocketimage"src={require('./images/rocketcartoon.jpg')} />
            <CountdownTimer getLaunchTime={this.state.launchTime}/>
          </div>
        </div>

      </div>
    );
  }
};

export default App;
