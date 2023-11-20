import React, { Component } from 'react';
import Address from './Address';
import BankDetails from './BankDetails';

class UserCard extends Component {
    render() {
        const {firstName,lastName,image,id,email} = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="card my-2 text-center">
                                <img src={image ? image : "#"} alt="" className='rounded-circle img-fluid' />
                                <h3>ID : {id}</h3>
                                <h4> {firstName + " " + lastName}</h4>
                                <div className="card-body">
                                    <details className='text-success'>
                                        <summary>Address Details</summary>
                                        <p className="text-secondary">
                                            <i className="bi bi-envelope-open-fill"></i>
                                            <span className='text-primary'><b>Mail : </b>{email}</span>
                                        </p>
                                        <Address addr = {this.props.address}/>
                                    </details>
                                    <details className='text-success'>
                                        <summary>Bank Details</summary>
                                        <BankDetails bank = {this.props.bank}/>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default UserCard;
