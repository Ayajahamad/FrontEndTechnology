import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
    constructor(props){
        super(props)

        this.state = {
            isActive : false,
        };
    }

    componentWillMount(){
        console.log('component will mount(depricated)');
    }
    componentDidMount(){
        console.log('component did mount called');
    }

    // depricated
    componentWillReceiveProps(nP,nC){
        console.log("Component will received Props")
        console.log("New Props = ",nP);
        console.log("New Props nC = ",nC);

        if(nP.counterProps >= 10){
            this.setState(
                {
                    isActive:true
                }
            )
        }
    }

    // Decision Maker
    shouldComponentUpdate(nP,nS){
        console.log("Should component update?");
        console.log("NewProps = ", nP);
        console.log("NewState = ", nS);
        return true;
    }

    // depricated
    componentWillUpdate(nP,nS){
        console.log("Component will Update")
        console.log("New Props = ",nP);
        console.log("New Props = ",nS);
    }

    componentDidUpdate(oP,oS){
        console.log("Component Did Update")
        console.log("New Props = ",oP);
        console.log("New Props oS = ",oS);
    }

    componentWillUnmount(){
        console.log("Component successfully Unmounted..!")
    }

    // User defined method
    updateCounter(){
        ReactDOM.render(
            <React.StrictMode>
                <Counter counterProps = {this.props.counterProps+1}/>
            </React.StrictMode>
        ,document.getElementById('renderHere'))
    }
    
    render() {
        console.log('This is Render Method..!');
        return (
                <Fragment>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1 className='text-primary text-center'>Counter</h1>
                                <hr />
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col">
                                <h1>{this.props.counterProps}</h1>
                                <div className="lead border p-3 text-center">
                                    {
                                        this.state.isActive ? <h1 className='text-success'>WELCOME TO LIFECYCLE METHOD</h1> : (
                                            <div>
                                                <h1 className='text-secondary'>Need More Cpunts</h1>
                                                <button className='btn btn-outline-warning' onClick={()=>{this.updateCounter()}}>Add + 1 (Update Props Value)</button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
        );
    }
}

export default Counter;
