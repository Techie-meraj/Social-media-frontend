import React, { useState } from 'react'
import axios from 'axios'
import { MdEmail } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const Register = () => {

  let Navigate =useNavigate()

    const [create,setcreate] =useState({
        username:"",
        email:"",
        password:""
    })

 const handlechange =(e)=>{
  const { name,value } = e.target
  setcreate({...create,[name]:value})

 }

 const handlesubmit =async(e)=>{
    e.preventDefault()
 try{
   let res=await axios.post('http://localhost:8080/user/create',create)
   toast.success(res.data.message)
   Navigate('/login')
   
}catch(error){
  if(error.response){
    toast.error(error.response.data.message)
  }
  else{
    console.log(error);
  }
    
 }

}

  return (<>
    <div className='border-2 w-3/4 mx-auto rounded-lg mt-10'>
    <div className='text-center text-4xl border-b-2 py-7'>Register User</div>
  <form className='w-2/5 mx-auto flex flex-col gap-5' onSubmit={handlesubmit}>
<label className="input input-bordered flex items-center gap-2">
 <MdEmail/>
  <input type="email" className="grow" placeholder="Email" name='email' value={create.email} onChange={handlechange} />
</label>
<label className="input input-bordered flex items-center gap-2">
<FaUserTie/>
  <input type="text" className="grow" placeholder="Username" name='username' value={create.username} onChange={handlechange} />
</label>
<label className="input input-bordered flex items-center gap-2">
<MdOutlinePassword />
 <input type="text" className="grow" placeholder="password" name='password' value={create.password} onChange={handlechange}  />
</label>
<button type='submit' className='btn btn-outline btn-success'>SignUp</button>
</form>
</div>
  </>)
}

export default Register