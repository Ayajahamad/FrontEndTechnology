import React, { Component } from 'react';

class UserClassCompo extends Component {
    render() {
        return (
            <div>
                {this.props.UsersDataC.map((item,index)=>{
                    return(
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mx-auto border border-success border-2 p-2 rounded my-2 text-center">
                                <h3 className='bg-black text-white '>PERSON : {index+1}</h3>
                                <h5 className='bg-success text-white p-2 rounded'>PERSON DETAILS</h5>
                                <div className='border rounded border-success border-2 col-12 mx-auto my-2'>
                                    <p><b>NAME : </b>{item.name}</p>
                                    <p><b>ID : </b>{item.id}</p>
                                    <p><b>MAIL : </b>{item.email}</p>
                                    <p><b>AGE : </b>{item.age}</p>
                                </div>
                                <h5 className='bg-success text-white p-2 rounded'>ADDRESS</h5>
                                <div className="border rounded border-success border-2 col-12 mx-auto my-2">
                                    <p><b>CITY : </b>{item.address.city}</p>
                                    <p><b>PIN : </b>{item.address.pin}</p>
                                </div>
                                <div>
                                    {item.bank.map((item)=>{
                                        return(
                                            <div>
                                                <h5 className=' bg-success text-white p-2 rounded'>ACCOUNT DETAILS : {index+1}</h5>
                                                <div className="border rounded border-success border-2 col-12 mx-auto my-2">
                                                    <p><b>ACC NO : </b>{item.accNo}</p>
                                                    <p><b>BANK NAME : </b>{item.bName}</p>
                                                    <p><b>BANK TYPE : </b>{item.type}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <hr />
                        </div>
                    )
                })}
                
            </div>
        );
    }
}

export default UserClassCompo;
