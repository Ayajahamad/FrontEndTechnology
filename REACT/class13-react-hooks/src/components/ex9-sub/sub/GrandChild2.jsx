import React, { useContext } from 'react'
import { userDetailsContext } from '../../Ex9';

const GrandChild2 = () => {
    const contextData = useContext(userDetailsContext);
  return (
    <div className="row">
        <div className="col">
            <h3 className="text-secondary">This is GrandChild Component - 2.</h3>
        </div>
        <div className="col-12">
                <div className="lead border p-3 rounded">
                    <p>User Name is = <span>{contextData.name}</span></p>
                    <p>User Age is = <span>{contextData.age}</span></p> 
                </div>
            </div>
    </div>
  )
}

export default GrandChild2
