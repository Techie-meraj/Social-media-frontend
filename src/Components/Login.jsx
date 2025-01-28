import React, { useState } from 'react'
import axios from 'axios'
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { authActions } from '../Context/Store';
// import { useAuth } from '../Context/MyContext';
import { useEffect } from 'react';



const Login = () => {
  const dispatch =useDispatch()
  // const {setisLoggedIn} =useAuth()
  let Navigate =useNavigate()
  const [create,setcreate] =useState({
    email:"",
    password:""
})

const handlechange =(e)=>{
const { name,value } = e.target
setcreate({...create,[name]:value})

}

const handlesubmit =async(e)=>{
e.preventDefault()
console.log(create);
try{
let res=await axios.post('http://localhost:8080/user/login',create)
// setisLoggedIn(true);
if(res.data.success){
  console.log(res.data);
  localStorage.setItem('userId',res.data.user._id)
  dispatch(authActions.login())
}
toast.success(res.data.msg);
// localStorage.setItem('auth',JSON.stringify({user:res.data.user,token:res.data.token}));
// localStorage.setItem('auth',JSON.stringify({msg:res.data.message}))
Navigate('/posts')

}catch(error){
  if(error.response){
    toast.error(error.response.data.msg)

  }else{
console.log(error);
  }
  
}

}


  return (
    <>
    <div className='border-2 w-3/4 mx-auto rounded-lg mt-16'>
    <div className='text-center text-4xl border-b-2 py-7'>LogIn</div>
  <form className='w-2/5 mx-auto flex flex-col gap-5' onSubmit={handlesubmit}>
<label className="input input-bordered flex items-center gap-2">
 <MdEmail/>
  <input type="email" className="grow" placeholder="Email" name='email' value={create.email} onChange={handlechange} />
</label>
<label className="input input-bordered flex items-center gap-2">
<MdOutlinePassword />
 <input type="text" className="grow" placeholder="password" name='password' value={create.password} onChange={handlechange}  />
</label>
<button type='submit' className='btn btn-outline btn-success'>Login</button>
</form>
</div>
<ToastContainer position="bottom-right" />
  </>)
}

export default Login