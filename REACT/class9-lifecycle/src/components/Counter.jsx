import React, { Component, Fragment } from 'react';

class Counter extends Component {
    componentWillMount(){
        console.log('component will mount(depricated)');
    }
    componentDidMount(){
        console.log('component did mount called');
    }

    render() {
        console.log('This is Render Method..!');
        return (
                <Fragment>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1 className='text-primary text-center'>Counter</h1>
                                <p>{this.props.counterProps}</p>
                            </div>
                        </div>
                    </div>
                </Fragment>
        );
    }
}

export default Counter;
