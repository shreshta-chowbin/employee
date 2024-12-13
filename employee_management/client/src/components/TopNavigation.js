import React, { useEffect } from 'react'
import { NavLink, useNavigate, } from 'react-router-dom';

function TopNavigation() {

  let navigate=useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("username")==="Shreshta Chowbin")
    {

    }
    else
    {
      navigate('/');
    }
  },[]);
  console.log(localStorage);
  
  
  return (
    <nav className='topNavigationNav'>
      <NavLink to='/dashboard' style={(obj)=>{
        // console.log(obj);
        if(obj.isActive===true)
          {
            return{color:"black",backgroundColor:"white",padding:"3px",borderRadius:"15px",width:"20%",textAlign:"center",textDecoration:"none",fontSize:"1rem",fontWeight:"600",fontFamily:"cursive",};
          }
          else
          {
            return{color:"white",textDecoration:"none",};
          }
        }}>Home</NavLink>
      <NavLink to='/employeeList' style={(obj)=>{
        // console.log(obj);
        if(obj.isActive===true)
          {
            return{color:"black",backgroundColor:"white",padding:"3px",borderRadius:"15px",width:"20%",textAlign:"center",textDecoration:"none",fontSize:"1rem",fontWeight:"600",fontFamily:"cursive" };
          }
          else
          {
            return{color:"white",textDecoration:"none",};
          }
        }}>Employee List</NavLink>
      <NavLink to='/' style={{color:"white",textDecoration:"none",}} onClick={()=>{
        localStorage.removeItem("username");
      }}>{localStorage.getItem("username")}- Logout</NavLink>
    </nav>
  )
}

export default TopNavigation
