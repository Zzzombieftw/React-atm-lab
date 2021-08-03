import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super()
    this.handleChange = this.handleChange.bind(this);
    
    this.state={
      name:props.name,
      balance: 0,
      value: 0
    }
  }
  handleChange(event) {
    this.setState({value: parseInt(event.target.value)});
  }
  increaseBalance = ()=> {
    this.setState({balance: this.state.balance + this.state.value})
 }
 decreaseBalance = ()=> {
  this.setState({balance: this.state.balance - this.state.value})
 
 
 }
  
  render() {
    let cn = 'account'
        if (this.state.balance === 0) {
          cn += ' zero'
        }
       
    return (
      <div className={cn}>
        <h2>{this.state.name}</h2>
        <div className="balance">{this.state.balance}</div>
        <input type="number" placeholder="enter an amount" value={this.input} onChange={this.handleChange}/>
        <input type="button" value="Deposit" onClick={this.increaseBalance} />
        <input type="button" value="Withdraw" onClick={this.decreaseBalance}/>
      </div>
    )
  }
}

export default Account;
