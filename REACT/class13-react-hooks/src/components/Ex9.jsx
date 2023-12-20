import React, { createContext, useState } from 'react'
import Child1 from './ex9-sub/Child1'
// import { userDetailsContext } from './Ex9';
import GrandChild2 from './ex9-sub/sub/GrandChild2';
import Chil2 from './ex9-sub/Chil2';

export const userDetailsContext = createContext(null);

const Ex9 = () => {

    const [userDetails,setUserDetails] = useState({
        name:"Raju",
        age:30
    })

  return (
    <div className="container">
        <div className="row">
            <div className="col text-center">
                <h5 className="display-3">createContext &  useContext Hook</h5>
                <p className="text-secondary">IS USED TO CREATE A COMMON DATA THAT CAN BE ACCESSED THROUGHOUT THE COMPONENT HIERARCHY.</p>
            </div>
        </div>
        <hr />
        <div className="row">
            <div className="col text-center">
                <h3 className="display-3 text-secondary">
                    This is the Parent Component.
                </h3>
            </div>
        </div>
        <hr />
        <Child1 userDetails={userDetails}/>

        <userDetailsContext.Provider value={userDetails}>
            <Chil2 />
        </userDetailsContext.Provider>
    </div>
  )
}

export default Ex9
