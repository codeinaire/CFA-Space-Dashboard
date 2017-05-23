import React, { Component } from 'react'
import Countdown from 'react-count-down'
import ReactDOM from 'react-dom'


// const TestComponent = () => (
//   <Countdown options={OPTIONS} />
// )

const OPTIONS = { endDate: '03/01/2018 10:55 AM', prefix: 'until my LIFTOFF!', cb}

const cb = () => {
  console.log('expired callback')
}

class CountdownTimer extends Component {
  render() {
    return  (
      <div>
          <Countdown options={OPTIONS}/>
      </div>
    )
  }
}

export default CountdownTimer;
