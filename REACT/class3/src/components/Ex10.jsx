import React, { Component } from 'react';

class Ex10 extends Component {

    // constructor(){
    //     super()
    // }


    // Another method for DefaultProps

    static defaultProps={
        bgcolor : "#eceff1",
        name : "CLASS DEFAULT PROPS",
        color : "#000",
        url : "https://i.pinimg.com/564x/1a/76/88/1a768897580b2938c7483e4a24e2514e.jpg",
        padding : "10px",
        lorem : "attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href.",
        height : "200px",
        value : "For More"
    }

    render() {
        return (
            <div className='row'>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xxl-12 mt-2">
                    <h1 className="border p-2 text-center">REACT CLASS DEFAULT PROPS</h1>
                </div>
        
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="lead border">
                        <h3 style={{backgroundColor:this.props.bgcolor,color:this.props.color, padding:this.props.padding}}>{this.props.name}</h3>
                        <img src={this.props.url} alt="" className="col-12" height={this.props.height}/>
                        <p style={{padding:this.props.padding}}>{this.props.lorem}</p>
                        <button type="button" className='btn btn-outline-primary m-2'>{this.props.value}</button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="lead border">
                        <h3 style={{backgroundColor:this.props.bgcolor,color:this.props.color, padding:this.props.padding}}>{this.props.name}</h3>
                        <img src={this.props.url} alt="" className="col-12" height={this.props.height}/>
                        <p style={{padding:this.props.padding}}>{this.props.lorem}</p>
                        <button type="button" className='btn btn-outline-primary m-2'>{this.props.value}</button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="lead border">
                        <h3 style={{backgroundColor:this.props.bgcolor,color:this.props.color, padding:this.props.padding}}>{this.props.name}</h3>
                        <img src={this.props.url} alt="" className="col-12" height={this.props.height}/>
                        <p style={{padding:this.props.padding}}>{this.props.lorem}</p>
                        <button type="button" className='btn btn-outline-primary m-2'>{this.props.value}</button>
                    </div>
                </div>
            </div>
        );
    }
}

// Type 1 For DefaultProps

// Ex10.defaultProps={
//     bgcolor : "#eceff1",
//     name : "CLASS DEFAULT PROPS",
//     color : "#000f",
//     url : "https://i.pinimg.com/564x/1a/76/88/1a768897580b2938c7483e4a24e2514e.jpg",
//     padding : "10px",
//     lorem : "attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href.",
//     height : "200px",
//     value : "For More"
// }

export default Ex10;
