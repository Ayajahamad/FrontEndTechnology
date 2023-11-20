import React from "react";

class Ex11 extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return(
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h2 className="bg-warning text-center text-white">REACT CLASS PROPS</h2>
                </div>
            </div>
        )
    }
}
export default Ex11;