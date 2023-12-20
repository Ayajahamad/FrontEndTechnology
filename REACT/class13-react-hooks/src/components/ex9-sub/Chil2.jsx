import React, { Fragment } from 'react'
import GrandChild2 from './sub/GrandChild2'

const Chil2 = () => {
  return (
    <Fragment>
        <div className="row">
            <div className="col">
                <h3 className="text-secondary">This is Child Component - 2.</h3>
            </div>
        </div>
        <hr />
        <GrandChild2 />
    </Fragment>
  )
}

export default Chil2
