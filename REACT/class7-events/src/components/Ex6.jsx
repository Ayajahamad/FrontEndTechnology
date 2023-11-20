import React, { Component, Fragment } from 'react';

class Ex6 extends Component {
    constructor(props){
        super(props)
            this.state = {
                message : "Event Bind"
            }
        }

        clickHandler(){
            this.setState({
                message: "Change State"
            })
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="lead my-3 p-3 border">
                                <p><b>8) Binding directly when passing the function</b></p>
                                <p><b>MESSAGE : <b>{this.state.message}</b></b></p>

                                <button className='btn btn-outline-info' onClick={this.clickHandler.bind(this)}>
                                    Ex6 - Click Handler
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Ex6;
