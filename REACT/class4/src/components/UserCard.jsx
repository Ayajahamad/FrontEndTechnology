import React from 'react'
import Address from './Address'
import Bank from './Bank'

function UserCard(props) {
  return (
    <div className='row'>
        <div className="col12">
            <div className='border p-2 lead redius my-2'>
                <p><b>ID : </b>{props.id}</p>
                <p><b>NAME : </b>{props.name}</p>
                <p><b>EMAIL : </b>{props.email}</p>
                <p><b>AGE : </b>{props.age} Years</p>
                <p><b>CITY : </b>{props.address.city}</p>
                <p><b>PINCODE : </b>{props.address.pin}</p>

                {/* DIRECT CALLING */}
                
                {/* <div>{props.bank.map((item)=>{
                  return(
                    <div>
                      <p><b>BANK NAME : </b>{item.bName}</p>
                      <p><b>ACC TYPE : </b>{item.type}</p>
                      <p><b>ACC NO : </b>{item.accNo}</p>
                    </div>
                  )
                })}</div> */}
                
                <div className="border p-2 lead">
                  <h4>ADDRESS</h4>
                  <Address addr={props.address}/>
                  <details>
                    <summary>Bank Detais</summary>
                    <Bank Bdetails = {props.bank}/>
                  </details>
                </div>

            </div>
        </div>
    </div>
  )
}

export default UserCard
