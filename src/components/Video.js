import React, { Component } from 'react';
// import './Video.css'
import { Player, ControlBar, ReplayControl,
  ForwardControl, CurrentTimeDisplay,
  TimeDivider, PlaybackRateMenuButton, VolumeMenuButton
} from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";

class Video extends Component {
  render () {
    return (
      <div>
        <Player
          poster="/assets/poster.png"
          src="https://www.youtube.com/watch?v=RtU_mdL2vBM">
          <ControlBar>
        <ReplayControl seconds={10} order={1.1} />
        <ForwardControl seconds={30} order={1.2} />
        <CurrentTimeDisplay order={4.1} />
        <TimeDivider order={4.2} />
        <PlaybackRateMenuButton
          rates={[5, 2, 1, 0.5, 0.1]}
          order={7.1}
        />
        <VolumeMenuButton disabled />
      </ControlBar>
    </Player>


      </div>
    );
  }
}

export default Video;
