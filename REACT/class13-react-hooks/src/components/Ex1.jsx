import React, { useState } from 'react'

const Ex1 = () => {
  let count = 0;

  const [counter,setCounter] = useState(0)
  const [title,setTitle] = useState('Welcome to react State')
  const [isView,setIsView] = useState(true)
  const [colors,setColors] = useState(['red','blue','green'])
  const [user,setUser] = useState({
    name : 'raju',
    email : 'raju@gmail.com'
  })
  const [inputValue,setInputValue] = useState("React Hooks");

  const increament = () =>{
    count+=1;
    console.log(count);

    setCounter(counter+1);

    setIsView(!isView);
  }

  const onChange = (event) => {
    const newvalue = event.target.value;
    console.log(newvalue);
    setInputValue(newvalue);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h5 className="display-3 text-center">useState Hook</h5>
          <p className="text-secondary text-center">THAT ALLOWS YOU TO HAVE A STATE VARIABLES IN FUNCTIONAL COMPONENTS.</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <div className="lead p-3 border rounded">
            <h3>Example - 1</h3>
            <p><b>Count = </b>{count}</p>
            <button type="button" className="btn btn-outline-success" onClick={increament}>Increament</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="lead p-3 border rounded my-3">
            <h3>Example - 2</h3>
            <p><b>Counter = </b>{counter}</p>
            <button type="button" className="btn btn-outline-success" onClick={increament}>Increament</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="lead p-3 border rounded my-3">
            <h3>Example - 3</h3>
            <p><b>Title = </b>{title}</p>
            <p><b>isview = </b>{isView ? "Condition is True..!" : "Condition is False..!"}</p>
            <button type="button" className="btn btn-outline-success" onClick={increament}>Increament</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="lead p-3 border rounded my-3">
            <h3>Example - 4</h3>
            <p><b>Colors = </b>{colors}</p>
            <p><b>Colors = </b>{colors && colors.map((item,index)=>{
              return(
                <p key={index}>{item}</p>
              )
            })}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="lead p-3 border rounded my-3">
            <h3>Example - 5</h3>
            <p><b>User Name = </b>{user.name}</p>
            <p><b>User Email = </b>{user.email}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="lead p-3 border rounded my-3">
            <h3>Example - 6</h3>
            <input type="text" name="name" id="name" placeholder='Enter some text' className='form-control' onChange={onChange}/>
            <p><b>Input Value = </b>{inputValue}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ex1
