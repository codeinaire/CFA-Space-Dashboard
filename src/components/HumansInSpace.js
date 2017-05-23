import React, { Component } from 'react';
import axios from 'axios';
import './HumansInSpace.css'


class HumansInSpace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // allData: []
      numberInSpace: 0,
    };
  };

  componentDidMount() {
    this.getNumberOfHumans();
  };

  getNumberOfHumans() {
    console.log('componentDidMount()');
    const URL = "http://api.open-notify.org/astros.json";
    axios.get(URL)
    .then((response) => {
      console.log(response.data);
      console.log(response.data.number)
      // console.log('launchTime', response.data.launches[0].net)
      // console.log('launchName', response.data.launches[0].name)
      this.setState({
        humansInSpace: response.data.number
        // allData: response.data,
        // launchTime: response.data.launches[0].net,
        // launchName:response.data.launches[0].name
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    return (
      <div>
        Humans In Space = {this.state.humansInSpace}
      </div>
    );
  };
};

export default HumansInSpace;
