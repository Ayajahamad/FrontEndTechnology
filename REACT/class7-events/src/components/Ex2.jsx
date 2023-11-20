import React, { Fragment, useState } from 'react'

// useState = hook -> functional componentts
// state variable => value
// state handler => method => used change/modify the values of the state

const Ex2 = () => {
    const sayHello = (parameter1) => {
        alert(`Hello..! ${parameter1}`)
    }

    // const [state,stateHandler] = useState(initValue)
    const [count,setCount] = useState(1);

  return (
    <Fragment>
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <div className='lead my-3 p-3 border'>
                        <p><b> (3) Call multiple functions in an onClick event Handler.</b></p>
                        <button className='btn btn-outline-info' 
                        onClick={()=>{
                            sayHello("REACT");
                            setCount(count+1)
                        }}>Ex2 - Say Hello and Increament</button>
                        <p><b>Increament : </b>{count}</p>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Ex2
