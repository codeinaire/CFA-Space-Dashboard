import React, { Component } from 'react';
import Forecast from 'react-forecast';
import axios from 'axios';


class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
    name: 'Sydney',
    latt: 0,
    long: 0
    };
    // this.getLocation = this.getLocation.bind(this);
  };

  getLocation () {

    let location = this.location.value;

    axios.get(`https://www.metaweather.com/api/location/search/?query=${location}`)
      .then(function (response) {
        console.log(response);
        var latt_long = response.latt_long;
        console.log('location: ', location);
        console.log('lat and long:', latt_long);
        this.setState({
          name: location
        });
        // let newName = this.location.value
        this.location.value = '';
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render () {
    return (
      <div>
        <Forecast latitude={this.state.latt} longitude={this.state.long} name={this.state.name} />
        <input type="text" ref={(input) => { this.location = input; }} />
        <button onClick={this.getLocation()}>New Location</button>
      </div>
    );
  }
}

export default Weather;
