import React from 'react'

function Address(props) {
  return (
    <div>
        <p><b>CITY : </b>{props.addr.city}</p>
        <p><b>PIN : </b>{props.addr.pin}</p>
    </div>
  )
}

export default Address;
