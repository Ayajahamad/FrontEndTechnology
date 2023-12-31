import './App.css';
import React, { Component } from 'react';
import Users from './components/Users';

const url = "https://dummyjson.com";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount(){
    fetch(`${url}/users`)
    .then((res) => res.json())
    .then((out) => {
      // console.log("USERS : ", out);
      // console.log("USERS : ", out.users);

      this.setState({
        users: out.users,
      })
    })
    .catch((err) => err.message)
  }
  
  render(){
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className='display-3 text-success text-center'>
                Props in Class Component..!
              </h1>
            </div>
          </div>
        </div>
        <Users users = {this.state.users}/>
      </div>
    )
  }
}

export default App;


