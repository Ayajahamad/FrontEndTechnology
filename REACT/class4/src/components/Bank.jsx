import React from 'react'
import BankDetails from './BankDetails';

function Bank(props) {
  return (
    <div>
        {
            props.Bdetails.map((item,index)=>{
                console.log(typeof item);
                return(
                    <div>
                        {/* <p><b>BANK : </b> {index+1}</p>
                        <p><strong>Account No : </strong>{item.accNo}</p>
                        <p><strong>Bank Name : </strong>{item.bName}</p>
                        <p><strong>Bank Type : </strong>{item.type}</p> */}

                        <BankDetails key={index}{...item}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Bank;
