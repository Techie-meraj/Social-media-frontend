import React, { useState } from 'react'
import axios from 'axios'
import { MdEmail } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'


const CreatePost = () => {

  let Navigate =useNavigate()

    const [createpost,setcreatepost] =useState({
        title:"",
        description:"",
        image:""
    })

 const handlechange =(e)=>{
  const { name,value } = e.target
  setcreatepost({...createpost,[name]:value})

 }

 const handlesubmit =async(e)=>{
    e.preventDefault()
 try{
    const id = localStorage.getItem('userId')
    let {data}=await axios.post('http://localhost:8080/post/createpost',{
    title:createpost.title,
    description:createpost.description,
    image:createpost.image,
    user:id
   })
   console.log('API RESPONSE',data);
   
   if(data.success){
    toast.success(data.message)
    Navigate('/myposts')
   }

   
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
    <div className='text-center text-4xl border-b-2 py-7'>Create Post</div>
  <form className='w-2/5 mx-auto flex flex-col gap-5' onSubmit={handlesubmit}>
<label className="input input-bordered flex items-center gap-2">
 <MdEmail/>
  <input type="text" className="grow" placeholder="Title" name='title' value={createpost.title} onChange={handlechange} />
</label>
<label className="input input-bordered flex items-center gap-2">
<FaUserTie/>
  <input type="text" className="grow" placeholder="description" name='description' value={createpost.description} onChange={handlechange} />
</label>
<label className="input input-bordered flex items-center gap-2">
<MdOutlinePassword />
 <input type="text" className="grow" placeholder="Image-URL" name='image' value={createpost.image} onChange={handlechange}  />
</label>
<button type='submit' className='btn btn-outline btn-success'>Create Post</button>
</form>
</div>
  </>)
}

export default CreatePost