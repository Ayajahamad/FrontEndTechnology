import React, { useMemo, useState } from 'react'
import Age from './ex8-sub/Age';
import AgeInfo from './ex8-sub/AgeInfo';

const Ex8 = () => {

  const [age,setAge] = useState(30);

  const increamentAge = ()=>{
    setAge(age+1)
  }

  const updateAge = () =>{
    return `my age is ${age} years`
  }

  useMemo(()=>{
    return updateAge();
  },[age])


  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h5 className="display-3">useMemo Hook</h5>
          <p className="text-secondary">useCallback returns the memorized callback response.</p>
          <p className="text-secondary">useMemo will only recompute the memorized value when one of the deps has changed.</p>
        </div>
      </div>
      <hr />
      <Age age={age} ageHandler={increamentAge}/>
      <hr />
      <AgeInfo updateAge = {updateAge} />
    </div>
  )
}

export default Ex8
