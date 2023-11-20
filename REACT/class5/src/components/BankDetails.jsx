import React, { Component } from 'react';

class BankDetails extends Component {
    render() {
        const {cardExpire,cardNumber,cardType,currency,iban,birthDate,bloodGroup} = this.props.bank;
        
        return (
            <div>
                <div className='lead border radius p-2'>
                    <p><b>Card Expire: </b> {cardExpire}</p>
                    <p><b>Card Number : </b> {cardNumber}</p>
                    <p><b>Card Type : </b> {cardType}</p>
                    <p><b>Currency : </b> {currency}</p>
                    <p><b>IBAN : </b> {iban}</p>
                </div>
            </div>
        );
    }
}

export default BankDetails;
