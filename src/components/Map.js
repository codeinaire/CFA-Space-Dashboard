import React, { Component } from 'react';
import axios from 'axios';
import { Gmaps, InfoWindow } from 'react-gmaps';
import './Map.css'

const params = {v: '3.exp', key: 'AIzaSyDX8-TRWtqBRRAegtMRVrbfR7-u_bLnP9o'};

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
    };
  }

  componentWillMount() {
    this.getISSPosition();
  }

  getISSPosition() {
    axios.get(`http://api.open-notify.org/iss-now.json`)
      .then(result => {
        this.setState({
          latitude: result.data.iss_position.latitude,
          longitude: result.data.iss_position.longitude
        })
      })
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    console.log(this.state)
    return (
      <div className="map">
        <Gmaps
          width={'540px'}
          height={'300px'}
          lat={this.state.latitude}
          lng={this.state.longitude}
          zoom={3}
          loadingMessage={'Be happy'}
          params={params}
          onMapCreated={this.onMapCreated}>)
          <InfoWindow
            lat={this.state.latitude}
            lng={this.state.longitude}
            content={'ISS'}
            onCloseClick={this.onCloseClick} />
        </Gmaps>
      </div>
    );
  }
}

export default Map;