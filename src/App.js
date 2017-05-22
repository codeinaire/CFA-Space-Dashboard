import React, { Component } from 'react';
import Map from './components/Map';
import './App.css';
import Video from './components/Video';
import Weather from './components/Weather';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hackathon 2</h1>
        <div className="c-flex-1">
          <div className="component1">Constellation data</div>
          <div className="component2">Comet data</div>
          <div className="component3"><Video /></div>
          <div className="component4">People in space</div>
        </div>
        <div className="c-flex-2">
          <div className="component5"><Weather /></div>
          <div className="component6"><Map />
          </div>
          <div className="component7">Rocket component</div>
        </div>

      </div>
    );
  }
};

export default App;
