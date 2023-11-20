import React, { Component } from "react";

class Ex9 extends Component{
    // Not necessorry

    // constructor(props){
    //     super(props);
    //     console.log(props)
    // }

    render(){
        const {img,name,lorem} = this.props;
        return(
            <div className='row'>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xxl-12 mt-2">
                    <h1 className="border p-2 text-center">REACT DESCTURING CLASS PROPS</h1>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card">
                            <img src={img} alt="" height={"300px"}/>
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{lorem}</p>
                                <button type="button" className='btn btn-outline-primary'>View More</button>
                            </div>
                        </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card">
                            <img src={img} alt="" height={"300px"}/>
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{lorem}</p>
                                <button type="button" className='btn btn-outline-primary'>View More</button>
                            </div>
                        </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card">
                            <img src={img} alt="" height={"300px"}/>
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{lorem}</p>
                                <button type="button" className='btn btn-outline-primary'>View More</button>
                            </div>
                        </div>
                </div>
            </div> 
        )
    }
}

export default Ex9;
