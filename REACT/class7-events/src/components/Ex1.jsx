import React, { Fragment, useState } from 'react'

const Ex1 = () => {
    const showAlert = () => {
        alert("I'm an alert")
    }


  return (
    <Fragment>
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <div className='lead my-3 p-3 border'>
                        <p><b> (2) React event Listeners</b></p>
                        <p>To listen to events in React, add the onClick attribute which is the event handler to the target element. this specifies the function to be executrd when that element is clicked.</p>
                        <button className='btn btn-outline-info' onClick={showAlert}>Ex1 - Show Alert</button>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Ex1
