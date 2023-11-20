import React from 'react'
import UserCard from './UserCard';

function User(props) {
  return (
    <div>
        <div>{props.UsersData.map((item,index)=>{
        return(
               <UserCard key={index}{...item}/>
               )
            })}</div>

            {/* <p>{props.UsersData.map((user)=>{
              return(
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 border p-2 my-2">
                      <p><b>NAME : </b> {user.name}</p>
                      <p><b>ID : </b> {user.id}</p>
                      <p><b>MAIL : </b> {user.email}</p>
                      <p><b>AGE : </b> {user.age}</p>
                  </div>
                </div>
              )
            })}</p> */}
    </div>
  )
}

export default User;
