import React, { Fragment, useState } from 'react'

const Ex3 = () => {

    // const [state,stateHandler] = useState(initValue)
    const [num,setNum] = useState(0);
    const [isView,setView] = useState(false);
    const [count,setCount] =  useState(0);

    const clickHandler = () => {
        setNum(num+1);
        setView(isView => !isView);
    }

  return (
    <Fragment>
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <div className='lead my-3 p-3 border'>
                        <p><b> (4) Update the state inside an onClick event Handler.</b></p>
                        <button className='btn btn-outline-info' onClick={clickHandler}>Ex3 - Click Handler</button>
                        <p><b>Increament : </b>{num}</p>

                        <div>
                            {
                                isView ? <h5 className='text-success'>Welcome to REACT</h5> : <h5 className='text-danger'>Try NXT Time</h5>
                            }
                        </div>

                        <button className="btn btn-outline-success mx-2" onClick={()=>setCount(count+1)} >Increament</button>
                        <button className="btn btn-outline-danger mx-2" onClick={()=>setCount(count-1)}>Decreament</button>
                        <p><b>Result : </b> {count}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <div className='lead my-3 p-3 border'>
                        <p><b> (5) Use Synthetic events = </b>directly inside an onClick event handler.</p>
                        <button 
                        className='btn btn-outline-info' value="Be-Practical" onClick={(e)=>alert(e.target.value)}>Ex3 - Synthetic Handler</button> 
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Ex3
