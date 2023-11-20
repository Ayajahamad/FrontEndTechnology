import React from 'react'

function ObjectStyle1() {
  const Container = {display:'flex',flexDirection:'column'}
  const Header = {padding:'20px 20px',
  textAlign:'center',
  color:'white',
  background:'#000',
  borderRadius:'10px',
  margin:'5px 15px'}

  return (
    <div style={Container}>
      <h2 style = {Header}>4) CREATING A STYLE OBJECT VARIABLES</h2>
    </div>
  )
}

export default ObjectStyle1;