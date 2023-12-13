import axios from 'axios';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const baseUrl = "http://localhost:4000";

const UserCard = (props) => {
    const {address, id , name, mobile , image, email} = props.contacts;

    const deleteContact = (id) => {
        if(window.confirm(`Do you want to delete the records of ${id}`)){
            axios
            .delete(`${baseUrl}/contacts/${id}`)
            .then((res)=>{
                toast.success(`Successfully you are deleted your records`)
                window.location.reload();
            })
            .catch((error)=>{toast.error(error.message)})
        }else{
            toast.error('You are cancelled the delete operation');
        }
    }

  return (
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <div className="card">
            <img src={image} alt={name} />
            <div className="card-body">
                <h5 className="text-center text-uppercase my-3">{name}</h5>
                <ul className="list-group">
                    <li className="list-group-item">
                        <strong>Email</strong>
                        <span className="float-end">{email}</span>
                    </li>
                    <li className="list-group-item">
                        <strong>Mobile</strong>
                        <span className="float-end">{mobile}</span>
                    </li>
                    <li className="list-group-item">
                        <strong>Address</strong>
                        <span className="float-end">{address}</span>
                    </li>
                </ul>
            </div>
            <div className="card-footer">
                <NavLink className="btn btn-sm btn-danger">
                    <i className="bi bi-pen"></i>
                </NavLink>
                <NavLink className="btn btn-sm btn-danger float-end">
                    <i className="bi bi-trash" onClick={()=>deleteContact(id)}></i>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default UserCard
