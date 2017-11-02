import React,{Component} from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import TimerClock from './timer-clock.jsx'
class Timer extends Component{
  constructor(props){
    super(props);
    this.state={
      'showComponent':false,
      'hours':0,
      'minutes':0,
      'seconds':0}
this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
       this.setState((prevState)=>{
         return {showComponent:(!prevState.showComponent)}
       });
     }





  render(){
    return(
      <div>

        <input type='text' onChange={(event)=>this.setState({'hours':event.target.value})} />Hours
        <input type='text' onChange={(event)=>this.setState({'minutes':event.target.value})} />Minutes
        <input type='text' onChange={(event)=>this.setState({'seconds':event.target.value})} />Seconds
        <Button onClick={this._onButtonClick}>
          Submit
        </Button>

        {this.state.showComponent?<TimerClock inputTime={this.state} />:null}


        </div>
    )
  }
}

export default Timer;
