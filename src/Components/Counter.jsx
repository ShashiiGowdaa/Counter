import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) 
    {
      super(props)
    
      this.state = {
         initialValue : 0
      }
    }
    increment = ()=>
        {
        this.setState(
            {
            initialValue : this.state.initialValue +1
        }
    )
    }
    decrement = () =>{
        this.setState(
            {
            initialValue : this.state.initialValue -1
        }
    )
    }
  render() {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
        <div className="card text-center p-4">
          <h2 className="mb-4">Counter</h2>
          <div className="d-flex align-items-center">
            <button 
              className="btn btn-danger btn-lg mx-2"
              onClick={this.decrement}>
              -
            </button>
            <span className="h4 mx-4">{this.state.initialValue}</span>
            <button 
              className="btn btn-success btn-lg mx-2"
              onClick={this.increment}>
              +
            </button>
          </div>
        </div>
      </div>
    )
  }
}
