import React, { useCallback, useState } from 'react'
import Age from './ex7-sub/Age';
import AgeInfo from './ex7-sub/AgeInfo';

// useCallback => will return memorized value of callback.
// useMemo => will return memorized function of callback.

const Ex7 = () => {

  const [age,setAge] = useState(10);

  const increamentAge = () =>{
    setAge(age+1);
  }

  const userAge = `David age is ${age} years`;
  const updateAge = useCallback(()=>{
    return userAge;
  },[age]);

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h3 className="display-3">useCallback Hook</h3>
          <p>useCallback will return a memorized version of the callback that only changes if one the inputs has changed.</p>
        </div>
      </div>
      <hr />
      <Age age={age} ageHandler={increamentAge} />
      <hr />
      <AgeInfo ageInfo = {updateAge}/>
    </div>
  )
}

export default Ex7
