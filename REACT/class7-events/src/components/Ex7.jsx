import React, { Component, Fragment } from 'react';

class Ex7 extends Component {
    constructor(props){
        super(props)
            this.state = {
                message : "Event Bind"
            }
        }

        clickHandler=()=>{
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
                                <p><b>9) Binding with the help of arrow function.</b></p>
                                <p><b>MESSAGE : <b>{this.state.message}</b></b></p>

                                <button className='btn btn-outline-info' onClick={this.clickHandler}>
                                    Ex7 - Click Handler
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Ex7;
