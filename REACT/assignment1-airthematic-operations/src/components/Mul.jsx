import React, {useState} from 'react';

const Mul = () => {

  const [num1,setNum1] = useState('');
  const [result,setResult] = useState('');
  const [error, setError] = useState('');

  const fNum =(event)=>{
      setNum1(event.target.value);
  }

  const Cond = () =>{
       let age = Number(num1);

       age >= 18 ? setResult('You Can Drive') : setError('Cannot Drive');

  }

  const Clr = () =>{
      window.location.reload();
  }

  return (
    <div className="container">
        <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6 col-xxl-6 border p-3 my-3">
                <h3>Check Weather You can Drive or Not</h3>
            <div className="input-group">
                <input type="number" placeholder='Enter your Age Here' aria-label="First name" className="form-control" onChange={fNum}  value={num1}/>
            </div>
            <button className="btn bg-success text-white my-3 mx-2" onClick={Cond}>Condition</button>
            <h4 className='text-center'>Result : {result?<span style={{color:'green'}}>{result}</span>:<span style={{color:'red'}}>{error}</span>}</h4>
            <button className="btn bg-danger text-white my-3 mx-2 btn-lg" onClick={Clr}>Clear</button>
            </div>  
        </div>
    </div>
  )
}

export default Mul;
