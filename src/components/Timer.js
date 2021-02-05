import React from 'react'

export default class Timer extends React.Component {   
  state = {
    totalMinutes: 0,
    totalSeconds: 0,
    elapsedTime: 0,
    isRunning: false
  }
  componentDidMount() { 
    // set part of state
    const { minutes, seconds } = this.props
    this.setState({
      totalMinutes: minutes,
      totalSeconds: seconds
    })
  }
  startCounting = ()=> {
    this.myInterval = setInterval(this.countUp, 1000);
    this.setState({
      isRunning: true
    })
  }
  pauseCounting = () => { 
    clearInterval(this.myInterval)
    this.setState({
      isRunning: false
    })
  }
  countUp = ()=> {
    this.setState(({ elapsedTime }) => ({ elapsedTime: elapsedTime + 1 }));
  }
  render() { 
    const { elapsedTime, isRunning } = this.state
    let minutes = Math.floor(elapsedTime / 60)
    let seconds = elapsedTime-(minutes*60)
    return(
      <div className='ct-stopwatch'>
        <h1>Timer</h1>
        <div>{minutes}:{seconds<10 ? '0'+seconds : seconds}</div>
        {!isRunning && <button onClick={this.startCounting}>Start</button>}
        {isRunning &&  <button onClick={this.pauseCounting}>Pause</button>}
      </div>
    )
  }
}