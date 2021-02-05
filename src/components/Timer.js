import React from 'react'

export default class Timer extends React.Component {   
  state = {
    totalMinutes: 0,
    totalSeconds: 0,
    elapsedTime: 0,
    isRunning: false
  }
  componentDidMount() { 
    this.cdmTimer = setInterval(() => { 
      this.setState({
        totalMinutes: this.props.minutes ? this.props.minutes : 0,
        totalSeconds: this.props.seconds ? this.props.seconds : 0
      })
      clearInterval(this.cdmTimer)
    }, 250)
  }
  startCounting = () => {
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
    const { totalMinutes , totalSeconds , elapsedTime } = this.state
    let minutes = Math.floor(elapsedTime / 60)
    let seconds = elapsedTime - (minutes * 60)

    if (minutes === totalMinutes && seconds === totalSeconds) { 
      console.log('match made in heaven')
      this.pauseCounting()
    }
  }
  componentWillUnmount() { 
    this.setState({
      isRunning: false
    })
    clearInterval(this.myInterval)
    clearInterval(this.cdmTimer)
  }
  render() { 
    const { elapsedTime, isRunning, totalSeconds, totalMinutes } = this.state
    let minutes = Math.floor(elapsedTime / 60)
    let seconds = elapsedTime - (minutes * 60)

    return(
      <div className='ct-stopwatch'>
        <h1>Timer</h1>
        <div>{minutes}:{seconds<10 ? '0'+seconds : seconds}</div>
        {!isRunning && <button onClick={this.startCounting}>Start</button>}
        {isRunning && <button onClick={this.pauseCounting}>Pause</button>}
        {<div>{totalMinutes}:{totalSeconds < 10 ? '0' + totalSeconds : totalSeconds}</div>}
      </div>
    )
  }
}