import React, { Component } from 'react'
import Countdown from 'react-count-down'
import ReactDOM from 'react-dom'


// const TestComponent = () => (
//   <Countdown options={OPTIONS} />
// )



class CountdownTimer extends Component {
  render() {
    console.log(this.props.getLaunchTime)
    const cb = () => {
      console.log('expired callback')
    }
    let OPTIONS = {endDate: this.props.getLaunchTime, prefix: 'UNTIL LIFTOFF! AHHHHH!!!', cb};
    return  (
      <div>
          <Countdown options={OPTIONS}/>
           {/* Is Launching at {this.props.getLaunchTime} */}
      </div>
    )
  }
}

export default CountdownTimer;
