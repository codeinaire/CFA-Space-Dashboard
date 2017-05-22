import React, { Component } from 'react';
import Forecast from 'react-forecast';

class Weather extends Component {
  render () {
    return (
      <div>
        <Forecast latitude={34.05} longitude={118.25} name='Los Angeles' />
      </div>
    );
  }
}

export default Weather;
