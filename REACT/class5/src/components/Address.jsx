import React, { Component } from 'react';

class Address extends Component {
    constructor(props){
        super(props)
    }

    render() {

        const { address,city,state,postalCode,coordinates } = this.props.addr;

        return (
            <div className='lead border radius p-2'>
                <p><b>Address: </b> {address}</p>
                <p><b>City : </b> {city}</p>
                <p><b>State : </b> {state}</p>
                <p><b>Postal Code : </b> {postalCode}</p>
                <p><b>Coordinates : </b>lat : {coordinates.lat} - lng : {coordinates.lng}</p>
            </div>
        );
    }
}

export default Address;
