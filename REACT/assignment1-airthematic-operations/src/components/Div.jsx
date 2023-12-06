import React, {useState} from 'react'

const Div = () => {

  const [num1,setNum1] = useState('');
  const [num2,setNum2] = useState('');
  const [result,setResult] = useState('');
  const [error, setError] = useState('');

  const fNum =(event)=>{
      setNum1(event.target.value);
  }

  const lNum =(event)=>{
      setNum2(event.target.value);
  }

  const Cond = () =>{
       let first = Number(num1);
       let second = Number(num2);

       console.log(isNaN(first));

      if(num1==='' || num2===''){
          setError('Plz Enter Both Values');
      }
      else if(isNaN(first) || isNaN(second)){
          setError("Give the valid input"); 
     } 
      else{
          if(first > 1 || first < 0 || second > 1 || second < 0){
            setError('Enter the value 0 OR 1');
            setResult('');
          }else if(first === 1 || second === 1){
            setResult('True');
            setError('')
          }else{
            setResult('False');
            setError('')
          }
      }
  }

  const Clr = () =>{
      window.location.reload();
  }

  return (
    <div className="container">
        <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6 col-xxl-6 border p-3 my-3">
                <h3>Check True or False Using 0 or 1</h3>
            <div className="input-group">
                <input type="text" placeholder='Enter your first Number' aria-label="First name" className="form-control" onChange={fNum}  value={num1}/>
                <input type="text" placeholder='Enter your Second Number' aria-label="Last name" className="form-control" onChange={lNum}  value={num2}/>
            </div>
            <button className="btn bg-success text-white my-3 mx-2" onClick={Cond}>Check</button>
            <h4 className='text-center'>Result : {result?<span style={{color:'green'}}>{result}</span>:<span style={{color:'red'}}>{error}</span>}</h4>
            <button className="btn bg-danger text-white my-3 mx-2 btn-lg" onClick={Clr}>Clear</button>
            </div>  
        </div>
    </div>
  )
}

export default Div;
