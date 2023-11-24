import React, { Component } from 'react'
import './App.css';

export default class StopWatch extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            timer:0,
            check:-1
        }
    };
    
    

    start = () =>{
        const timer = setInterval(() => {
                this.setState(prevState =>{
                    if(prevState.check===-1)
                    {
                        return{
                            timer:prevState.timer+1
                        }
                    }
                    else{

                             clearInterval(timer)
                    }
                })
        },1000);

    }
    stop = () =>{
        this.setState({check:0})
    }
    reset = () => {
        this.setState({timer:0,check:-1})
    }
  render() {
    return (
        <>
       <div className='center'> {this.state.timer}
      <button onClick={this.start}>Start</button>
      <button onClick={this.stop}>Stop</button>
      <button onClick={this.reset}>reset</button>
      </div>
      </>
    )
  }
}
