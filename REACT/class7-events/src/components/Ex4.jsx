import React, { Component } from 'react';

class Ex4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            steps : 0
        }

        // ignore bind for now we will explain about binding soon. Just know that it is necessary for right working of 'this keyword'

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        alert('ClickHandler Function');
        this.setState({
            steps : this.state.steps+1
        });
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="lead my-3 p-3 border">
                                <p>
                                    <b>
                                        (6) Class Components Event Listener / Binding inside the constructor
                                    </b>
                                </p>
                                <p>
                                    We have to call this setState method (for class components) or useState hook (for functional component) inside the onClick handler to update state 
                                </p>
                                <p>
                                    <b>Steps : </b> 
                                     {this.state.steps}
                                </p>

                                <button className='btn btn-outline-info' onClick={this.clickHandler}>Ex4 - Click Handler</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Ex4;
