import React, { Component } from 'react'
import Countdown from 'react-count-down'
import ReactDOM from 'react-dom'


// const TestComponent = () => (
//   <Countdown options={OPTIONS} />
// )

const OPTIONS = { endDate: '05/24/2017 01:00 AM', prefix: 'until LIFTOFF!', cb}

const cb = () => {
  console.log('expired callback')
}

class CountdownTimer extends Component {
  render() {
    return  (
      <div>
          <Countdown options={OPTIONS}/>
          {this.props.getLaunchTime}
      </div>
    )
  }
}

export default CountdownTimer;
