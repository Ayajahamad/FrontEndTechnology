import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      result: ""
    }
  }

  // Click Function for Button
  handleClick = (a) =>{
    this.setState({
      result : this.state.result.concat(a.target.value)
    })
  }

  // To clear the value
  clrValue = () =>{
    this.setState({
      result : ""
    })
  }

  // For Delete Button
  dltButton = () =>{
    this.setState({
      result : this.state.result.slice(0,-1)
    })
  }

  // For Calculation
  calculateValue = () =>{
    try {
      this.setState({
        result : eval(this.state.result).toString()
      })
    } catch (error) {
      this.setState({
        result : "Error"
      })
    }
  }


  render() {
    return (
      <section>
        <div>
          <h1>CALCULATOR-PROJECT</h1>
          <input type="text" value={this.state.result}/>
          <table>
            <tr>
              <td colSpan={2}>
                <button onClick={this.clrValue}>AC</button>
              </td>
              <td>
                <button onClick={this.dltButton}>DEL</button>
              </td>
              <td>
                <button value={"/"} onClick={this.handleClick}>&divide;</button>
              </td>
            </tr>
            <tr>
              <td><button value={"7"} onClick={this.handleClick}>7</button></td>
              <td><button value={"8"} onClick={this.handleClick}>8</button></td>
              <td><button value={"9"} onClick={this.handleClick}>9</button></td>
              <td><button value={"*"} onClick={this.handleClick}>&times;</button></td>
            </tr>
            <tr>
              <td><button value={"4"} onClick={this.handleClick}>4</button></td>
              <td><button value={"5"} onClick={this.handleClick}>5</button></td>
              <td><button value={"6"} onClick={this.handleClick}>6</button></td>
              <td><button value={"-"} onClick={this.handleClick}>&minus;</button></td>
            </tr>
            <tr>
              <td><button value={"1"} onClick={this.handleClick}>1</button></td>
              <td><button value={"2"} onClick={this.handleClick}>2</button></td>
              <td><button value={"3"} onClick={this.handleClick}>3</button></td>
              <td><button value={"+"} onClick={this.handleClick}>+</button></td>
            </tr>
            <tr>
              <td><button value={"0"} onClick={this.handleClick}>0</button></td>
              <td><button value={"."} onClick={this.handleClick}>.</button></td>
              <td colSpan={2} onClick={this.calculateValue}><button>=</button></td>
            </tr>
          </table>
          
        </div>
      </section>
    );
  }
}

export default App;
