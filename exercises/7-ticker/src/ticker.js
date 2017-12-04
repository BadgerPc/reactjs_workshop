import React from 'react'

class Ticker extends React.Component {
    constructor(props){
        super(props);
        this.state = {counter : 0}    
    }
  render() {
    return <div className="value" 
        onClick={this.handleClick.bind(this)}>{this.state.counter}</div>
  }

  handleClick(event){
    let counter = this.state.counter;

    this.setState({counter : ++counter});
  }
}

export default Ticker
