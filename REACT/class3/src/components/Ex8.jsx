import React, { Component } from 'react';

class Ex8 extends Component {
    render() {
        return (
            <div className='row'>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xxl-12 mt-2">
                    <h1 className="border p-2 text-center">REACT CLASS PROPS</h1>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card">
                            <img src={this.props.img} alt="" height={"300px"}/>
                            <div className="card-body">
                                <h5 className="card-title">{this.props.name}</h5>
                                <p className="card-text">{this.props.lorem}</p>
                                <button type="button" className='btn btn-outline-primary'>View More</button>
                            </div>
                        </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card">
                            <img src={this.props.img} alt="" height={"300px"}/>
                            <div className="card-body">
                                <h5 className="card-title">{this.props.name}</h5>
                                <p className="card-text">{this.props.lorem}</p>
                                <button type="button" className='btn btn-outline-primary'>View More</button>
                            </div>
                        </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card">
                            <img src={this.props.img} alt="" height={"300px"}/>
                            <div className="card-body">
                                <h5 className="card-title">{this.props.name}</h5>
                                <p className="card-text">{this.props.lorem}</p>
                                <button type="button" className='btn btn-outline-primary'>View More</button>
                            </div>
                        </div>
                </div>
            </div> 
        );
    }
}

export default Ex8;
