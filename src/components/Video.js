import React, { Component } from 'react';
import './Video.css'
import Iframe from 'react-iframe';


class Video extends Component {
  render () {
    return (
      <div>
        <Iframe url="https://www.youtube.com/embed/RtU_mdL2vBM"
          width="400px"
          height="300px"
          display="initial"
          position="relative"
          allowFullScreen/>
      </div>
    );
  }
}

export default Video;
