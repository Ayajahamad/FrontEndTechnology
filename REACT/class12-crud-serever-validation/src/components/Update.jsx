import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserForm from './../middleware/FormValidate';
import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = "http://localhost:4000";

const Update = () => {
  const params = useParams();
  const {contact,errors,readValue,submitHandler,setContact} = UserForm();

  useEffect(()=>{
    axios
    .get(`${baseUrl}/contacts/${params.id}`)
    .then((res)=>{
      console.log(res)
      setContact(res.data)
    }).catch((err)=> toast.error(err.message))
  },[]);

  const navigate = useNavigate();

  let updateHandler = async (e) => {
    e.preventDefault();
    await axios
    .put(`${baseUrl}/contacts/${params.id}`,contact)
    .then((res)=>{
      toast.success("User Updated");
      navigate('/');
    }).catch((err)=>{toast.error(err.message)});
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h5 className="display-3 text-center">Update {params.id}</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
          <div className="card p-3">
            <div className="card-body">
              <form autoComplete='off' onSubmit={updateHandler}>
                  <div className="form-group my-2">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text"
                    name="name"
                    id='name'
                    className='form-control'
                    required
                    minLength={4}
                    maxLength={10} 
                    onChange={readValue}
                    value={contact.name}
                    />
                    {
                      errors.name ? (<div className="alert alert-danger">{errors.name}</div>) : null
                    }
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email"
                    name="email"
                    id='email'
                    className='form-control'
                    placeholder='username@domaim.com'
                    onChange={readValue}
                    required
                    value={contact.email}
                    />
                    {
                      errors.email ? (<div className="alert alert-danger">{errors.email}</div>) : null
                    }
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="image">Image</label>
                    <input 
                    type="url"
                    name="image"
                    id='image'
                    className='form-control'
                    placeholder='Enter url formate for image link'
                    required
                    onChange={readValue}
                    value={contact.image}
                    />
                    {
                      errors.image ? (<div className="alert alert-danger">{errors.image}</div>) : null
                    }
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="mobile">Mobile</label>
                    <input 
                    type="number"
                    name="mobile"
                    id='mobile'
                    className='form-control'
                    required
                    onChange={readValue}
                    value={contact.mobile}
                    />
                    {
                      errors.mobile ? (<div className="alert alert-danger">{errors.mobile}</div>) : null
                    }
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="address">Address</label>
                    <textarea 
                    name="address" 
                    id="address" 
                    cols="30" 
                    rows="5" 
                    className='form-control' 
                    required 
                    onChange={readValue} 
                    value={contact.address}
                    ></textarea>
                    {
                      errors.address ? (<div className="alert alert-danger">{errors.address}</div>) : null
                    }
                  </div>
                  <div className="form-group my-2">
                    <input type="submit" value="Create" className='btn btn-outline-success'/>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Update
