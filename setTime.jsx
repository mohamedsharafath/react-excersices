import React, { Component } from 'react'

export default class SetTimeout extends Component {
    
  constructor(props) {
    super(props)
    this.state = {
        timer: 5,
        status: 'Start Game',
    }
}

    execTimeout = () =>{
        const timer = setInterval(() => {
          this.setState(prevState => {
            if(prevState.timer > 0)
            {
            return {
                  timer:prevState.timer -1
              }
            }
          })
        },1000);
        
        this.setState({status:'Started...'});
        
        setTimeout(() =>{
          this.setState({status:'Finished...'});
          alert("game expired");
          clearInterval(timer);
        },6000);


    }
    
    reset = () => {
      this.setState({timer:5,status:'Start'})
    }

    render() {
      return (
      <>
      <div>{this.state.timer}</div>
      <button onClick={this.execTimeout}>{this.state.status}</button>
      <button onClick={this.reset}>reset</button>
      </>
    )
  }
}

      // setTimeout(() => {
      //     console.log("TimeOut");
      // },5000);
      
      
      // let a=0;
      // let Timer=setInterval(() => {
      //     a+=1;
      //     if(a==5){
      //         // console.log("ago");
      //         clearInterval(Timer);
      //     }
      //     console.log(a+"ago");
      // },1000);

      