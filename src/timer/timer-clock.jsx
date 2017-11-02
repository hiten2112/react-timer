import React,{Component} from 'react';

class TimerClock extends Component{
  constructor(props){
    super(props);

    this.state={
      hours:0,
      minutes:0,
      seconds:0
    }

  }



  render(){

    return(
      <div>
        <h2>Total time</h2>
        <div>{this.props.inputTime.hours} Hours</div>
        <div>{this.props.inputTime.minutes} Minutes</div>
        <div>{this.props.inputTime.seconds} seconds</div>
        <h2>Time remaining</h2>
        <div>{this.state.hours} Hours</div>
        <div>{this.state.minutes} Minutes</div>
        <div>{this.state.seconds} seconds</div>
      </div>
    )
  }
}


export default TimerClock;
