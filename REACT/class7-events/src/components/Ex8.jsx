import React, { Component, Fragment } from 'react';

class Ex8 extends Component {
    constructor(props){
        super(props)
    }
    printMessage(){
        console.log("This is a message");
    }
    showAlert(){
        alert("button was clicked");
    }
    clickHandler(){
        this.printMessage();
        this.showAlert();
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="lead my-3 p-3 border">
                                <p><b>10) Call multiple functions inside an onclick event handler</b></p>
                    

                                <button className='btn btn-outline-info' onClick={this.clickHandler.bind(this)}>
                                    Ex8 - Click Handler
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Ex8;
