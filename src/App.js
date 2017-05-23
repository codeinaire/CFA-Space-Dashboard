import React, { Component } from 'react';
import Map from './components/Map';
import './App.css';
import Video from './components/Video';
import RocketLaunch from './components/RocketLaunch'
import HumansInSpace from './components/HumansInSpace'

class App extends Component {
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
          <div className="component7"><RocketLaunch />
          </div>
        </div>

      </div>
    );
  }
};

export default App;
