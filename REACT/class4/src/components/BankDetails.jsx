import React from 'react'

function BankDetails(props) {
  return (
    <div className='border lead p-2 my-2'>
      <p><b>ACC NO : </b>{props.accNo}</p>
      <p><b>BANK NAME : </b>{props.bName}</p>
      <p><b>ACC TYPE : </b>{props.type}</p>
    </div>
  )
}

export default BankDetails
