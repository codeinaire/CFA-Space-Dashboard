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
    // this.updateSelected = this.updateSelected.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  };

  getLocation () {

    let location = this.location.value;

    axios.get(`https://www.metaweather.com/api/location/search/?query=${location}`)
      .then((response) => {
        var latt_long = response.data[0].latt_long;
        console.log('location: ', location);
        console.log('lat and long:', latt_long);
        // let newName = this.location.value
        // this.location.value = '';
        this.setState({
          name: location
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render () {
    return (
      <div>
        <Forecast latitude={this.state.lat} longitude={this.state.long} name={this.state.name} />

        <p>{this.state.name}</p>
        <input type="text" ref={(input) => { this.location = input; }} />
        <button onClick={() => this.getLocation()}>New Location</button>
        {/* <form onSubmit={this.updateSelected}>
          <input type="text" ref="location" placeholder="Enter city name"/>
          <button>Get Weather</button>
        </form> */}
      </div>
    );
  }
}

export default Weather;
